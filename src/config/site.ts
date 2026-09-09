/**
 * Central source of truth for business facts shown on the site.
 * Anything not verified must stay null / false — see SOURCES.md.
 */

export const site = {
  name: "Thulir Designer Boutique",
  shortName: "Thulir",
  city: "Coimbatore",
  region: "Tamil Nadu",
  country: "India",
  tagline: "For moments that become memories.",
  description:
    "Bespoke bridal and groom wear, created around your occasion and personal style.",
  metaTitle: "Thulir Designer Boutique | Bridal & Groom Wear in Coimbatore",
  metaDescription:
    "Explore bespoke bridal wear, groom outfits and Aari blouse designs at Thulir Designer Boutique in Coimbatore. View our work and enquire about your outfit.",

  phone: "+917010873593",
  phoneDisplay: "+91 70108 73593",

  address: {
    lines: [
      "KTS Towers, Thulir Designers",
      "Sathy Road, opposite Royal Enfield showroom",
      "Ganapathy Housing Unit",
    ],
    city: "Coimbatore",
    region: "Tamil Nadu",
    postalCode: "641006",
    country: "India",
  },
  coordinates: { lat: 11.0434201, lng: 76.9849927 },

  // Opens the listing from the supplied Google Maps CID.
  directionsUrl: "https://www.google.com/maps?cid=10684569129950142467",
  reviewsUrl: "https://www.google.com/maps?cid=10684569129950142467",

  instagram: "https://www.instagram.com/thulir.designer/",
  instagramHandle: "@thulir.designer",
  instagramMen: "https://www.instagram.com/thulir.men/",
  instagramMenHandle: "@thulir.men",
  facebook: "https://www.facebook.com/thulirdesignerboutique/",

  /** Unverified as a WhatsApp destination — keep null until the owner confirms. */
  whatsappNumber: null as string | null,

  /** No verified opening hours available. */
  openingHours: null as string[] | null,
  hoursFallback: "Please call before visiting.",

  /** No verified, reuse-permitted review text available yet. */
  testimonials: [] as { quote: string; name: string; source: string }[],

  /** No approved logo file supplied — a text wordmark is used meanwhile. */
  logoSrc: null as string | null,

  email: null as string | null,
  productionDomain: null as string | null,
} as const;

export const collections = [
  {
    id: "bridal",
    label: "Bridal Wear",
    copy: "Wedding-day outfits designed with you, from silhouette and drape to the final fitting.",
  },
  {
    id: "blouses",
    label: "Bridal & Aari Blouses",
    copy: "Hand-worked Aari and embroidered blouses, detailed to suit your saree and your comfort.",
  },
  {
    id: "groom",
    label: "Groom Wear",
    copy: "Tailored groom looks with considered fabric, fit and finishing for the whole celebration.",
  },
  {
    id: "occasion",
    label: "Custom Occasion Wear",
    copy: "Reception, engagement and family-function outfits made to your brief.",
  },
] as const;

export type CollectionId = (typeof collections)[number]["id"];
