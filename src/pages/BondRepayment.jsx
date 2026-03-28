import CalculatorLayout from "../components/calculators/CalculatorLayout";

export default function BondRepayment() {
  return (
    <CalculatorLayout
      eyebrow="Home loan tool"
      title="Bond Repayment Calculator"
      description="Estimate monthly home loan repayments based on property price, deposit, rate, and repayment term."
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Property price
          </label>
          <input
            type="number"
            placeholder="e.g. 850000"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Deposit
          </label>
          <input
            type="number"
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
              placeholder="e.g. 20"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
