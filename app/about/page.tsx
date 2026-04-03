import StockImage from "../../components/StockImage";
import Card from "../../components/ui/Card";
import { ButtonLink } from "../../components/ui/Button";
import {
  IconChat,
  IconClock,
  IconShield,
  IconSpark,
  IconWrench
} from "../../components/icons";

const values = [
  { title: "Integrity", desc: "Clear diagnostics, honest timelines, no surprises." },
  { title: "Precision", desc: "Repair work that respects each drone’s design." },
  { title: "Innovation", desc: "Modern testing approaches for dependable results." },
  { title: "Reliability", desc: "Quality checks designed for real-world flight." },
  { title: "Customer care", desc: "Support that’s responsive, friendly, and technical." }
];

const team = [
  {
    name: "Maya Chen",
    role: "Lead Drone Technician",
    img: "https://images.unsplash.com/photo-1611930022073-bf3cc9f6e1e7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Ethan Rivera",
    role: "Diagnostics Engineer",
    img: "https://images.unsplash.com/photo-1560264280-88fbb0c6a2e6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Priya Nair",
    role: "Repair & Quality Specialist",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Samir Patel",
    role: "Parts & Compatibility Advisor",
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative">
        <div className="content-shell py-12">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h1 className="text-3xl font-semibold text-charcoal-30 md:text-4xl">
                Fotress Drone Solutions
              </h1>
              <p className="mt-4 text-base font-medium text-charcoal-20">
                We help customers stay in the air with premium drone sales,
                meticulous repairs, and technical support you can count on.
                Whether your drone needs troubleshooting, parts replacement, or
                servicing, our process is designed for clarity and confidence.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Card className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                      <IconWrench />
                    </div>
                    <div className="text-sm font-semibold text-charcoal-30">
                      Expert repair workflow
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-charcoal-20">
                    Intake, diagnosis, repair, quality check.
                  </div>
                </Card>
                <Card className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                      <IconClock />
                    </div>
                    <div className="text-sm font-semibold text-charcoal-30">
                      Reliable turnaround
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-charcoal-20">
                    Structured milestones with transparent updates.
                  </div>
                </Card>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-black/5 bg-white shadow-soft">
                <div className="relative h-[360px] md:h-[420px]">
                  <StockImage
                    src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775212841/IMG_2734_avpvyh.jpg"
                    alt="Drone repair and inspection"
                    priority
                    className="animate-floaty"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-2xl p-4 shadow-soft">
                      <div className="text-sm font-semibold text-charcoal-30">
                        Mission-ready repairs
                      </div>
                      <div className="mt-1 text-xs font-medium text-charcoal-20">
                        Technical support that respects your time.
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-xl border border-black/10 bg-white/80 px-2.5 py-1 text-xs font-semibold text-charcoal-20">
                          Sales
                        </span>
                        <span className="rounded-xl border border-black/10 bg-white/80 px-2.5 py-1 text-xs font-semibold text-charcoal-20">
                          Repairs
                        </span>
                        <span className="rounded-xl border border-black/10 bg-white/80 px-2.5 py-1 text-xs font-semibold text-charcoal-20">
                          Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section>
        <div className="content-shell">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-6">
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                    <IconSpark />
                  </div>
                  <div className="text-base font-semibold text-charcoal-30">
                    Mission
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-charcoal-20">
                  Deliver premium drone repair and technical support with a
                  transparent process, verified diagnostics, and quality parts
                  so customers can fly with confidence.
                </p>
              </Card>
            </div>
            <div className="md:col-span-6">
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                    <IconShield />
                  </div>
                  <div className="text-base font-semibold text-charcoal-30">
                    Vision
                  </div>
                </div>
                <p className="mt-3 text-sm font-medium text-charcoal-20">
                  Be the most trusted tech service for drone owners, known for
                  clarity, fast turnaround, and consistent quality checks
                  across every repair.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-charcoal-30">
              Why we exist
            </h2>
            <p className="mt-2 text-sm font-medium text-charcoal-20">
              Drones are high-value tools for work and creativity. When
              something goes wrong, customers need a premium, tech-forward
              repair partner that communicates clearly and delivers reliable
              results. We exist to make drone maintenance predictable and
              stress-free.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-12">
            <Card className="md:col-span-8 p-6">
              <h3 className="text-lg font-semibold text-charcoal-30">
                Expertise in drone sales and technical repair
              </h3>
              <p className="mt-3 text-sm font-medium text-charcoal-20">
                We support multiple drone categories and common service needs:
                firmware & diagnostics, motor/propeller compatibility checks,
                camera gimbal calibration, battery evaluation, and parts
                replacement with compatibility verification.
              </p>
            </Card>
            <Card className="md:col-span-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-glow">
                  <IconChat />
                </div>
                <div className="text-base font-semibold text-charcoal-30">
                  Tech-forward support
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-charcoal-20">
                Questions before and after repairs are welcome. We keep it
                clear.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="content-shell">
          <h2 className="text-2xl font-semibold text-charcoal-30">
            Our values
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-12">
            {values.map((v) => (
              <Card
                key={v.title}
                className="md:col-span-4 p-6 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="text-base font-semibold text-charcoal-30">
                  {v.title}
                </div>
                <p className="mt-2 text-sm font-medium text-charcoal-20">
                  {v.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section>
        <div className="content-shell">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-charcoal-30">
                Technicians you can rely on
              </h2>
              <p className="mt-2 text-sm font-medium text-charcoal-20">
                Experienced repair experts and diagnostics specialists.
              </p>
            </div>
            <div className="text-xs font-semibold text-charcoal-20">
              Premium work, every time
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            {team.map((m) => (
              <Card
                key={m.name}
                className="md:col-span-3 overflow-hidden p-0 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <div className="relative h-44 bg-black/5">
                  <StockImage
                    src={m.img}
                    alt={`${m.name} portrait`}
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-base font-semibold text-charcoal-30">
                    {m.name}
                  </div>
                  <div className="mt-1 text-xs font-medium text-charcoal-20">
                    {m.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + CONTACT */}
      <section id="contact" className="relative">
        <div className="content-shell">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-black/5 bg-gradient-to-br from-brand-500/10 via-white to-white px-6 py-10 shadow-soft md:px-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/12 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h2 className="text-2xl font-semibold text-charcoal-30">
                  Ready to get your drone back to flying?
                </h2>
                <p className="mt-2 text-sm font-medium text-charcoal-20">
                  Log a repair query for reference-number tracking, or reach out
                  directly for technical guidance.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/log-queries">Log a Repair Query</ButtonLink>
                  <ButtonLink href="/track-repair" variant="secondary">
                    Track Repair Status
                  </ButtonLink>
                </div>
              </div>
              <div className="md:col-span-5">
                <Card className="p-6">
                  <div className="text-base font-semibold text-charcoal-30">
                    Contact details
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-charcoal-20">
                    <div>
                      <span className="font-semibold text-charcoal-30">Phone:</span>{" "}
                      +1 (555) 123-4567
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal-30">Email:</span>{" "}
                      service@fotressdrone.com
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal-30">
                        Hours:
                      </span>{" "}
                      Mon–Sat, 9:00am–6:00pm
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal-30">
                        Location:
                      </span>{" "}
                      48 Avionics Park, Suite 12, San Diego, CA 92101
                    </div>
                  </div>
                  <p className="mt-4 text-xs font-medium text-charcoal-20">
                    For urgent assistance, include your drone model and serial
                    number in your message.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

