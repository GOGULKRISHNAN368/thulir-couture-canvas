# ASSETS_NEEDED.md — approved photography required

No boutique photograph could be accessed or approved during this build, so
every image slot currently renders a labelled placeholder
(`data-placeholder="awaiting-approved-photo"`). **The site is not
launch-ready until these are supplied and approved.**

## How to add an image
1. Save the file to `public/media/<filename>` (AVIF or WebP preferred, JPG accepted).
2. In `src/config/media.ts`, on the matching entry set:
   - `approved: true`
   - `sourceUrl` (original post or owner file reference)
   - `originalWidth` / `originalHeight`
   - `alt` (descriptive text), `title`, `focalDesktop`, `focalMobile`
3. Rebuild. Placeholders disappear automatically per image.

## Required files
| Filename | Placement | Recommended size | Orientation |
| --- | --- | --- | --- |
| bridal-01 | Hero (primary, not lazy-loaded) | 2000–2560 px wide | Portrait 3:4 |
| bridal-02 | Lookbook + Instagram selection | 1600 px | Portrait |
| bridal-03 | Lookbook (drape detail) | 1600 px | Landscape 4:3 |
| bridal-04 | Lookbook | 1600 px | Portrait |
| blouse-01 | Craftsmanship close-up | 2000 px | Portrait 4:5 |
| blouse-02 | Lookbook + Instagram | 1600 px | Landscape |
| blouse-03 | Lookbook + Instagram | 1600 px | Portrait |
| blouse-04 | Lookbook (work in progress) | 1600 px | Landscape |
| groom-01 | Hero secondary | 1400 px | Portrait |
| groom-02 | Groom spotlight (main) | 2000 px | Portrait |
| groom-03 | Groom spotlight second + Instagram | 1400 px | Landscape |
| occasion-01 | Lookbook + Instagram | 1600 px | Portrait |
| occasion-02 | Lookbook | 1600 px | Portrait |
| occasion-03 | Lookbook (couple look) | 1600 px | Landscape |
| studio-01 | Our Studio (main) | 2000 px | Landscape |
| studio-02 | Our Studio (secondary) | 1400 px | Portrait |

Also needed: a social sharing image at 1200×630 px, and the logo file
(SVG or transparent PNG) — do not recolour or redraw it.

## Rules for sourcing
- Owner-supplied originals preferred; largest genuinely available resolution.
- Public visibility is not permission. Customer and wedding-photographer
  images need their own approval.
- No stock fashion, Pinterest reposts, other boutiques' work, AI-generated
  garments, Instagram UI screenshots, thumbnails or blurry reel frames.
- Do not remove watermarks or alter garments, colours or embroidery.
- Keep unapproved and reference-only files out of `public/`.

## Launch checklist
- [ ] All 16 images approved and marked `approved: true`
- [ ] Logo file added and `site.logoSrc` set
- [ ] Phone, address, name styling confirmed by owner
- [ ] WhatsApp number confirmed (or left `null`)
- [ ] Opening hours confirmed (or fallback kept)
- [ ] Production domain set; canonical/og:url/sitemap updated
- [ ] `noindex, nofollow` removed from `src/routes/index.tsx`
- [ ] Production build measured (Lighthouse) and results recorded
