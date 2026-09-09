import { Media } from "./Media";
import { heroImage, heroSecondary } from "@/config/media";
import { site } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="pt-[calc(var(--header-h)+1.5rem)] pb-4 lg:pt-[calc(var(--header-h)+3rem)]">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
        <div className="reveal" data-reveal-index="0">
          <p className="eyebrow">Thulir Designer Boutique · Coimbatore</p>
          <h1 className="h-display mt-5 text-plum">For moments that become memories.</h1>
          <p className="mt-6 max-w-[46ch] text-ink-soft">{site.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#collections" className="btn btn-primary">
              Explore Our Designs
            </a>
            <a href="#visit" className="btn btn-outline">
              Enquire About Your Outfit
            </a>
          </div>
          <p className="mt-8 text-[0.72rem] tracking-[0.16em] text-ink-soft uppercase">
            Bespoke bridal &amp; groom wear · Aari blouse work
          </p>
        </div>

        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-[7fr_4fr]" data-reveal-index="1">
          <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
            <Media item={heroImage} priority sizes="(max-width: 640px) 92vw, 44vw" />
          </div>
          <div className="hidden aspect-[3/4] self-end overflow-hidden sm:block">
            <Media item={heroSecondary} sizes="24vw" labelSize="sm" />
          </div>
        </div>
      </div>
    </section>
  );
}
