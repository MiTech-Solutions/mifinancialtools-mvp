import { Helmet } from "react-helmet-async";
import { CheckCircle2, HelpCircle } from "lucide-react";
import RelatedLinks from "../common/RelatedLinks";

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

      <article className="space-y-4">
        {intro.map((p, i) => (
          <p key={i} className="text-base leading-7 text-slate-300">
            {p}
          </p>
        ))}
      </article>

      {sections.map((section) => (
        <div key={section.heading} className="mt-12 space-y-4">
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
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {keyTakeaways.length > 0 && (
        <div className="mt-12 rounded-[1.75rem] border border-cyan-400/20 bg-cyan-400/5 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Key takeaways</h2>
          <ul className="mt-4 space-y-3">
            {keyTakeaways.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-6 text-slate-300">
                <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {faqs.length > 0 && (
        <div className="mt-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300">
            <HelpCircle size={12} aria-hidden="true" />
            FAQ
          </div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-base font-semibold text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <RelatedLinks items={[...relatedCalculators, ...relatedGuides]} />
    </>
  );
}
