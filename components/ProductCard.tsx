import Link from "next/link";
import StockImage from "./StockImage";
import { cn } from "../lib/cn";
import { type Product } from "../lib/products";

export default function ProductCard({
  product,
  className = ""
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl border border-ink-100 bg-white transition hover:border-ink-200",
        className
      )}
    >
      <div className="relative h-56 bg-ink-50">
        <StockImage src={product.imageSrc} alt={product.imageAlt} className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-base font-semibold tracking-tight text-ink-900">
              {product.name}
            </div>
            <div className="mt-1 text-sm font-medium text-ink-600">
              {product.tagline}
            </div>
          </div>
          <div className="text-sm font-semibold text-ink-900">
            {product.startingPrice}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="inline-flex items-center rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700"
            >
              {h}
            </span>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
          View details <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}

