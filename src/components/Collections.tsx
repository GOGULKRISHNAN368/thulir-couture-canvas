import { Media } from "./Media";
import { byCategory } from "@/config/media";
import { collections } from "@/config/site";

export function Collections() {
  return (
    <section id="collections" className="section-pad">
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Collections</p>
          <h2 className="h-section mt-4 text-plum">Made for your kind of celebration.</h2>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => {
            const img = byCategory(c.id)[0];
            return (
              <article
                key={c.id}
                className="group reveal flex flex-col"
                data-reveal-index={i}
                style={i % 2 === 1 ? { marginTop: "0" } : undefined}
              >
                <div className={`overflow-hidden ${i % 2 === 1 ? "lg:mt-10" : ""}`}>
                  <div className="aspect-[3/4] overflow-hidden">
                    {img && (
                      <div className="card-zoom h-full w-full">
                        <Media item={img} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw" labelSize="sm" />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className={`mt-5 text-[1.5rem] text-plum ${i % 2 === 1 ? "lg:mt-15" : ""}`}>
                  {c.label}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{c.copy}</p>
                <a
                  href={`#lookbook`}
                  data-filter={c.id}
                  className="mt-4 self-start text-[0.72rem] tracking-[0.18em] text-plum uppercase"
                  style={{ borderBottom: "1px solid var(--color-bronze)", paddingBottom: 3 }}
                >
                  Explore
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
