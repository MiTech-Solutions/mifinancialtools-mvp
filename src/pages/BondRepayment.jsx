import { useMemo, useState } from "react";
import CalculatorLayout from "../components/calculators/CalculatorLayout";
import { formatCurrency } from "../utils/formatCurrency";

export default function BondRepayment() {
  const [propertyPrice, setPropertyPrice] = useState("850000");
  const [deposit, setDeposit] = useState("85000");
  const [interestRate, setInterestRate] = useState("11.75");
  const [termYears, setTermYears] = useState("20");

  const results = useMemo(() => {
    const price = Number(propertyPrice) || 0;
    const upfrontDeposit = Number(deposit) || 0;
    const annualRate = Number(interestRate) || 0;
    const years = Number(termYears) || 0;

    const principal = Math.max(price - upfrontDeposit, 0);
    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    if (principal <= 0 || months <= 0) {
      return {
        principal: 0,
        monthlyRepayment: 0,
        totalRepayment: 0,
        totalInterest: 0,
      };
    }

    let monthlyRepayment = 0;

    if (monthlyRate === 0) {
      monthlyRepayment = principal / months;
    } else {
      monthlyRepayment =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));
    }

    const totalRepayment = monthlyRepayment * months;
    const totalInterest = totalRepayment - principal;

    return {
      principal,
      monthlyRepayment,
      totalRepayment,
      totalInterest,
    };
  }, [propertyPrice, deposit, interestRate, termYears]);

  const resultPanel = (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
        Estimated results
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-white">
        Home loan breakdown
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        This estimate is for planning only and excludes transfer costs, bond
        registration fees, insurance, rates, and bank service fees.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Loan amount</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(results.principal)}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Estimated monthly repayment</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(results.monthlyRepayment)}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Total repayment</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {formatCurrency(results.totalRepayment)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Total interest</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {formatCurrency(results.totalInterest)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CalculatorLayout
      eyebrow="Home loan tool"
      title="Bond Repayment Calculator"
      description="Estimate monthly home loan repayments based on property price, deposit, rate, and repayment term."
      result={resultPanel}
    >
      <div className="grid gap-5">
        <div>
  <label className="mb-2 block text-sm font-medium text-slate-200">
    Property price
  </label>
  <input
    type="text"
    value={Number(propertyPrice || 0).toLocaleString("en-US")}
    onChange={(e) => {
      const raw = e.target.value.replace(/,/g, "");
      if (!isNaN(raw)) {
        setPropertyPrice(raw);
      }
    }}
    placeholder="e.g. 850000"
    className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-200">
    Deposit
  </label>
  <input
    type="text"
    value={Number(deposit || 0).toLocaleString("en-US")}
    onChange={(e) => {
      const raw = e.target.value.replace(/,/g, "");
      if (!isNaN(raw)) {
        setDeposit(raw);
      }
    }}
    placeholder="e.g. 85000"
    className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
  />
</div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Interest rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g. 11.75"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Term (years)
            </label>
            <input
              type="number"
              value={termYears}
              onChange={(e) => setTermYears(e.target.value)}

              placeholder="e.g. 20"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
