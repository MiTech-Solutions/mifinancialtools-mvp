import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Target, ShieldCheck, Calculator, BookOpen } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | MiTools</title>
        <meta
          name="description"
          content="MiTools is built by MiTechSolutions to give South Africans clear, accurate, free financial calculators and guides — no signup, no jargon."
        />
        <link rel="canonical" href="https://mitools.app/about" />
        <meta property="og:title" content="About Us | MiTools" />
        <meta
          property="og:description"
          content="MiTools is built by MiTechSolutions to give South Africans clear, accurate, free financial calculators and guides."
        />
        <meta property="og:url" content="https://mitools.app/about" />
        <meta property="og:image" content="https://mitools.app/og-image.png" />
      </Helmet>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,163,67,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(78,155,110,0.14),transparent_24%)]" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center rounded-full border border-[#D6A343]/20 bg-white/5 px-4 py-2 text-sm text-[#E8C685] backdrop-blur">
            About Us
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Financial tools built for South Africans, by MiTechSolutions.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            MiTools is a free set of calculators and guides built by
            MiTechSolutions to help people make sense of everyday South
            African money decisions — car finance, home loans, tax, and
            saving — without wading through jargon or generic tools built for
            a different country's numbers.
          </p>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Why we built MiTools
            </h2>
            <p className="text-base leading-7 text-slate-300">
              Most financial calculators available online are either built
              for a different market entirely — using US or UK tax brackets,
              interest rate conventions, and terminology that don't map onto
              South African prime lending rates, SARS tax tables, or local
              vehicle and home finance norms — or they're wrapped in enough
              ads and pop-ups to make a simple calculation frustrating.
            </p>
            <p className="text-base leading-7 text-slate-300">
              MiTechSolutions built MiTools to fix both problems at once:
              tools that use accurate, current South African figures, and a
              site that stays out of the way of actually getting your answer.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              What we offer
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-[#E8C685]">
                  <Calculator size={18} />
                  <p className="font-medium text-white">Calculators</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Car repayment, bond repayment, compound interest, and income
                  tax — each built on real, current South African formulas
                  and SARS tax tables, not rough approximations.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-[#E8C685]">
                  <BookOpen size={18} />
                  <p className="font-medium text-white">Guides</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Plain-English guides on budgeting, saving, debt, credit
                  scores, investing, and retirement — written to be read
                  once and actually understood, not skimmed and forgotten.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              How we think about this
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <ShieldCheck size={22} className="mt-1 shrink-0 text-[#D6A343]" />
                <div>
                  <p className="font-medium text-white">
                    Estimates, not advice
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Every calculator on MiTools is built for planning and
                    comparison. None of it replaces a quote from your bank,
                    a consultation with a financial advisor, or professional
                    tax advice for anything significant.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target size={22} className="mt-1 shrink-0 text-[#D6A343]" />
                <div>
                  <p className="font-medium text-white">
                    Accuracy over speed
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Where a calculation depends on a regulated figure — SARS
                    tax brackets, medical tax credits, UIF caps — we build it
                    from the actual published rules rather than a rough
                    estimate, and review it when those rules change.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Calculator size={22} className="mt-1 shrink-0 text-[#D6A343]" />
                <div>
                  <p className="font-medium text-white">
                    Free, with no signup
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    MiTools is free to use and doesn't require an account.
                    The site is supported by advertising, which helps us keep
                    building and maintaining it at no cost to you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[1.75rem] border border-[#D6A343]/20 bg-[#D6A343]/5 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">
              Questions, feedback, or found an error?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We take accuracy seriously, especially anywhere tax or lending
              figures are involved. If something looks off, or you just want
              to get in touch, we'd genuinely like to hear from you.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center rounded-xl bg-[#C68F2A] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#D6A343]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
