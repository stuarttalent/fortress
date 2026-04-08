import StockImage from "../../../components/StockImage";
import Divider from "../../../components/ui/Divider";
import SectionHeader from "../../../components/ui/SectionHeader";
import { ButtonLink } from "../../../components/ui/Button";
import { getProductBySlug } from "../../../lib/products";

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="content-shell py-16">
        <div className="text-2xl font-semibold text-ink-900">Product not found</div>
        <div className="mt-2 text-sm font-medium text-ink-600">
          The product you’re looking for doesn’t exist in the demo catalog.
        </div>
        <div className="mt-6">
          <ButtonLink href="/products" variant="secondary">
            Back to products
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16">
      <section className="content-shell py-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-xl border border-ink-100 bg-ink-50">
              <div className="relative h-[420px] w-full md:h-[520px]">
                <StockImage
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <SectionHeader title={product.name} subtitle={product.tagline} />
            <div className="mt-4 text-sm font-semibold text-ink-900">
              Starting from <span className="text-ink-900">{product.startingPrice}</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                href="/contact"
              >
                Buy now
              </a>
              <ButtonLink href="/contact" variant="secondary">
                Inquire
              </ButtonLink>
              <ButtonLink href="/repair-services" variant="ghost">
                Book demo
              </ButtonLink>
            </div>

            <Divider className="my-8" />

            <div className="grid gap-3">
              <div className="text-sm font-semibold text-ink-900">Key highlights</div>
              <ul className="list-inside list-disc text-sm font-medium text-ink-600">
                {product.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <Divider className="my-8" />

            <div className="grid gap-3">
              <div className="text-sm font-semibold text-ink-900">Specifications</div>
              <div className="grid gap-2">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between rounded-lg border border-ink-100 bg-white px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-ink-700">{s.label}</div>
                    <div className="text-sm font-semibold text-ink-900">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider className="my-12" />

        <SectionHeader
          title="Support & service"
          subtitle="Protect your investment with premium diagnostics, parts, and transparent updates."
          right={
            <div className="flex gap-2">
              <ButtonLink href="/repair-services" variant="secondary">
                Repair services
              </ButtonLink>
              <ButtonLink href="/support" variant="secondary">
                Support
              </ButtonLink>
            </div>
          }
        />
      </section>
    </div>
  );
}

