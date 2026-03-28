import CalculatorLayout from "../components/calculators/CalculatorLayout";

export default function CarRepayment() {
  return (
    <CalculatorLayout
      eyebrow="Vehicle finance tool"
      title="Car Repayment Calculator"
      description="Estimate monthly car repayments using purchase price, deposit, interest rate, and loan term."
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Vehicle price
          </label>
          <input
            type="number"
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
              placeholder="e.g. 72"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
