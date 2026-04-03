import StockImage from "../components/StockImage";
import { ButtonLink } from "../components/ui/Button";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <StockImage
            src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775213112/mountain-peak-view-from-flying-drone-generated-by-ai_kunqsi.jpg"
            alt="Flying drone view over mountain peak"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-10 via-charcoal-10/40 to-white/10" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="content-shell flex min-h-[calc(100vh-4rem)] items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Fotress Drone Solutions
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Professional Drone Sales, Repairs, and Support You Can Trust
            </h1>
            <p className="max-w-md text-sm font-medium text-brand-100 md:text-base">
              Minimal, focused, and fast. Log a repair, track status, or speak
              to a specialist — all from one place.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/log-queries" className="w-full sm:w-auto">
                Log a Repair Query
              </ButtonLink>
              <ButtonLink
                href="/track-repair"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Track Repair Status
              </ButtonLink>
              <a
                href="https://wa.me/263787230477?text=hi"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition",
                  "focus:outline-none focus:ring-2 focus:ring-brand-400/70 focus:ring-offset-2 focus:ring-offset-white",
                  "shadow-soft",
                  "border border-white/25 bg-white/10 text-white hover:bg-white/15 hover:border-white/40",
                  "w-full sm:w-auto"
                ].join(" ")}
              >
                WhatsApp
              </a>
              <ButtonLink
                href="/about#contact"
                variant="ghost"
                className="w-full sm:w-auto border-white/20 text-white hover:border-white/40 hover:bg-white/5"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

