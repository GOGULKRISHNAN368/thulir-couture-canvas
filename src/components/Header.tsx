import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const nav = [
  { href: "#collections", label: "Collections" },
  { href: "#craft", label: "Our Craft" },
  { href: "#lookbook", label: "Gallery" },
  { href: "#studio", label: "Our Studio" },
  { href: "#visit", label: "Visit Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled || open ? "var(--color-ivory)" : "transparent",
        borderBottom: `1px solid ${scrolled || open ? "var(--color-line)" : "transparent"}`,
      }}
    >
      <div className="wrap flex items-center justify-between" style={{ minHeight: "var(--header-h)" }}>
        <a href="#top" className="flex flex-col leading-none" aria-label={`${site.name} — home`}>
          <span className="font-display text-[1.45rem] tracking-[0.2em] text-plum uppercase">
            Thulir
          </span>
          <span className="text-[0.55rem] tracking-[0.3em] text-ink-soft uppercase">
            Designer Boutique
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-[0.72rem] tracking-[0.18em] text-ink uppercase transition-colors hover:text-bronze"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#visit" className="btn btn-outline hidden sm:inline-flex">
            Enquire
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="btn btn-outline lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="lg:hidden"
        style={{ borderTop: "1px solid var(--color-line)", background: "var(--color-ivory)" }}
      >
        <ul className="wrap flex flex-col py-4">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm tracking-[0.16em] text-ink uppercase"
                style={{ borderBottom: "1px solid var(--color-line)" }}
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a href="#visit" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Enquire
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
