import { Helmet } from "react-helmet-async";
export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MiTools</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://mitools.app/privacy-policy" />
      </Helmet>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#E8C685]">
          Legal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          Last updated: June 25, 2026
        </p>

        <div className="mt-8 space-y-8 text-slate-300">
          <div>
            <h2 className="text-xl font-semibold text-white">1. Overview</h2>
            <p className="mt-3 leading-7">
              MiTools values your privacy. This Privacy Policy explains how
              information may be collected, used, and protected when you visit
              and use this website. By continuing to use MiTools, you
              acknowledge this policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              2. Information we may collect
            </h2>
            <p className="mt-3 leading-7">
              We may collect limited technical information such as browser type,
              device information, pages visited, time spent on pages, and basic
              usage analytics. We do not collect personally identifiable
              information unless you choose to provide it (for example, via a
              contact form if added in future).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              3. How information is used
            </h2>
            <p className="mt-3 leading-7">
              Information may be used to improve the website, understand how
              visitors interact with tools, maintain security, measure
              performance, and support future features or communication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              4. Cookies and tracking technologies
            </h2>
            <p className="mt-3 leading-7">
              MiTools uses cookies and similar tracking technologies to improve
              user experience and measure site traffic. These include:
            </p>
            <ul className="mt-3 space-y-2 pl-5 leading-7 list-disc">
              <li>
                <span className="font-medium text-white">Google Analytics</span>{" "}
                — used to collect anonymised usage data including pages visited,
                session duration, and device type. Google may use this data in
                accordance with its own{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6A343] underline underline-offset-2 hover:text-[#E8C685]"
                >
                  Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-white">Google AdSense</span>{" "}
                — used to serve relevant advertisements on this website. Google
                AdSense may use cookies to personalise ads based on your prior
                visits to this or other websites. Neither Google AdSense nor
                Google Analytics scripts load on this site until you click
                "Accept" on our cookie banner. You can opt out of
                personalised advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6A343] underline underline-offset-2 hover:text-[#E8C685]"
                >
                  Google Ad Settings
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              5. Third-party services
            </h2>
            <p className="mt-3 leading-7">
              This website uses third-party services including hosting,
              analytics (Google Analytics), and advertising (Google AdSense).
              These services may process certain technical data as part of
              providing their functionality and are governed by their own
              privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              6. How to control cookies
            </h2>
            <p className="mt-3 leading-7">
              You can limit or disable cookies through your browser settings or
              device privacy controls. You may also use the following tools:
            </p>
            <ul className="mt-3 space-y-2 pl-5 leading-7 list-disc">
              <li>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6A343] underline underline-offset-2 hover:text-[#E8C685]"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D6A343] underline underline-offset-2 hover:text-[#E8C685]"
                >
                  Google Ad Settings
                </a>{" "}
                (to opt out of personalised ads)
              </li>
            </ul>
            <p className="mt-3 leading-7">
              Please note that disabling cookies may affect the functionality of
              this website and others you visit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              7. Data protection
            </h2>
            <p className="mt-3 leading-7">
              Reasonable measures are taken to protect website information, but
              no internet-based platform can guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">8. Your choice</h2>
            <p className="mt-3 leading-7">
              You can withdraw your cookie consent at any time by clearing your
              browser cookies and revisiting the site. You may also limit
              certain tracking through browser settings, cookie controls, or
              privacy tools made available by your device or browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              9. Changes to this policy
            </h2>
            <p className="mt-3 leading-7">
              This Privacy Policy may be updated from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">10. Contact</h2>
            <p className="mt-3 leading-7">
              For general privacy-related questions, contact:
              <span className="ml-2 font-medium text-white">
                mitechsolutionsza@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
