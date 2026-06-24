import { Link } from "react-router-dom";
import { ArrowRight, Car, Home as HomeIcon, TrendingUp, DollarSign } from "lucide-react";
import { tools } from "../../data/tools";

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
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            Free financial tools
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Four calculators. Clean experience. Real everyday value.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            MiTools gives you the most practical finance tools for daily life:
            vehicle repayments, home loan planning, investment growth, and income
            tax estimates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool) => {
            const Icon = iconMap[tool.id];

            return (
              <article
                key={tool.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-600/30 to-cyan-400/20 text-cyan-300">
                    {Icon ? <Icon size={24} /> : null}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {tool.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {tool.description}
                  </p>

                  <div className="mt-8">
                    <Link
                      to={tool.path}
                      className="inline-flex items-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                      Open calculator
                      <ArrowRight
                        size={16}
                        className="ml-2 transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
