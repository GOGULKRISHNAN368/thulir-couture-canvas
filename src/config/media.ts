/**
 * Media manifest. Every entry is currently AWAITING approved boutique
 * photography — see ASSETS_NEEDED.md. `approved: false` entries render as
 * clearly-labelled placeholders and must not be presented as real work.
 */

import type { CollectionId } from "./site";

export type MediaCategory = CollectionId | "studio";

export interface MediaItem {
  id: string;
  /** Local path once the approved file is added to /public/media. */
  path: string;
  category: MediaCategory;
  title: string;
  alt: string;
  sourceUrl: string | null;
  approved: boolean;
  originalWidth: number | null;
  originalHeight: number | null;
  focalDesktop: string;
  focalMobile: string;
  orientation: "portrait" | "landscape";
  instagramPostUrl?: string | null;
}

const item = (m: Omit<MediaItem, "approved" | "sourceUrl" | "originalWidth" | "originalHeight">): MediaItem => ({
  ...m,
  approved: false,
  sourceUrl: null,
  originalWidth: null,
  originalHeight: null,
});

export const media: MediaItem[] = [
  item({ id: "bridal-01", path: "/media/bridal-01.avif", category: "bridal", title: "Bridal look 01", alt: "Awaiting approved photograph of a Thulir bridal outfit.", focalDesktop: "50% 30%", focalMobile: "50% 25%", orientation: "portrait" }),
  item({ id: "bridal-02", path: "/media/bridal-02.avif", category: "bridal", title: "Bridal look 02", alt: "Awaiting approved photograph of a Thulir bridal outfit.", focalDesktop: "50% 35%", focalMobile: "50% 30%", orientation: "portrait" }),
  item({ id: "bridal-03", path: "/media/bridal-03.avif", category: "bridal", title: "Bridal drape detail", alt: "Awaiting approved photograph of bridal saree draping by Thulir.", focalDesktop: "50% 40%", focalMobile: "50% 35%", orientation: "landscape" }),
  item({ id: "bridal-04", path: "/media/bridal-04.avif", category: "bridal", title: "Bridal portrait", alt: "Awaiting approved bridal portrait photograph.", focalDesktop: "50% 25%", focalMobile: "50% 20%", orientation: "portrait" }),
  item({ id: "blouse-01", path: "/media/blouse-01.avif", category: "blouses", title: "Aari blouse detail 01", alt: "Awaiting approved close-up photograph of Aari blouse work.", focalDesktop: "50% 45%", focalMobile: "50% 45%", orientation: "portrait" }),
  item({ id: "blouse-02", path: "/media/blouse-02.avif", category: "blouses", title: "Aari blouse detail 02", alt: "Awaiting approved close-up photograph of embroidery detailing.", focalDesktop: "50% 50%", focalMobile: "50% 50%", orientation: "landscape" }),
  item({ id: "blouse-03", path: "/media/blouse-03.avif", category: "blouses", title: "Embroidered sleeve", alt: "Awaiting approved photograph of an embroidered blouse sleeve.", focalDesktop: "50% 40%", focalMobile: "50% 40%", orientation: "portrait" }),
  item({ id: "blouse-04", path: "/media/blouse-04.avif", category: "blouses", title: "Hand-work in progress", alt: "Awaiting approved photograph of Aari hand-work in progress.", focalDesktop: "50% 50%", focalMobile: "50% 50%", orientation: "landscape" }),
  item({ id: "groom-01", path: "/media/groom-01.avif", category: "groom", title: "Groom look 01", alt: "Awaiting approved photograph of Thulir groom wear.", focalDesktop: "50% 30%", focalMobile: "50% 25%", orientation: "portrait" }),
  item({ id: "groom-02", path: "/media/groom-02.avif", category: "groom", title: "Groom look 02", alt: "Awaiting approved photograph of Thulir groom wear.", focalDesktop: "50% 30%", focalMobile: "50% 25%", orientation: "portrait" }),
  item({ id: "groom-03", path: "/media/groom-03.avif", category: "groom", title: "Groom finishing detail", alt: "Awaiting approved photograph of groom-wear finishing detail.", focalDesktop: "50% 45%", focalMobile: "50% 45%", orientation: "landscape" }),
  item({ id: "occasion-01", path: "/media/occasion-01.avif", category: "occasion", title: "Occasion outfit 01", alt: "Awaiting approved photograph of a custom occasion outfit.", focalDesktop: "50% 30%", focalMobile: "50% 25%", orientation: "portrait" }),
  item({ id: "occasion-02", path: "/media/occasion-02.avif", category: "occasion", title: "Occasion outfit 02", alt: "Awaiting approved photograph of a custom occasion outfit.", focalDesktop: "50% 30%", focalMobile: "50% 25%", orientation: "portrait" }),
  item({ id: "occasion-03", path: "/media/occasion-03.avif", category: "occasion", title: "Couple look", alt: "Awaiting approved photograph of a couple in Thulir outfits.", focalDesktop: "50% 35%", focalMobile: "50% 30%", orientation: "landscape" }),
  item({ id: "studio-01", path: "/media/studio-01.avif", category: "studio", title: "The Thulir studio", alt: "Awaiting approved photograph of the Thulir boutique interior.", focalDesktop: "50% 50%", focalMobile: "50% 50%", orientation: "landscape" }),
  item({ id: "studio-02", path: "/media/studio-02.avif", category: "studio", title: "Fabric selection", alt: "Awaiting approved photograph of fabric selection at the boutique.", focalDesktop: "50% 50%", focalMobile: "50% 50%", orientation: "portrait" }),
];

export const byId = (id: string) => media.find((m) => m.id === id);
export const byCategory = (c: MediaCategory) => media.filter((m) => m.category === c);

export const heroImage = byId("bridal-01")!;
export const heroSecondary = byId("groom-01")!;
export const craftImage = byId("blouse-01")!;
export const groomFeatureImage = byId("groom-02")!;
export const studioImage = byId("studio-01")!;

/** Lookbook = everything except the studio set. */
export const lookbook = media.filter((m) => m.category !== "studio");

/** Curated Instagram selection (locally hosted, not a live feed). */
export const instagramSelection = ["bridal-02", "blouse-02", "groom-03", "occasion-01", "bridal-03", "blouse-03"]
  .map((id) => byId(id)!)
  .filter(Boolean);

export const anyApproved = media.some((m) => m.approved);
