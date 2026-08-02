import { Helmet } from "react-helmet-async";
import { CheckCircle2, HelpCircle } from "lucide-react";
import RelatedLinks from "../common/RelatedLinks";
import Reveal from "../common/Reveal";
import GoldTick from "../common/GoldTick";

/**
 * GuideArticle
 *
 * Props:
 * - intro: string[] (paragraphs)
 * - sections: { heading, paragraphs: string[], list?: string[] }[]
 * - keyTakeaways: string[]
 * - faqs: { q, a }[] (optional)
 * - relatedCalculators: { label, path, description }[]
 * - relatedGuides: { label, path, description }[] (optional)
 */
export default function GuideArticle({
  intro = [],
  sections = [],
  keyTakeaways = [],
  faqs = [],
  relatedCalculators = [],
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
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <>
      {faqSchema ? (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      ) : null}

      <Reveal>
        <article className="space-y-4">
          {intro.map((p, i) => (
            <p key={i} className="text-base leading-7 text-slate-300">
              {p}
            </p>
          ))}
        </article>
      </Reveal>

      {sections.map((section, si) => (
        <Reveal key={section.heading} delay={si === 0 ? 0 : 60} className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            {section.heading}
          </h2>
          {section.paragraphs?.map((p, i) => (
            <p key={i} className="text-base leading-7 text-slate-300">
              {p}
            </p>
          ))}
          {section.list?.length > 0 && (
            <ul className="space-y-2 pt-1">
              {section.list.map((item, i) => (
                <li key={i} className="flex gap-3 text-base leading-7 text-slate-300">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A343]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}

      {keyTakeaways.length > 0 && (
        <Reveal className="mt-12 rounded-[1.75rem] border border-[#D6A343]/20 bg-[#D6A343]/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <GoldTick className="mt-3" />
          <ul className="mt-4 space-y-3">
            {keyTakeaways.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-[#D6A343]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {faqs.length > 0 && (
        <Reveal className="mt-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-3 py-1 text-xs font-medium text-[#E8C685]">
            <HelpCircle size={12} aria-hidden="true" />
            FAQ
          </div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-white/10">
            {faqs.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal>
        <RelatedLinks items={[...relatedCalculators, ...relatedGuides]} />
      </Reveal>
    </>
  );
}
