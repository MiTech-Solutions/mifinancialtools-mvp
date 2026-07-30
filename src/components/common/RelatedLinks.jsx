import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * RelatedLinks
 *
 * Reusable "Related tools & guides" block used at the bottom of every
 * calculator page and every guide page, so the internal-linking UI is
 * defined in exactly one place.
 *
 * Props:
 * - items: { label, path, description }[] — pass relatedTools/relatedCalculators
 *   and relatedGuides combined into one array.
 * - heading: optional heading override (defaults to "Related tools & guides")
 */
export default function RelatedLinks({ items = [], heading = "Related tools & guides" }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-14 space-y-4 border-t border-white/10 pt-10">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
          >
            <div>
              <p className="font-medium text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="ml-3 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-cyan-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
