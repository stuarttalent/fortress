import Link from "next/link";
import StockImage from "../StockImage";
import { cn } from "../../lib/cn";

export default function Tile({
  title,
  subtitle,
  href,
  imageSrc,
  imageAlt,
  className = ""
}: {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-ink-100 bg-white",
        "transition hover:border-ink-200",
        className
      )}
    >
      <div className="relative h-56 w-full bg-ink-50">
        <StockImage src={imageSrc} alt={imageAlt} className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90 transition group-hover:opacity-95" />
      </div>
      <div className="p-5">
        <div className="text-base font-semibold tracking-tight text-ink-900">
          {title}
        </div>
        <div className="mt-1 text-sm font-medium text-ink-600">{subtitle}</div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
          Learn more
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}

