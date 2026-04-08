import SectionHeader from "../../components/ui/SectionHeader";
import Divider from "../../components/ui/Divider";
import ProductCard from "../../components/ProductCard";
import { DUMMY_PRODUCTS, PRODUCT_CATEGORIES, type ProductCategory } from "../../lib/products";

export default function ProductsPage({
  searchParams
}: {
  searchParams?: { category?: string };
}) {
  const categoryParam = (searchParams?.category ?? "").trim();
  const category = (PRODUCT_CATEGORIES.find((c) => c.id === categoryParam)?.id ??
    "Consumer") as ProductCategory;

  const products = DUMMY_PRODUCTS.filter((p) =>
    categoryParam ? p.category === categoryParam : true
  );

  return (
    <div className="pb-16">
      <section className="content-shell py-10">
        <SectionHeader
          title="Products"
          subtitle="A premium showroom layout — browse categories, compare options, and inquire for quotes."
        />

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="/products"
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              !categoryParam ? "bg-ink-900 text-white" : "bg-ink-50 text-ink-900 hover:bg-ink-100"
            ].join(" ")}
          >
            All
          </a>
          {PRODUCT_CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`/products?category=${encodeURIComponent(c.id)}`}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                categoryParam === c.id
                  ? "bg-ink-900 text-white"
                  : "bg-ink-50 text-ink-900 hover:bg-ink-100"
              ].join(" ")}
            >
              {c.label}
            </a>
          ))}
        </div>

        <Divider className="my-10" />

        <div className="grid gap-4 md:grid-cols-12">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} className="md:col-span-4" />
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-ink-100 bg-ink-50 p-6 md:p-10">
          <div className="text-xl font-semibold tracking-tight text-ink-900">
            Need a quote or enterprise recommendation?
          </div>
          <div className="mt-2 text-sm font-medium text-ink-600">
            Tell us your use case and we’ll suggest the right platform, payload, and service plan.
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
              href="/contact"
            >
              Request a quote
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border border-ink-200/70 bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
              href="/support"
            >
              Compare & guidance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

