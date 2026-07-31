import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,163,67,0.14),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(78,155,110,0.10),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
            Built for South African money decisions
          </div>

          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn a real decision into a real number.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Car finance, bond repayments, SARS-accurate tax, and long-term
            growth — calculated with actual South African rates and
            brackets, not generic estimates built for another country.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/car-repayment"
              className="inline-flex items-center justify-center rounded-2xl bg-[#C68F2A] px-6 py-3 text-sm font-medium text-[#0E1613] transition hover:bg-[#D6A343]"
            >
              Start with car calculator
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link
              to="/guides"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              Browse the guides
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              SARS 2025/26 tax tables
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              No signup required
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Free, always
            </div>
          </div>
        </div>

        {/* Signature element: the number IS the hero visual — a live
            example read-out styled like an instrument-panel figure,
            replacing the generic "product mockup" card pattern. */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#C68F2A]/15 to-[#4E9B6E]/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
              Bond Repayment example
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              R850,000 home · R85,000 deposit · 11.75% · 20 years
            </p>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#E8C685]">
                Monthly repayment
              </p>
              <p className="font-numeral mt-2 text-5xl font-semibold text-white sm:text-6xl">
                R8,240
              </p>
              <div
                className="mt-4 h-2 w-full opacity-70"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #D6A343 0, #D6A343 2px, transparent 2px, transparent 12px)",
                }}
                aria-hidden="true"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs text-slate-500">Loan amount</p>
                <p className="font-numeral mt-1 text-lg font-semibold text-white">
                  R765,000
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Total interest</p>
                <p className="font-numeral mt-1 text-lg font-semibold text-white">
                  R1,212,600
                </p>
              </div>
            </div>

            <Link
              to="/bond-repayment"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#E8C685] hover:text-[#D6A343]"
            >
              Try it with your own numbers
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
