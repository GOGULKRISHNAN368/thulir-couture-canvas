import { site } from "@/config/site";

export function Contact() {
  const wa = site.whatsappNumber;
  return (
    <section id="visit" className="section-pad" style={{ background: "var(--color-blush)" }}>
      <div className="wrap">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Visit Us</p>
          <h2 className="h-section mt-4 text-plum">Let&apos;s create something personal.</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <h3 className="text-[1.35rem] text-plum">Enquire</h3>
            <p className="mt-3 max-w-[42ch] text-sm text-ink-soft">
              Tell us the occasion, your date and the kind of outfit you have in mind. The
              quickest way to reach the boutique is a phone call.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`tel:${site.phone}`} className="btn btn-primary">
                Call the Boutique
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Message on Instagram
              </a>
              {wa && (
                <a
                  href={`https://wa.me/${wa.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Continue in WhatsApp
                </a>
              )}
            </div>
            {!wa && (
              <p className="mt-5 max-w-[46ch] text-xs text-ink-soft">
                WhatsApp is not listed here yet — the boutique&apos;s WhatsApp destination has
                not been confirmed, so we have left it out rather than guess.
              </p>
            )}
          </div>

          <div className="reveal" data-reveal-index="1">
            <h3 className="text-[1.35rem] text-plum">Find us</h3>
            <address className="mt-4 text-sm not-italic text-ink-soft">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
              <span className="block">
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </span>
            </address>

            <dl className="mt-6 grid gap-3 text-sm">
              <div className="flex flex-wrap gap-x-3">
                <dt className="text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase">Phone</dt>
                <dd>
                  <a href={`tel:${site.phone}`} className="link-underline">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase">Hours</dt>
                <dd className="text-ink-soft">{site.openingHours ? site.openingHours.join(" · ") : site.hoursFallback}</dd>
              </div>
              <div className="flex flex-wrap gap-x-3">
                <dt className="text-[0.7rem] tracking-[0.18em] text-ink-soft uppercase">Instagram</dt>
                <dd>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-underline">
                    {site.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
              <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Read Reviews on Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
