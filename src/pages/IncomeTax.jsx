import { useMemo, useState } from "react";
import CalculatorLayout from "../components/calculators/CalculatorLayout";
import CalculatorArticle from "../components/calculators/CalculatorArticle";
import { incomeTaxContent } from "../data/content/incomeTaxContent";
import { formatCurrency } from "../utils/formatCurrency";
import AnimatedCurrency from "../components/common/AnimatedCurrency";
import { Helmet } from "react-helmet-async";

// ── SARS 2025/26 Tax Year (1 March 2025 – 28 February 2026) ──────────────────

const TAX_BRACKETS = [
  { min: 0,       max: 237100,  base: 0,      rate: 0.18 },
  { min: 237101,  max: 370500,  base: 42678,  rate: 0.26 },
  { min: 370501,  max: 512800,  base: 77362,  rate: 0.31 },
  { min: 512801,  max: 673000,  base: 121475, rate: 0.36 },
  { min: 673001,  max: 857900,  base: 179147, rate: 0.39 },
  { min: 857901,  max: 1817000, base: 251258, rate: 0.41 },
  { min: 1817001, max: Infinity, base: 644489, rate: 0.45 },
];

const REBATES = {
  primary:   17235, // all taxpayers
  secondary: 9444,  // age 65–74
  tertiary:  3145,  // age 75+
};

const MEDICAL_CREDIT_PER_MONTH = {
  main:        364,
  firstDependent: 364,
  additional:  246,
};

const UIF_RATE        = 0.01;
const UIF_MONTHLY_CAP = 17711.58; // salary cap for UIF (annual R212 539 / 12)

function calcTax(taxableIncome) {
  if (taxableIncome <= 0) return 0;
  const bracket = TAX_BRACKETS.find(
    (b) => taxableIncome >= b.min && taxableIncome <= b.max
  );
  if (!bracket) return 0;
  return bracket.base + bracket.rate * (taxableIncome - bracket.min);
}

function marginalRate(taxableIncome) {
  if (taxableIncome <= 0) return 0;
  const bracket = TAX_BRACKETS.find(
    (b) => taxableIncome >= b.min && taxableIncome <= b.max
  );
  return bracket ? bracket.rate * 100 : 0;
}

