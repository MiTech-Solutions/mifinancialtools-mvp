import { useEffect, useRef, useState } from "react";

/**
 * useInView — returns a ref to attach to an element and a boolean that
 * flips to true once the element enters the viewport. Used to drive
 * scroll-reveal animations without pulling in a new dependency.
 *
 * Fires once (unobserves after first entry) so content doesn't
 * re-animate every time someone scrolls past it again.
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion preference: show immediately, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
