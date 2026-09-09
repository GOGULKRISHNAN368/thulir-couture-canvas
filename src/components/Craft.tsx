import { Media } from "./Media";
import { craftImage } from "@/config/media";

export function Craft() {
  return (
    <section id="craft" className="section-pad" style={{ background: "#f6efe7" }}>
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="reveal aspect-[4/5] overflow-hidden lg:aspect-[4/5]">
          <Media item={craftImage} sizes="(max-width: 1024px) 92vw, 46vw" />
        </div>
        <div className="reveal" data-reveal-index="1">
          <p className="eyebrow">Our Craft</p>
          <h2 className="h-section mt-4 text-plum">The beauty is in the details.</h2>
          <p className="mt-6 text-ink-soft">
            Aari and hand-embroidery work is built up stitch by stitch on a frame, so the
            density of the thread, the placement of stones and the weight of the finished
            panel are all decided while the piece is being made. That is what makes a blouse
            sit correctly on the shoulder and read clearly in photographs.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["Made to measure", "Each outfit is cut and fitted for the person wearing it."],
              ["Hand-worked detail", "Aari and embroidery worked in-house on the frame."],
              ["Occasion-led design", "Fabric and silhouette chosen around your celebration."],
              ["Fittings with you", "Adjustments discussed in person before finishing."],
            ].map(([t, d]) => (
              <li key={t} style={{ borderTop: "1px solid var(--color-line)" }} className="pt-4">
                <h3 className="text-[1.1rem] text-plum">{t}</h3>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