export default function IncomeTax() {
  const [salaryInput, setSalaryInput]       = useState("25000");
  const [salaryMode, setSalaryMode]         = useState("monthly"); // "monthly" | "annual"
  const [ageGroup, setAgeGroup]             = useState("under65");
  const [raContrib, setRaContrib]           = useState("0");
  const [medMembers, setMedMembers]         = useState("0"); // total members incl. main

  const results = useMemo(() => {
    const rawSalary  = Number(salaryInput) || 0;
    const annualGross = salaryMode === "monthly" ? rawSalary * 12 : rawSalary;
    const annualRA    = Math.min(Number(raContrib) || 0, annualGross * 0.275);

    const taxableIncome = Math.max(annualGross - annualRA, 0);

    let grossTax = calcTax(taxableIncome);

    // Rebates
    let totalRebate = REBATES.primary;
    if (ageGroup === "65to74") totalRebate += REBATES.secondary;
    if (ageGroup === "75plus") totalRebate += REBATES.secondary + REBATES.tertiary;

    // Medical tax credits (monthly credit × 12)
    const members = Number(medMembers) || 0;
    let annualMedCredit = 0;
    if (members >= 1) annualMedCredit += MEDICAL_CREDIT_PER_MONTH.main * 12;
    if (members >= 2) annualMedCredit += MEDICAL_CREDIT_PER_MONTH.firstDependent * 12;
    if (members >= 3) annualMedCredit += MEDICAL_CREDIT_PER_MONTH.additional * 12 * (members - 2);

    const annualTax   = Math.max(grossTax - totalRebate - annualMedCredit, 0);
    const monthlyTax  = annualTax / 12;

    const monthlySalary = salaryMode === "monthly" ? rawSalary : rawSalary / 12;
    const uifBase       = Math.min(monthlySalary, UIF_MONTHLY_CAP);
    const monthlyUIF    = uifBase * UIF_RATE;

    const monthlyTakeHome = monthlySalary - monthlyTax - monthlyUIF;

    const effectiveRate = taxableIncome > 0 ? (annualTax / taxableIncome) * 100 : 0;
    const marginal      = marginalRate(taxableIncome);

    return {
      annualGross,
      annualRA,
      taxableIncome,
      grossTax,
      totalRebate,
      annualMedCredit,
      annualTax,
      monthlyTax,
      monthlyUIF,
      monthlyTakeHome,
      effectiveRate,
      marginal,
      monthlySalary,
    };
  }, [salaryInput, salaryMode, ageGroup, raContrib, medMembers]);

  // ── Input helpers ─────────────────────────────────────────────────────────
  function handleNumericInput(setter) {
    return (e) => {
      // Strip everything except digits and one decimal point
      const raw = e.target.value.replace(/[^\d]/g, "");
      setter(raw);
    };
  }

  function formatDisplay(raw) {
    const n = Number(raw) || 0;
    return n === 0 ? "" : n.toLocaleString("en-ZA");
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-[#171F1B] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#D6A343]/40";

  const toggleBase =
    "flex-1 rounded-xl px-3 py-2 text-sm font-medium transition";
  const toggleActive   = "bg-[#C68F2A] text-[#0E1613]";
  const toggleInactive = "text-slate-400 hover:text-white";

  // ── Result panel ──────────────────────────────────────────────────────────
  const resultPanel = (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8C685]">
        Estimated results
      </p>

      <h2 className="font-display mt-4 text-2xl font-semibold text-white">
        Tax breakdown
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        Based on SARS 2025/26 tax tables. Excludes employer contributions,
        pension fund deductions, and other personalised deductions.
      </p>

      {/* Hero figure */}
      <div className="mt-6 rounded-2xl border border-[#D6A343]/20 bg-[#D6A343]/5 p-4">
        <p className="text-sm text-slate-400">Estimated monthly take-home</p>
        <p className="font-numeral mt-2 text-3xl font-bold text-white">
          <AnimatedCurrency value={results.monthlyTakeHome} />
        </p>
      </div>

      {/* Monthly deductions */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Monthly PAYE tax</p>
          <p className="font-numeral mt-2 text-xl font-semibold text-white">
            <AnimatedCurrency value={results.monthlyTax} />
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Monthly UIF</p>
          <p className="font-numeral mt-2 text-xl font-semibold text-white">
            <AnimatedCurrency value={results.monthlyUIF} />
          </p>
        </div>
      </div>

      {/* Rates */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Effective tax rate</p>
          <p className="font-numeral mt-2 text-xl font-semibold text-white">
            {results.effectiveRate.toFixed(1)}%
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Marginal tax rate</p>
          <p className="font-numeral mt-2 text-xl font-semibold text-white">
            {results.marginal.toFixed(0)}%
          </p>
        </div>
      </div>

      {/* Annual breakdown */}
      <div className="mt-5">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-slate-400">
          Annual breakdown
        </p>
        <div className="space-y-2 text-sm">
          {[
            { label: "Gross income",          value: results.annualGross },
            { label: "RA / pension deduction", value: -results.annualRA,      hide: results.annualRA === 0 },
            { label: "Taxable income",         value: results.taxableIncome,  highlight: true },
            { label: "Gross tax",              value: -results.grossTax },
            { label: "Rebates",                value: results.totalRebate },
            { label: "Medical tax credits",    value: results.annualMedCredit, hide: results.annualMedCredit === 0 },
            { label: "Annual tax payable",     value: -results.annualTax,     highlight: true },
          ]
            .filter((r) => !r.hide)
            .map((row) => (
              <div
                key={row.label}
                className={`flex justify-between rounded-xl px-3 py-2 ${
                  row.highlight
                    ? "border border-white/10 bg-white/5 font-medium text-white"
                    : "text-slate-400"
                }`}
              >
                <span>{row.label}</span>
                <span className={row.value < 0 ? "text-red-400" : "text-slate-200"}>
                  {row.value < 0
                    ? `−${formatCurrency(Math.abs(row.value))}`
                    : formatCurrency(row.value)}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <Helmet>
        <title>Income Tax Calculator South Africa 2025/26 | MiTools</title>
        <meta
          name="description"
          content="Calculate your South African income tax for 2025/26. Enter your salary to instantly see PAYE tax, UIF, take-home pay, effective rate, and a full SARS tax breakdown. Free tool."
        />
        <link rel="canonical" href="https://mitools.app/income-tax" />
        <meta property="og:title" content="Income Tax Calculator South Africa 2025/26 | MiTools" />
        <meta
          property="og:description"
          content="Free South African PAYE and income tax calculator for 2025/26. See your monthly take-home pay, effective tax rate, UIF, and full SARS tax breakdown instantly."
        />
        <meta property="og:url" content="https://mitools.app/income-tax" />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>

      <CalculatorLayout
        eyebrow="SARS 2025/26 tax year"
        title="Income Tax Calculator"
        description="Estimate your monthly take-home pay, PAYE tax, and UIF based on your salary and personal circumstances."
        result={resultPanel}
      >
        <div className="grid gap-5">

          {/* Salary input + monthly/annual toggle */}
          <div>
            <label htmlFor="tax-salary" className="mb-2 block text-sm font-medium text-slate-200">
              Gross salary
            </label>
            <div className="flex gap-3">
              <input
                id="tax-salary"
                type="text"
                value={formatDisplay(salaryInput)}
                onChange={handleNumericInput(setSalaryInput)}
                placeholder="e.g. 25 000"
                className={inputClass + " flex-1"}
              />
              <div
                role="group"
                aria-label="Salary period"
                className="flex shrink-0 items-center gap-1 rounded-2xl border border-white/10 bg-[#171F1B] p-1"
              >
                <button
                  type="button"
                  aria-pressed={salaryMode === "monthly"}
                  onClick={() => setSalaryMode("monthly")}
                  className={`${toggleBase} ${salaryMode === "monthly" ? toggleActive : toggleInactive}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  aria-pressed={salaryMode === "annual"}
                  onClick={() => setSalaryMode("annual")}
                  className={`${toggleBase} ${salaryMode === "annual" ? toggleActive : toggleInactive}`}
                >
                  Annual
                </button>
              </div>
            </div>
          </div>

          {/* Age group */}
          <div>
            <label htmlFor="tax-age-group" className="mb-2 block text-sm font-medium text-slate-200">
              Age group
            </label>
            <select
              id="tax-age-group"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className={inputClass + " cursor-pointer"}
            >
              <option value="under65">Under 65</option>
              <option value="65to74">65 – 74</option>
              <option value="75plus">75 and older</option>
            </select>
          </div>

          {/* RA contribution */}
          <div>
            <label htmlFor="tax-ra-contrib" className="mb-2 block text-sm font-medium text-slate-200">
              Retirement annuity / pension contribution{" "}
              <span className="font-normal text-slate-400">(annual, optional)</span>
            </label>
            <input
              id="tax-ra-contrib"
              type="text"
              value={formatDisplay(raContrib)}
              onChange={handleNumericInput(setRaContrib)}
              placeholder="e.g. 36 000"
              className={inputClass}
            />
            <p className="mt-1.5 text-xs text-slate-400">
              Capped at 27.5% of gross income by SARS.
            </p>
          </div>

          {/* Medical aid members */}
          <div>
            <label htmlFor="tax-med-members" className="mb-2 block text-sm font-medium text-slate-200">
              Medical aid members{" "}
              <span className="font-normal text-slate-400">(including yourself)</span>
            </label>
            <select
              id="tax-med-members"
              value={medMembers}
              onChange={(e) => setMedMembers(e.target.value)}
              className={inputClass + " cursor-pointer"}
            >
              <option value="0">No medical aid</option>
              <option value="1">1 — just me</option>
              <option value="2">2 — me + 1 dependent</option>
              <option value="3">3 — me + 2 dependents</option>
              <option value="4">4 — me + 3 dependents</option>
              <option value="5">5 — me + 4 dependents</option>
            </select>
            <p className="mt-1.5 text-xs text-slate-400">
              Medical tax credits: R364/month for main member and first dependent,
              R246/month for each additional dependent.
            </p>
          </div>

        </div>
      </CalculatorLayout>
    <CalculatorArticle {...incomeTaxContent} />
    </>
  );
}
