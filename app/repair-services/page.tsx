import StockImage from "../../components/StockImage";
import Divider from "../../components/ui/Divider";
import SectionHeader from "../../components/ui/SectionHeader";
import { ButtonLink } from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const services = [
  { title: "Gimbal repair", from: "$79", desc: "Stabilization alignment, ribbon checks, calibration." },
  { title: "Motor replacement", from: "$89", desc: "Motor + prop diagnostics, safe replacement, testing." },
  { title: "Camera issues", from: "$99", desc: "Focus, sensor checks, gimbal tuning, firmware validation." },
  { title: "ESC / board repair", from: "$149", desc: "Board-level diagnostics and component-level repair." },
  { title: "Firmware troubleshooting", from: "$59", desc: "Update/rollback, error codes, stability verification." },
  { title: "Calibration", from: "$49", desc: "IMU, compass, gimbal, and controller alignment checks." },
  { title: "Water damage inspection", from: "$129", desc: "Corrosion inspection, cleaning, and viability assessment." },
  { title: "Crash damage assessment", from: "$79", desc: "Frame inspection, sensor checks, and repair plan." }
];

export default function RepairServicesPage() {
  return (
    <div className="pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-[320px] w-full md:h-[420px]">
            <StockImage
              src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775212841/IMG_2734_avpvyh.jpg"
              alt="Drone repair bench"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
          </div>
        </div>
        <div className="relative z-10">
          <div className="content-shell flex h-[320px] items-end pb-10 md:h-[420px]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                Repair Services
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Professional Drone Repairs and Technical Support
              </h1>
              <p className="mt-3 text-base font-medium text-white/75">
                Clean diagnostics, quality parts, and transparent updates — built for confidence.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/log-queries">Log Repair Query</ButtonLink>
                <ButtonLink href="/track-repair" variant="secondary">
                  Track Repair
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-shell mt-12">
        <SectionHeader
          title="Repair & maintenance services"
          subtitle="Service cards with transparent starting-from pricing."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          {services.map((s) => (
            <Card key={s.title} className="md:col-span-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="text-base font-semibold tracking-tight text-ink-900">{s.title}</div>
                <div className="text-sm font-semibold text-ink-900">From {s.from}</div>
              </div>
              <div className="mt-2 text-sm font-medium text-ink-600">{s.desc}</div>
              <div className="mt-4">
                <ButtonLink href="/log-queries" variant="secondary">
                  Book service
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>

        <Divider className="my-14" />

        <SectionHeader
          title="How it works"
          subtitle="A premium workflow with predictable milestones."
        />
        <div className="mt-6 grid gap-3 rounded-xl border border-ink-100 bg-white p-6 md:grid-cols-6">
          {[
            "Log request",
            "Device inspection",
            "Diagnosis",
            "Quotation approval",
            "Repair + testing",
            "Ready for collection / delivery"
          ].map((step, idx) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-50 text-sm font-semibold text-ink-900">
                {idx + 1}
              </div>
              <div className="text-sm font-semibold text-ink-900">{step}</div>
            </div>
          ))}
        </div>

        <div id="maintenance" className="mt-12 rounded-xl border border-ink-100 bg-ink-50 p-6 md:p-10">
          <div className="text-xl font-semibold tracking-tight text-ink-900">
            Turnaround examples
          </div>
          <div className="mt-2 text-sm font-medium text-ink-600">
            Times vary by parts availability and complexity. These are typical ranges.
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { t: "Diagnostics", v: "1–2 days" },
              { t: "Standard repairs", v: "3–7 days" },
              { t: "Complex / parts", v: "7–14 days" }
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-ink-100 bg-white p-5">
                <div className="text-sm font-semibold text-ink-900">{x.t}</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight text-ink-900">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

