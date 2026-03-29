import { ShieldCheck, Zap, LineChart, Smartphone } from "lucide-react";

const features = [
  {
    title: "Simple by design",
    description:
      "Clear layouts and focused inputs help users get answers fast without confusion.",
    icon: Zap,
  },
  {
    title: "Built for real planning",
    description:
      "Useful estimates for cars, property, and investing so users can make better money decisions.",
    icon: LineChart,
  },
  {
    title: "Modern and trustworthy",
    description:
      "A premium interface builds confidence and makes the tools feel reliable from the first click.",
    icon: ShieldCheck,
  },
  {
    title: "Mobile-friendly experience",
    description:
      "Designed to work cleanly on phones, where many users will discover and use the calculators.",
    icon: Smartphone,
  },
];

export default function WhyUseMiTools() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
            Why MiTools
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Useful tools wrapped in a premium product experience.
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            MiTools is built to make everyday financial planning easier through
            clean design, practical tools, and a modern interface that feels
            trustworthy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-600/30 to-cyan-400/20 text-cyan-300">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}