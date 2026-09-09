import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { Craft } from "@/components/Craft";
import { GroomFeature } from "@/components/GroomFeature";
import { Lookbook } from "@/components/Lookbook";
import { Studio } from "@/components/Studio";
import { SocialSelection } from "@/components/SocialSelection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useReveals } from "@/components/Reveal";
import { site } from "@/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: site.name,
  description: site.metaDescription,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.lines.join(", "),
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  hasMap: site.directionsUrl,
  sameAs: [site.instagram, site.instagramMen, site.facebook],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: site.metaTitle },
      { name: "description", content: site.metaDescription },
      { property: "og:title", content: site.metaTitle },
      { property: "og:description", content: site.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(structuredData) },
    ],
  }),
});

function Index() {
  useReveals();
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-plum focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Collections />
        <Craft />
        <GroomFeature />
        <Lookbook />
        <Studio />
        <SocialSelection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
