import { Media } from "./Media";
import { groomFeatureImage, byCategory } from "@/config/media";
import { site } from "@/config/site";

export function GroomFeature() {
  const second = byCategory("groom")[2];
  return (
    <section id="groom" className="section-pad" style={{ background: "var(--color-plum)" }}>
      <div className="wrap grid items-center gap-10 lg:grid-cols-[55fr_45fr] lg:gap-20">
        <div className="reveal grid grid-cols-[6fr_4fr] gap-4">
          <div className="aspect-[3/4] overflow-hidden">
            <Media item={groomFeatureImage} dark sizes="(max-width: 1024px) 55vw, 32vw" />
          </div>
          {second && (
            <div className="aspect-[3/4] self-end overflow-hidden">
              <Media item={second} dark sizes="22vw" labelSize="sm" />
            </div>
          )}
        </div>
        <div className="reveal" data-reveal-index="1" style={{ color: "var(--color-ivory)" }}>
          <p className="eyebrow">Groom Wear</p>
          <h2 className="h-section mt-4" style={{ color: "var(--color-ivory)" }}>
            For his moment, too.
          </h2>
          <p className="mt-6" style={{ color: "var(--color-blush)" }}>
            Thulir also designs groom wear, shared on our dedicated account{" "}
            {site.instagramMenHandle}. Bring the wedding-day palette, the fabric you have in
            mind, or simply the occasion — we will work out the rest together in the studio.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#lookbook" data-filter="groom" className="btn btn-light">
              Explore Groom Wear
            </a>
            <a
              href={site.instagramMen}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
            >
              {site.instagramMenHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
