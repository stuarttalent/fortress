import StockImage from "../components/StockImage";
import {
  IconBox,
  IconBolt,
  IconChat,
  IconClock,
  IconShield,
  IconSpark,
  IconWrench
} from "../components/icons";
import { ButtonLink } from "../components/ui/Button";
import Card from "../components/ui/Card";

const services = [
  { title: "Drone Sales", desc: "Curated drones for every flight goal.", icon: IconSpark },
  { title: "Drone Repairs", desc: "Board-level diagnostics and precise repair work.", icon: IconWrench },
  { title: "Maintenance & Servicing", desc: "Routine checks to keep performance sharp.", icon: IconClock },
  { title: "Parts Replacement", desc: "Genuine components with compatibility verification.", icon: IconBox },
  { title: "Technical Diagnostics", desc: "Fast triage to identify root causes.", icon: IconShield }
];

const whyChooseUs = [
  { title: "Skilled technicians", desc: "Engineers and repair technicians trained for reliability.", icon: IconWrench },
  { title: "Fast turnaround", desc: "Structured workflow for quick inspection and updates.", icon: IconBolt },
  { title: "Genuine parts", desc: "Quality parts chosen for longevity and safety.", icon: IconBox },
  { title: "Transparent updates", desc: "Clear milestones from intake to quality check.", icon: IconShield },
  { title: "Trusted customer support", desc: "Friendly, tech-forward help before and after repair.", icon: IconChat }
];

const processSteps = [
  "Log issue",
  "Device received",
  "Diagnosis",
  "Repair in progress",
  "Quality check",
  "Ready for collection"
];

const testimonials = [
  {
    name: "Alex M.",
    role: "Commercial Pilot",
    quote:
      "They were quick, transparent, and the repair was immaculate. The drone feels better than new."
  },
  {
    name: "Samantha K.",
    role: "Aerial Content Creator",
    quote:
      "Premium service from start to finish. I received a reference number and the updates kept me in control."
  },
  {
    name: "Jordan P.",
    role: "Tech Enthusiast",
    quote:
      "Clear diagnosis and genuine parts. The team explained what was wrong and how they fixed it."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -bottom-56 left-10 h-[420px] w-[420px] rounded-full bg-brand-500/8 blur-3xl" />
        </div>

        <div className="content-shell grid gap-10 items-center py-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-black/5 bg-white/70 px-3 py-2 text-xs font-semibold text-charcoal-20 shadow-soft">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shadow-glow">
                <IconSpark />
              </span>
              Premium drone repairs and sales
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-charcoal-30 md:text-5xl">
              Professional Drone Sales, Repairs, and Support You Can Trust
            </h1>
            <p className="mt-5 max-w-xl text-lg text-charcoal-20">
              Fotress Drone Solutions provides quality drones, expert repairs,
              and reliable technical support with transparent updates and
              premium workmanship.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/log-queries">
                Log a Repair Query
              </ButtonLink>
              <ButtonLink href="/track-repair" variant="secondary">
                Track Repair Status
              </ButtonLink>
              <ButtonLink href="/about#contact" variant="ghost">
                Contact Us
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Fast intake", v: "Clear milestones" },
                { k: "Tech diagnostics", v: "Root-cause focus" },
                { k: "Quality check", v: "Ready for flight" }
              ].map((s) => (
                <Card key={s.k} className="p-4">
                  <div className="text-sm font-semibold text-charcoal-30">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs font-medium text-charcoal-20">
                    {s.v}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.2rem] bg-brand-500/10 blur-xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-black/5 bg-white shadow-soft">
                <div className="relative h-[360px] md:h-[420px]">
                  <StockImage
                    src="https://images.unsplash.com/photo-1611162618071-fd83c3f9b2c8?auto=format&fit=crop&w=1400&q=80"
                    alt="Drone technician inspection"
                    priority
                    className="animate-floaty"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-2xl p-4 shadow-soft">
                      <div className="text-sm font-semibold text-charcoal-30">
                        Repair workflow preview
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {processSteps.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center rounded-xl border border-black/10 bg-white/80 px-2.5 py-1 text-xs font-semibold text-charcoal-20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-brand-500/12 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section>
        <div className="content-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal-30">
                Featured Services
              </h2>
              <p className="mt-2 text-sm font-medium text-charcoal-20">
                Everything you need to buy, maintain, and fly with confidence.
              </p>
            </div>
            <div className="hidden md:block text-xs font-semibold text-charcoal-20">
              Premium • Clean • Reliable
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card
                  key={s.title}
                  className="md:col-span-4 p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                      <Icon />
                    </div>
                    <div className="text-base font-semibold text-charcoal-30">
                      {s.title}
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-charcoal-20">
                    {s.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative">
        <div className="content-shell">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-semibold text-charcoal-30">
                Why choose Fotress
              </h2>
              <p className="mt-2 text-sm font-medium text-charcoal-20">
                A premium tech service approach: careful diagnostics, clean
                workmanship, and customer-first communication.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-600 shadow-soft">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-500 shadow-glow" />
                Built for trust and speed
              </div>
            </div>
            <div className="md:col-span-8 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((w) => {
                const Icon = w.icon;
                return (
                  <Card
                    key={w.title}
                    className="p-5 transition hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                        <Icon />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-charcoal-30">
                          {w.title}
                        </div>
                        <div className="mt-1 text-xs font-medium text-charcoal-20">
                          {w.desc}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR PROCESS */}
      <section>
        <div className="content-shell">
          <h2 className="text-2xl font-semibold text-charcoal-30">
            A Repair Process Built for Clarity
          </h2>
          <p className="mt-2 text-sm font-medium text-charcoal-20">
            From the moment you log your issue, we keep things structured and
            transparent.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {processSteps.map((step, idx) => (
              <div
                key={step}
                className="md:col-span-4"
              >
                <Card className="p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div className="text-sm font-semibold text-charcoal-30">
                      {step}
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-charcoal-20">
                    {idx === 0
                      ? "Submit details and upload media for accurate intake."
                      : idx === 1
                        ? "We confirm receipt and begin inspection scheduling."
                        : idx === 2
                          ? "Structured diagnosis to identify the true root cause."
                          : idx === 3
                            ? "Repairs completed using the right tools and procedures."
                            : idx === 4
                              ? "Functional checks and final calibration verification."
                              : "We package your drone and provide collection instructions."}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative">
        <div className="content-shell">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal-30">
                Customer Testimonials
              </h2>
              <p className="mt-2 text-sm font-medium text-charcoal-20">
                Real customers. Premium results.
              </p>
            </div>
            <div className="text-xs font-semibold text-charcoal-20">
              Quality you can feel
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="md:col-span-4 p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="text-sm font-semibold text-charcoal-30">
                  {t.name}
                </div>
                <div className="mt-1 text-xs font-medium text-charcoal-20">
                  {t.role}
                </div>
                <p className="mt-4 text-sm font-medium text-charcoal-20">
                  “{t.quote}”
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

