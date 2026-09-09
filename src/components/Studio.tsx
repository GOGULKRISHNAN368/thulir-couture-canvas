import { Media } from "./Media";
import { studioImage, byCategory } from "@/config/media";
import { site } from "@/config/site";

export function Studio() {
  const second = byCategory("studio")[1];
  return (
    <section id="studio" className="section-pad" style={{ background: "#f6efe7" }}>
      <div className="wrap grid items-center gap-10 lg:grid-cols-[45fr_55fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Our Studio</p>
          <h2 className="h-section mt-4 text-plum">A space for your next special outfit.</h2>
          <p className="mt-6 text-ink-soft">
            Our boutique in Ganapathy, Coimbatore is where fabrics are chosen, ideas are
            sketched out and fittings happen. Come by to see the work in person and talk
            through what you have in mind.
          </p>
          <address className="mt-6 text-sm not-italic text-ink-soft">
            {site.address.lines.join(", ")}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Our Boutique
            </a>
            <a href={`tel:${site.phone}`} className="btn btn-outline">
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="reveal grid gap-4 sm:grid-cols-[6fr_4fr]" data-reveal-index="1">
          <div className="aspect-[4/5] overflow-hidden">
            <Media item={studioImage} sizes="(max-width: 1024px) 92vw, 34vw" />
          </div>
          {second && (
            <div className="hidden aspect-[3/4] self-end overflow-hidden sm:block">
              <Media item={second} sizes="22vw" labelSize="sm" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
