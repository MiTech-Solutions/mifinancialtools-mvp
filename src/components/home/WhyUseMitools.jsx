import { FileCheck2, Calculator, MapPin, Lock } from "lucide-react";
import Reveal from "../common/Reveal";
import GoldTick from "../common/GoldTick";

const features = [
  {
    title: "Real SARS tax tables",
    description:
      "The income tax calculator uses the actual 2025/26 brackets, rebates, and medical tax credits — not a rough approximation.",
    icon: FileCheck2,
  },
  {
    title: "Standard loan mathematics",
    description:
      "Car and bond calculators use the same amortisation formula South African banks use, so the numbers match what you'd get in a real quote.",
    icon: Calculator,
  },
  {
    title: "Built around South Africa",
    description:
      "Prime-linked rates, local finance norms, and Rand figures throughout — not a generic global tool adapted after the fact.",
    icon: MapPin,
  },
  {
    title: "No account, no paywall",
    description:
      "Every calculator and guide is free to use. No signup, no email capture before you see a number.",
    icon: Lock,
  },
];

export default function WhyUseMitools() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              Why MiTools
            </div>

            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Numbers you can actually trust.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Most calculators online are built for a different country and
              adapted after the fact. MiTools is built around South African
              numbers from the ground up.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={i * 80}>
                <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6A343]/30">
                  <Icon size={22} className="text-[#D6A343]" aria-hidden="true" />
                  <GoldTick className="mt-4" />

                  <h3 className="font-display mt-5 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
