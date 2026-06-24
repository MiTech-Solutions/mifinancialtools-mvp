import { Helmet } from "react-helmet-async";
export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | MiTools</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
          Legal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Terms and Conditions
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          Last updated: March 29, 2026
        </p>

        <div className="mt-8 space-y-8 text-slate-300">
          <div>
            <h2 className="text-xl font-semibold text-white">
              1. Acceptance of terms
            </h2>
            <p className="mt-3 leading-7">
              By using MiTools, you agree to these Terms and Conditions. If you
              do not agree, you should not use the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              2. Use of the website
            </h2>
            <p className="mt-3 leading-7">
              MiTools is provided as an informational and estimation tool.
              Users agree to use the website lawfully and not in any way that
              could harm the platform, its services, or other users.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              3. No financial advice
            </h2>
            <p className="mt-3 leading-7">
              The content and calculators on MiTools are for general
              informational purposes only and do not constitute financial,
              legal, banking, tax, or investment advice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              4. Accuracy of calculations
            </h2>
            <p className="mt-3 leading-7">
              While reasonable efforts are made to provide useful estimates,
              results may differ from actual lender offers, investment
              performance, fees, or market outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              5. Intellectual property
            </h2>
            <p className="mt-3 leading-7">
              Unless otherwise stated, the website content, branding, layout,
              and calculator presentation are the property of MiTools and may
              not be copied or redistributed without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              6. External links and third parties
            </h2>
            <p className="mt-3 leading-7">
              The website may contain links to third-party services or make use
              of third-party tools. MiTools is not responsible for the content,
              terms, or practices of those third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              7. Limitation of liability
            </h2>
            <p className="mt-3 leading-7">
              MiTools will not be liable for any loss, damage, or decisions
              arising from reliance on website content, estimates, or tool
              outputs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              8. Changes to these terms
            </h2>
            <p className="mt-3 leading-7">
              These Terms and Conditions may be updated from time to time.
              Continued use of the site after updates means you accept the
              revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              9. Contact
            </h2>
            <p className="mt-3 leading-7">
              For general questions about these terms, contact:
              <span className="ml-2 font-medium text-white">
                info@mitechsolutions.org
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
