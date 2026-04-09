import StockImage from "../components/StockImage";
import { ButtonLink } from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import Tile from "../components/ui/Tile";
import Divider from "../components/ui/Divider";
import ProductCard from "../components/ProductCard";
import { DUMMY_PRODUCTS } from "../lib/products";

export default function HomePage() {
  return (
    <div className="pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-[1365px] w-full md:h-[768px]">
            <StockImage
              src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775665360/Gemini_Generated_Image_lovr5olovr5olovr_y0pca6.png"
              alt="Fotress Drone Solutions hero wallpaper"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="content-shell flex h-[1365px] items-center md:h-[768px]">
            <div className="mx-auto w-full max-w-2xl text-center">
              <div className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                iTech Drones
              </div>
              <h1 className="mx-auto mt-5 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Precision in Flight. Confidence in Every Repair.
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-white/75 md:text-base">
                .
              </p>

              <div className="mx-auto mt-7 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-bottom">
                <ButtonLink
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition hover:bg-white/15"
                >
                  Shop Drones
                </ButtonLink>
                <ButtonLink
                  href="/repair-services"
                  variant="secondary"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition hover:bg-white/15"
                >
                  Book Repair
                </ButtonLink>
                <ButtonLink
                  href="/track-repair"
                  variant="ghost"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition hover:bg-white/15"
                >
                  Track Repair
                </ButtonLink>
              </div>

              <div className="mt-5">
                <a
                  href="https://wa.me/263710493700?text=hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur transition hover:bg-white/15"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section id="services" className="content-shell mt-12">
        <SectionHeader
          title="Featured categories"
          subtitle="Shop drones, book repairs, and keep your fleet mission‑ready."
          right={<div className="text-xs font-semibold text-ink-600">Product-first • Cinematic • Minimal</div>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <Tile
            className="md:col-span-4"
            title="Consumer drones"
            subtitle="Lightweight, capable drones for everyday flying."
            href="/products?category=Consumer"
            imageSrc="https://images.unsplash.com/photo-1527979809431-8b3b7c4c5f0d?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Consumer drone"
          />
          <Tile
            className="md:col-span-4"
            title="Professional drones"
            subtitle="Creator-ready imaging and confident performance."
            href="/products?category=Professional"
            imageSrc="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Professional drone in flight"
          />
          <Tile
            className="md:col-span-4"
            title="Drone repairs"
            subtitle="Diagnosis, parts replacement, calibration, QA."
            href="/repair-services"
            imageSrc="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775212841/IMG_2734_avpvyh.jpg"
            imageAlt="Repair bench"
          />
          <Tile
            className="md:col-span-4"
            title="Spare parts & accessories"
            subtitle="Batteries, props, gimbals, cables, and more."
            href="/products?category=Accessories"
            imageSrc="https://images.unsplash.com/photo-1580982172471-9377b23f6e23?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Drone parts"
          />
          <Tile
            className="md:col-span-4"
            title="Maintenance services"
            subtitle="Routine servicing built for reliability."
            href="/repair-services#maintenance"
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Technician workspace"
          />
          <Tile
            className="md:col-span-4"
            title="Enterprise solutions"
            subtitle="Inspection workflows for demanding operations."
            href="/products?category=Enterprise"
            imageSrc="https://images.unsplash.com/photo-1504445969282-7feb20f202b8?auto=format&fit=crop&w=1600&q=80"
            imageAlt="Enterprise inspection"
          />
        </div>
      </section>

      <Divider className="content-shell my-14" />

      {/* FEATURED PRODUCTS */}
      <section className="content-shell">
        <SectionHeader
          title="Featured products"
          subtitle="Premium selections for creators, teams, and operators."
          right={<ButtonLink href="/products" variant="secondary">View all</ButtonLink>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          {DUMMY_PRODUCTS.slice(0, 6).map((p) => (
            <ProductCard key={p.slug} product={p} className="md:col-span-4" />
          ))}
        </div>
      </section>

      <Divider className="content-shell my-14" />

      {/* REPAIR EXPERIENCE */}
      <section className="content-shell">
        <SectionHeader
          title="Repair experience"
          subtitle="A clean workflow designed for transparent progress."
        />
        <div className="mt-6 grid gap-3 rounded-xl border border-ink-100 bg-white p-5 md:grid-cols-7">
          {[
            "Log request",
            "Device inspection",
            "Diagnosis",
            "Quotation approval",
            "Repair in progress",
            "Testing",
            "Ready"
          ].map((s, idx) => (
            <div key={s} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-50 text-sm font-semibold text-ink-900">
                {idx + 1}
              </div>
              <div className="text-sm font-semibold text-ink-900">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/log-queries">Log query</ButtonLink>
          <ButtonLink href="/track-repair" variant="secondary">
            Track existing repair
          </ButtonLink>
        </div>
      </section>

      {/* TRACKING CTA BAND */}
      <section className="content-shell mt-14">
        <div className="grid gap-6 rounded-xl border border-ink-100 bg-ink-50 p-6 md:grid-cols-12 md:items-center md:p-10">
          <div className="md:col-span-7">
            <div className="text-2xl font-semibold tracking-tight text-ink-900">
              Track repair status in seconds
            </div>
            <div className="mt-2 text-sm font-medium text-ink-600">
              Use your reference number to view milestones, notes, and readiness.
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="w-full rounded-lg border border-ink-200/70 bg-white px-4 py-2.5 text-sm font-semibold text-ink-400">
                Reference number (e.g., FD-ALPHA-4821)
              </div>
              <ButtonLink href="/track-repair" className="w-full sm:w-auto">
                Track now
              </ButtonLink>
            </div>
            <div className="mt-2 text-xs font-medium text-ink-600">
              This is a preview field — the tracking portal contains the full search.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

