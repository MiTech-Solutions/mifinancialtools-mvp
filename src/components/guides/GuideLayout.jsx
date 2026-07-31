import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function GuideLayout({ eyebrow, title, description, readTime, children }) {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Link
          to="/guides"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={14} />
          All guides
        </Link>

        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              {eyebrow}
            </div>
          ) : null}

          <h1 className="font-display mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {description}
          </p>

          {readTime ? (
            <p className="mt-4 text-sm text-slate-400">{readTime} read</p>
          ) : null}
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}
