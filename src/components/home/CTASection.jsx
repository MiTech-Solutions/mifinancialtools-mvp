import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../common/Reveal";
import GoldTick from "../common/GoldTick";

export default function CTASection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#C68F2A]/20 via-[#1B2723] to-[#4E9B6E]/10 p-8 shadow-2xl sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
                Start with your own numbers
              </div>

              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Fifteen minutes here beats a rough guess at the dealership.
              </h2>

              <GoldTick width="w-16" className="mt-6" />

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Run a calculator with your real figures, then read the guide
                that explains what the result actually means — before
                anyone's trying to get you to sign something.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/car-repayment"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#C68F2A] px-6 py-3 text-sm font-medium text-[#0E1613] transition hover:bg-[#D6A343]"
                >
                  Try car calculator
                  <ArrowRight size={16} className="ml-2" />
                </Link>

                <Link
                  to="/guides"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/10"
                >
                  Browse the guides
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
