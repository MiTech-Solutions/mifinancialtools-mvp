import { Helmet } from "react-helmet-async";
import RelatedLinks from "../common/RelatedLinks";
import {
  Info,
  Calculator,
  BookOpen,
  Sparkles,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

/**
 * CalculatorArticle
 *
 * Renders the long-form educational content that sits below a calculator,
 * with a consistent structure and heading hierarchy across every tool page:
 *
 * H1 (page title, rendered by CalculatorLayout above this component)
 *   H2 Introduction
 *   H2 How it works
 *     H3 Inputs / H3 Outputs
 *   H2 The formula
 *   H2 Worked examples
 *     H3 per example
 *   H2 Benefits
 *   H2 Common mistakes
 *   H2 Frequently asked questions
 *     H3 per question
 *   H2 Related tools & guides
 *
 * Also emits FAQPage JSON-LD structured data from the faqs prop.
 *
 * Props:
 * - intro: string[] (paragraphs)
 * - howItWorks: { paragraphs: string[], inputs: {label, desc}[], outputs: {label, desc}[] }
 * - formula: { paragraphs: string[], expression: string, variables: {symbol, meaning}[] }
 * - examples: { title, scenario, steps: string[], result }[]
 * - benefits: string[]
 * - mistakes: { title, body }[]
 * - faqs: { q, a }[]
 * - relatedTools: { label, path, description }[]
 * - relatedGuides: { label, path, description }[]  (optional — omit until guide pages exist)
 */
export default function CalculatorArticle({
  intro = [],
  howItWorks,
  formula,
  examples = [],
  benefits = [],
  mistakes = [],
  faqs = [],
  relatedTools = [],
  relatedGuides = [],
}) {
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }
      : null;

  return (
    <>
      {faqSchema ? (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        </Helmet>
      ) : null}

      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Introduction */}
          {intro.length > 0 && (
            <div className="mt-4 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
                <Info size={12} aria-hidden="true" />
                Introduction
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                What this calculator does, and who it's for
              </h2>
              {intro.map((p, i) => (
                <p key={i} className="text-base leading-7 text-slate-300">
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* How it works */}
          {howItWorks && (
            <div className="mt-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
                <Calculator size={12} aria-hidden="true" />
                How it works
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                How the calculation works
              </h2>
              {howItWorks.paragraphs?.map((p, i) => (
                <p key={i} className="text-base leading-7 text-slate-300">
                  {p}
                </p>
              ))}

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {howItWorks.inputs?.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Inputs you provide
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {howItWorks.inputs.map((item) => (
                        <li key={item.label} className="text-sm leading-6 text-slate-400">
                          <span className="font-medium text-slate-200">
                            {item.label}:
                          </span>{" "}
                          {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {howItWorks.outputs?.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      Outputs you get
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {howItWorks.outputs.map((item) => (
                        <li key={item.label} className="text-sm leading-6 text-slate-400">
                          <span className="font-medium text-slate-200">
                            {item.label}:
                          </span>{" "}
                          {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Formula */}
          {formula && (
            <div className="mt-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
                <BookOpen size={12} aria-hidden="true" />
                Formula
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                The formula behind the numbers
              </h2>
              {formula.paragraphs?.map((p, i) => (
                <p key={i} className="text-base leading-7 text-slate-300">
                  {p}
                </p>
              ))}

              <div className="rounded-2xl border border-white/10 bg-[#171F1B] p-5 font-mono text-sm leading-7 text-[#E8C685] sm:text-base">
                {formula.expression}
              </div>

              {formula.variables?.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {formula.variables.map((v) => (
                    <li key={v.symbol} className="text-sm leading-6 text-slate-400">
                      <span className="font-mono text-[#E8C685]">{v.symbol}</span>{" "}
                      = {v.meaning}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Worked examples */}
          {examples.length > 0 && (
            <div className="mt-14 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
                <Sparkles size={12} aria-hidden="true" />
                Worked examples
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Real South African examples
              </h2>

              <div className="space-y-5">
                {examples.map((ex) => (
                  <div
                    key={ex.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {ex.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {ex.scenario}
                    </p>
                    <ol className="mt-3 list-decimal space-y-1.5 pl-5">
                      {ex.steps.map((step, i) => (
                        <li key={i} className="text-sm leading-6 text-slate-400">
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-3 text-sm font-medium text-[#E8C685]">
                      {ex.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {benefits.length > 0 && (
            <div className="mt-14 space-y-4">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Why use this calculator
              </h2>
              <ul className="space-y-2">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-3 text-base leading-7 text-slate-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A343]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Common mistakes */}
          {mistakes.length > 0 && (
            <div className="mt-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-white/5 px-3 py-1 text-xs font-medium text-amber-300">
                <AlertTriangle size={12} aria-hidden="true" />
                Common mistakes
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Mistakes people make with this calculation
              </h2>
              <div className="space-y-5">
                {mistakes.map((m) => (
                  <div key={m.title}>
                    <h3 className="text-lg font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-300">
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mt-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
                <HelpCircle size={12} aria-hidden="true" />
                FAQ
              </div>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related tools & guides */}
          <RelatedLinks items={[...relatedTools, ...relatedGuides]} />
        </div>
      </section>
    </>
  );
}
