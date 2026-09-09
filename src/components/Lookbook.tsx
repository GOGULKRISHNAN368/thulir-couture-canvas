import { useCallback, useEffect, useRef, useState } from "react";
import { Media } from "./Media";
import { lookbook, type MediaCategory } from "@/config/media";
import { site } from "@/config/site";

const filters: { id: "all" | MediaCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "blouses", label: "Blouses" },
  { id: "groom", label: "Groom" },
  { id: "occasion", label: "Occasion" },
];

export function Lookbook() {
  const [active, setActive] = useState<"all" | MediaCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const items = active === "all" ? lookbook : lookbook.filter((m) => m.category === active);

  // "Explore" links elsewhere on the page can preselect a filter.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-filter]");
      const f = el?.dataset["filter"];
      if (f && filters.some((x) => x.id === f)) setActive(f as MediaCategory);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((i) => (i === null ? i : (i + dir + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : items[openIndex];

  return (
    <section id="lookbook" className="section-pad">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Lookbook</p>
            <h2 className="h-section mt-4 text-plum">The Thulir Edit.</h2>
          </div>
          <div role="group" aria-label="Filter the lookbook" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={active === f.id}
                onClick={() => setActive(f.id)}
                className="btn"
                style={
                  active === f.id
                    ? { background: "var(--color-plum)", color: "var(--color-ivory)" }
                    : { borderColor: "var(--color-line)", color: "var(--color-ink)" }
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-10 grid list-none grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {items.map((m, i) => (
            <li key={m.id} className="group reveal" data-reveal-index={i % 4}>
              <button
                type="button"
                onClick={(e) => {
                  lastFocused.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                className="block w-full cursor-pointer overflow-hidden text-left"
                aria-label={`Open ${m.title} larger`}
              >
                <div className={m.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"}>
                  <div className="card-zoom h-full w-full">
                    <Media
                      item={m}
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 46vw, 31vw"
                      labelSize="sm"
                    />
                  </div>
                </div>
                <span className="mt-2 block text-[0.68rem] tracking-[0.16em] text-ink-soft uppercase">
                  {m.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: "rgb(43 39 37 / 0.94)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between gap-4 p-4">
            <span className="text-xs tracking-[0.16em] uppercase" style={{ color: "var(--color-blush)" }}>
              {current.title}
            </span>
            <button ref={closeRef} type="button" onClick={close} className="btn btn-light">
              Close
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            <div className="max-h-full w-full max-w-[min(92vw,720px)]">
              <div className={current.orientation === "landscape" ? "aspect-[4/3]" : "aspect-[3/4]"}>
                <Media item={current} priority sizes="90vw" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 p-4">
            <button type="button" onClick={() => step(-1)} className="btn btn-light">
              Previous
            </button>
            <a
              href={`tel:${site.phone}`}
              className="btn"
              style={{ background: "var(--color-ivory)", color: "var(--color-plum)" }}
            >
              Enquire About This Design
            </a>
            <button type="button" onClick={() => step(1)} className="btn btn-light">
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
