import { Media } from "./Media";
import { instagramSelection } from "@/config/media";
import { site } from "@/config/site";

export function SocialSelection() {
  return (
    <section id="instagram" className="section-pad">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Instagram</p>
            <h2 className="h-section mt-4 text-plum">From our Instagram.</h2>
            <p className="mt-3 text-sm text-ink-soft">
              A curated selection, hosted on this site — not a live or automatically
              updating feed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit {site.instagramHandle}
            </a>
            <a href={site.instagramMen} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {site.instagramMenHandle}
            </a>
          </div>
        </div>

        <ul className="mt-10 grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramSelection.map((m, i) => {
            const inner = (
              <div className="aspect-square overflow-hidden">
                <div className="card-zoom h-full w-full">
                  <Media item={m} sizes="(max-width: 640px) 48vw, 16vw" labelSize="sm" />
                </div>
              </div>
            );
            return (
              <li key={m.id} className="group reveal" data-reveal-index={i % 4}>
                {m.instagramPostUrl ? (
                  <a
                    href={m.instagramPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.title} on Instagram`}
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
