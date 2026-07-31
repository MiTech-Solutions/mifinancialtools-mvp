import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { guideLinks } from "../data/navLinks";

export default function Guides() {
  return (
    <>
      <Helmet>
        <title>Financial Guides | MiTools</title>
        <meta
          name="description"
          content="Practical, South Africa-specific financial guides covering budgeting, saving, compound interest, car finance, and more — paired with MiTools calculators."
        />
        <link rel="canonical" href="https://mitools.app/guides" />
        <meta property="og:title" content="Financial Guides | MiTools" />
        <meta
          property="og:description"
          content="Practical, South Africa-specific financial guides covering budgeting, saving, compound interest, car finance, and more."
        />
        <meta property="og:url" content="https://mitools.app/guides" />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,163,67,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(78,155,110,0.14),transparent_24%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
              Financial Guides
            </div>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Learn the fundamentals, then run your own numbers.
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Practical, South Africa-specific guides on budgeting, saving,
              investing, and debt — each one paired with a MiTools calculator
              so you can go from concept to a real number.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {guideLinks.map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="group flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D6A343]/30"
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {guide.label}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {guide.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-[#E8C685]">
                  Read guide
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
