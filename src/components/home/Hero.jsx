import { Link } from "react-router-dom";
import { ArrowRight, Car, Home, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.20),transparent_24%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            Modern finance tools for everyday decisions
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Plan smarter with clean, modern calculators that make money choices easier.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estimate car repayments, bond costs, and long-term investment growth
            with tools designed to be simple, fast, and useful.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/car-repayment"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Start with car calculator
              <ArrowRight size={16} className="ml-2" />
            </Link>

            <Link
              to="/compound-interest"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
            >
              Explore investment growth
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Fast results
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Mobile friendly
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Built for clarity
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-cyan-400/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-[#0F1B2D] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Featured tool</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Car Repayment Calculator
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Estimate monthly repayments from vehicle price, deposit,
                      interest rate, and repayment term.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-600/20 p-3 text-cyan-300">
                    <Car size={22} />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#0F1B2D] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">Home loans</p>
                    <Home size={18} className="text-cyan-300" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Bond planning
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Better visibility on property affordability.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0F1B2D] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">Investments</p>
                    <TrendingUp size={18} className="text-cyan-300" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    Compound growth
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    See how monthly contributions can build wealth.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/15 to-cyan-400/10 p-5">
                <p className="text-sm text-slate-300">
                  Built to support better financial decisions with simple,
                  modern tools that feel premium from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
