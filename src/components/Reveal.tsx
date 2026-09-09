import { useEffect } from "react";

/** Adds lightweight IntersectionObserver scroll reveals. Content stays
 *  visible if JS never runs (the .js-reveal class is only added here). */
export function useReveals() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    root.classList.add("js-reveal");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const i = Number(el.dataset.revealIndex ?? 0);
          el.style.transitionDelay = `${Math.min(i, 4) * 70}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);
}
