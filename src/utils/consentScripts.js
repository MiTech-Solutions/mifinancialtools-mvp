const ADSENSE_CLIENT_ID = "ca-pub-6192910473694997";
const GA_MEASUREMENT_ID = "G-DRNM4L70J4";

let adsenseLoaded = false;
let analyticsLoaded = false;

export function loadAdsense() {
  if (adsenseLoaded || typeof document === "undefined") return;
  adsenseLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

export function loadAnalytics() {
  if (analyticsLoaded || typeof document === "undefined") return;
  analyticsLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

/**
 * Call once on app mount. If the person already accepted cookies in a
 * previous visit, load AdSense + Analytics immediately without waiting
 * for them to click Accept again. If they declined or haven't decided
 * yet, do nothing until CookieBanner calls loadAdsense()/loadAnalytics()
 * directly after a fresh Accept click.
 */
export function loadConsentedScriptsIfAlreadyAccepted(consentValue) {
  if (consentValue === "accepted") {
    loadAdsense();
    loadAnalytics();
  }
}
