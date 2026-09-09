import { site } from "@/config/site";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#craft", label: "Our Craft" },
  { href: "#lookbook", label: "Gallery" },
  { href: "#studio", label: "Our Studio" },
  { href: "#visit", label: "Visit Us" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--color-plum)", color: "var(--color-ivory)" }}>
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display block text-[1.5rem] tracking-[0.2em] uppercase">Thulir</span>
          <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ color: "var(--color-blush)" }}>
            Designer Boutique
          </span>
          <p className="mt-4 max-w-[30ch] text-sm" style={{ color: "var(--color-blush)" }}>
            Bespoke bridal and groom wear in Coimbatore.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[0.7rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-bronze)" }}>
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} style={{ color: "var(--color-blush)" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.7rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-bronze)" }}>
            Follow
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-blush)" }}>
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.instagramMen} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-blush)" }}>
                Instagram {site.instagramMenHandle}
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-blush)" }}>
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[0.7rem] tracking-[0.2em] uppercase" style={{ color: "var(--color-bronze)" }}>
            Contact
          </h2>
          <address className="mt-4 text-sm not-italic" style={{ color: "var(--color-blush)" }}>
            {site.address.lines.join(", ")}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={`tel:${site.phone}`} className="mt-2 inline-block">
              {site.phoneDisplay}
            </a>
          </address>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t py-6 text-xs" style={{ borderColor: "rgb(251 248 243 / 0.16)", color: "var(--color-blush)" }}>
        <p>
          © {new Date().getFullYear()} {site.name}. Coimbatore, Tamil Nadu.
        </p>
        <p>{site.hoursFallback}</p>
      </div>
    </footer>
  );
}
