import StockImage from "../components/StockImage";
import { ButtonLink } from "../components/ui/Button";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <StockImage
            src="https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=1600&q=80"
            alt="Premium drones in flight over landscape"
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

