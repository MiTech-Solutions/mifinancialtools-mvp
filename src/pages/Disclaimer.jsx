import { Helmet } from "react-helmet-async";
export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | MiTools</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
          Legal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Disclaimer
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          Last updated: March 29, 2026
        </p>

        <div className="mt-8 space-y-8 text-slate-300">
          <div>
            <h2 className="text-xl font-semibold text-white">
              1. Estimates only
            </h2>
            <p className="mt-3 leading-7">
              All calculators and content on MiTools are provided for estimation
              and educational purposes only. Results are approximate and should
              not be treated as guaranteed outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              2. No professional advice
            </h2>
            <p className="mt-3 leading-7">
              MiTools does not provide financial, investment, accounting,
              banking, legal, or tax advice. Users should consult qualified
              professionals before making important financial decisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              3. Loan and repayment figures
            </h2>
            <p className="mt-3 leading-7">
              Loan-related calculators may exclude fees, insurance, service
              charges, initiation fees, transfer costs, balloon payments, and
              other lender-specific terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              4. Investment projections
            </h2>
            <p className="mt-3 leading-7">
              Investment calculators use assumed growth rates and contribution
              patterns. Actual performance may be higher or lower, and past
              performance does not guarantee future results.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              5. No warranties
            </h2>
            <p className="mt-3 leading-7">
              The website is provided on an as-is basis without warranties of
              any kind, whether express or implied, regarding accuracy,
              completeness, reliability, or availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              6. User responsibility
            </h2>
            <p className="mt-3 leading-7">
              Users remain fully responsible for verifying information and
              confirming actual figures with banks, lenders, financial
              institutions, or qualified advisers.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
