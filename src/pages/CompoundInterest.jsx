import CalculatorLayout from "../components/calculators/CalculatorLayout";

export default function CompoundInterest() {
  return (
    <CalculatorLayout
      eyebrow="Investment growth tool"
      title="Compound Interest Calculator"
      description="Project your future investment value using a starting amount, monthly contributions, expected return, and time horizon."
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Initial investment
          </label>
          <input
            type="number"
            placeholder="e.g. 5000"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Monthly contribution
          </label>
          <input
            type="number"
            placeholder="e.g. 1500"
            className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Annual return (%)
            </label>
            <input
              type="number"
              placeholder="e.g. 12"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Years
            </label>
            <input
              type="number"
              placeholder="e.g. 10"
              className="w-full rounded-2xl border border-white/10 bg-[#0B1628] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
            />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
