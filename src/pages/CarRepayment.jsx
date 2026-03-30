import { useMemo, useState } from "react";
import CalculatorLayout from "../components/calculators/CalculatorLayout";
import { formatCurrency } from "../utils/formatCurrency";

export default function CarRepayment() {
  const [vehiclePrice, setVehiclePrice] = useState(250000);
  const [deposit, setDeposit] = useState(30000);
  const [interestRate, setInterestRate] = useState(12.5);
  const [termMonths, setTermMonths] = useState(72);

  const results = useMemo(() => {
    const price = Number(vehiclePrice) || 0;
    const upfrontDeposit = Number(deposit) || 0;
    const annualRate = Number(interestRate) || 0;
    const months = Number(termMonths) || 0;

    const principal = Math.max(price - upfrontDeposit, 0);
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
  }, [vehiclePrice, deposit, interestRate, termMonths]);

  const resultPanel = (
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
        Estimated results
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-white">
        Car finance breakdown
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        This estimate excludes extras like initiation fees, monthly admin fees,
        insurance, balloon payments, and dealer add-ons.
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
      eyebrow="Vehicle finance tool"
      title="Car Repayment Calculator"
      description="Estimate monthly car repayments using purchase price, deposit, interest rate, and loan term."
      result={resultPanel}
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Vehicle price
          </label>
          <input
            type="number"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(Number(e.target.value))}
            placeholder="e.g. 250000"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Deposit
          </label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(Number(e.target.value))}
            placeholder="e.g. 30000"
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
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              placeholder="e.g. 12.5"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Term (months)
            </label>
            <input
              type="number"
              value={termMonths}
              onChange={(e) => setTermMonths(Number(e.target.value))}
              placeholder="e.g. 72"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}