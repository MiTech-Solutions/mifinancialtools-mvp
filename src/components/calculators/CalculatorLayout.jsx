export default function CalculatorLayout({
  eyebrow,
  title,
  description,
  children,
  result,
}) {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            {children}
          </div>

          <aside className="rounded-[1.75rem] border border-white/10 bg-[#1B2723] p-5 shadow-2xl sm:p-6">
            {result ?? (
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8C685]">
                  Results
                </p>

                <h2 className="font-display mt-4 text-2xl font-semibold text-white">
                  Your estimate will appear here
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Enter your values on the left to view a clear breakdown. We’ll
                  keep this clean and easy to read across all calculator pages.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Estimated monthly amount</p>
                    <p className="font-numeral mt-2 text-2xl font-semibold text-white">R0.00</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Total repayment / future value</p>
                    <p className="font-numeral mt-2 text-2xl font-semibold text-white">R0.00</p>
                  </div>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
