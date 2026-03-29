import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/20 via-[#0F1B2D] to-cyan-400/10 p-8 shadow-2xl sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              Start planning better
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Explore the calculators and make your next money decision with more clarity.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Whether you are estimating repayments or projecting long-term
              growth, MiTools gives you fast, useful calculations in a clean
              modern experience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/car-repayment"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Try car calculator
                <ArrowRight size={16} className="ml-2" />
              </Link>

              <Link
                to="/compound-interest"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
              >
                Try investment calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
