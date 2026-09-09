import type { MediaItem } from "@/config/media";

/**
 * Renders an approved photograph when available, otherwise a clearly
 * labelled placeholder frame. Placeholders must never be presented as
 * the boutique's real work.
 */
export function Media({
  item,
  className = "",
  dark = false,
  priority = false,
  sizes = "100vw",
  labelSize = "base",
}: {
  item: MediaItem;
  className?: string;
  dark?: boolean;
  priority?: boolean;
  sizes?: string;
  labelSize?: "sm" | "base";
}) {
  if (item.approved) {
    return (
      <img
        src={item.path}
        alt={item.alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        width={item.originalWidth ?? undefined}
        height={item.originalHeight ?? undefined}
        style={{ objectPosition: item.focalDesktop }}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={item.alt}
      data-placeholder="awaiting-approved-photo"
      className={`ph ${dark ? "ph-dark" : ""} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center">
        <span
          className={`eyebrow ${dark ? "text-blush" : ""}`}
          style={dark ? undefined : { color: "var(--color-plum)" }}
        >
          Placeholder
        </span>
        <span
          className={`font-display ${labelSize === "sm" ? "text-lg" : "text-2xl"} leading-tight`}
        >
          {item.title}
        </span>
        <span className="max-w-[26ch] text-[0.68rem] leading-snug tracking-wide uppercase opacity-70">
          Awaiting approved boutique photograph
        </span>
      </div>
    </div>
  );
}
