import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { loadAdsense, loadAnalytics, loadConsentedScriptsIfAlreadyAccepted } from "../../utils/consentScripts";

const COOKIE_KEY = "mitools_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);

    // If the person already accepted on a previous visit, load AdSense +
    // Analytics immediately — no need to show the banner again.
    loadConsentedScriptsIfAlreadyAccepted(stored);

    if (!stored) {
      // Small delay so the page renders first
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    // This is the actual consent gate: AdSense and GA4 are only injected
    // into the page here, on explicit Accept — never before.
    loadAdsense();
    loadAnalytics();
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    // Deliberately does NOT call loadAdsense()/loadAnalytics() — declining
    // means neither script ever loads for this visitor.
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0E1613]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <Cookie
            size={20}
            className="mt-0.5 shrink-0 text-[#D6A343]"
            aria-hidden="true"
          />
          <p className="text-sm leading-6 text-slate-300">
            We use cookies and similar technologies — including Google Analytics
            and Google AdSense — to improve your experience and measure site
            traffic. These only load if you click{" "}
            <span className="font-medium text-white">Accept</span>. See our{" "}
            <Link
              to="/privacy-policy"
              className="font-medium text-[#D6A343] underline underline-offset-2 hover:text-[#E8C685]"
            >
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <X size={14} aria-hidden="true" />
            Decline
          </button>
          <button
            onClick={accept}
            className="inline-flex items-center rounded-xl bg-[#C68F2A] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#D6A343]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
