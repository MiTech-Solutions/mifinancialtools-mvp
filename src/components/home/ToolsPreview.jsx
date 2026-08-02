import { Link } from "react-router-dom";
import { ArrowRight, Car, Home as HomeIcon, TrendingUp, DollarSign } from "lucide-react";
import { tools } from "../../data/tools";
import Reveal from "../common/Reveal";
import GoldTick from "../common/GoldTick";

const iconMap = {
  "car-repayment": Car,
  "bond-repayment": HomeIcon,
  "compound-interest": TrendingUp,
  "income-tax": DollarSign,
};

export default function ToolsPreview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              Free financial tools
            </div>

            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Real amortisation math, not a rough guess.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Car finance with optional balloon payments, bond repayments,
              compound growth projections, and PAYE tax under the SARS
              2025/26 tables — each one calculated the same way a bank or
              SARS actually would.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.id];

            return (
              <Reveal key={tool.id} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6A343]/30 hover:bg-white/[0.07]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,163,67,0.10),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-1 flex-col">
                    {Icon ? (
                      <Icon size={26} className="text-[#D6A343]" aria-hidden="true" />
                    ) : null}
                    <GoldTick className="mt-4" />

                    <h3 className="font-display mt-5 text-xl font-semibold text-white">
                      {tool.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {tool.description}
                    </p>

                    <div className="mt-6 flex-1" />

                    <Link
                      to={tool.path}
                      className="inline-flex items-center text-sm font-medium text-[#E8C685] transition hover:text-[#E8C685]/80"
                    >
                      Open calculator
                      <ArrowRight
                        size={16}
                        className="ml-2 transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
