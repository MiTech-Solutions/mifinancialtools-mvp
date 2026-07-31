import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { guideLinks } from "../../data/navLinks";

export default function GuidesPreview() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              <BookOpen size={14} />
              Guides
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Learn the fundamentals, not just the numbers.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Practical, South Africa-specific guides that pair with our
              calculators — budgeting, saving, compounding, and car finance.
            </p>
          </div>

          <Link
            to="/guides"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[#E8C685] hover:text-cyan-200"
          >
            View all guides
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guideLinks.map((guide) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="group flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6A343]/30"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {guide.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {guide.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#E8C685]">
                Read guide
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
