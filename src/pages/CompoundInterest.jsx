import { useMemo, useState } from "react";
import CalculatorLayout from "../components/calculators/CalculatorLayout";
import { formatCurrency } from "../utils/formatCurrency";

export default function CompoundInterest() {
  const [initialInvestment, setInitialInvestment] = useState("5000");
  const [monthlyContribution, setMonthlyContribution] = useState("1500");
  const [annualReturn, setAnnualReturn] = useState("12");
  const [years, setYears] = useState("10");

  const results = useMemo(() => {
    const principal = Number(initialInvestment) || 0;
    const contribution = Number(monthlyContribution) || 0;
    const rate = Number(annualReturn) || 0;
    const periodYears = Number(years) || 0;

    const months = Math.max(periodYears * 12, 0);
    const monthlyRate = rate / 100 / 12;

    if (months <= 0) {
      return {
        futureValue: 0,
        totalContributions: 0,
        totalGrowth: 0,
      };
    }

    let futureValue = principal;

    for (let i = 0; i < months; i += 1) {
      futureValue = futureValue * (1 + monthlyRate) + contribution;
    }

    const totalContributions = principal + contribution * months;
    const totalGrowth = futureValue - totalContributions;

    return {
      futureValue,
      totalContributions,
      totalGrowth,
    };
  }, [initialInvestment, monthlyContribution, annualReturn, years]);

  const resultPanel = (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
        Estimated results
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-white">
        Investment growth breakdown
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        This projection assumes a consistent return rate and regular monthly
        contributions. Real market performance will vary.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">Projected future value</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {formatCurrency(results.futureValue)}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Total contributions</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {formatCurrency(results.totalContributions)}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-400">Estimated growth</p>
            <p className="mt-2 text-xl font-semibold text-white">
              {formatCurrency(results.totalGrowth)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CalculatorLayout
      eyebrow="Investment growth tool"
      title="Compound Interest Calculator"
      description="Project your future investment value using a starting amount, monthly contributions, expected return, and time horizon."
      result={resultPanel}
    >
      <div className="grid gap-5">
        <div>
  <label className="mb-2 block text-sm font-medium text-slate-200">
    Initial investment
  </label>
  <input
    type="text"
    value={Number(initialInvestment || 0).toLocaleString("en-US")}
    onChange={(e) => {
      const raw = e.target.value.replace(/,/g, "");
      if (!isNaN(raw)) {
        setInitialInvestment(raw);
      }
    }}
    placeholder="e.g. 5000"
    className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-200">
    Monthly contribution
  </label>
  <input
    type="text"
    value={Number(monthlyContribution || 0).toLocaleString("en-US")}
    onChange={(e) => {
      const raw = e.target.value.replace(/,/g, "");
      if (!isNaN(raw)) {
        setMonthlyContribution(raw);
      }
    }}
    placeholder="e.g. 1500"
    className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
  />
</div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Expected annual return (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              placeholder="e.g. 12"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Investment period (years)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}

              placeholder="e.g. 10"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}

