"use client";

import { type FormEvent, useMemo, useState } from "react";
import StockImage from "../../components/StockImage";
import Card from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { HelperText, Label, TextInput } from "../../components/ui/Field";
import { REPAIR_STAGES, DUMMY_REPAIR_RECORDS, type RepairRecord } from "../../lib/repairData";

function matchRecord(record: RepairRecord, ref: string, contact: string) {
  const refOk = ref.trim().length ? record.referenceNumber.toLowerCase() === ref.trim().toLowerCase() : true;
  const contactOk = contact.trim().length
    ? (record.contact.email?.toLowerCase().includes(contact.trim().toLowerCase()) ?? false) ||
      (record.contact.phone?.toLowerCase().includes(contact.trim().toLowerCase()) ?? false)
    : true;
  return refOk && contactOk;
}

export default function TrackRepairPage() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RepairRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSearch = useMemo(() => {
    return referenceNumber.trim().length > 0 || contact.trim().length > 0;
  }, [contact, referenceNumber]);

  async function onTrack(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!canSearch) {
      setError("Enter a reference number, or your phone/email to search.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    const match = DUMMY_REPAIR_RECORDS.find((rec) =>
      matchRecord(rec, referenceNumber, contact)
    );

    if (!match) {
      setLoading(false);
      setError(
        "No matching repair found. Double-check the reference number or contact info."
      );
      return;
    }

    setResult(match);
    setLoading(false);
  }

  const progressPct = useMemo(() => {
    if (!result) return 0;
    const reached = Math.min(result.currentStageIndex + 1, REPAIR_STAGES.length);
    return (reached / REPAIR_STAGES.length) * 100;
  }, [result]);

  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-[260px] w-full md:h-[320px]">
            <StockImage
              src="https://res.cloudinary.com/dugcmzmw4/image/upload/v1775212841/IMG_2734_avpvyh.jpg"
              alt="Drone repair and inspection"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-10 via-charcoal-10/45 to-white/10" />
          </div>
        </div>
        <div className="relative z-10">
          <div className="content-shell flex h-[260px] items-end pb-8 md:h-[320px]">
            <div>
              <h1 className="text-3xl font-semibold text-white md:text-4xl">
                Track Drone Repair
              </h1>
              <p className="mt-2 max-w-xl text-sm font-medium text-brand-100">
                Check progress using your reference number or your phone/email.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="content-shell space-y-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <div className="hidden">
            {/* Hero heading is shown in banner for a premium layout */}
          </div>
        </div>
        <div className="md:col-span-5">
          <Card className="p-6">
            <div className="text-base font-semibold text-charcoal-30">
              Support note
            </div>
            <p className="mt-3 text-sm font-medium text-charcoal-20">
              If you can’t find your repair record, contact support and share
              your drone model and serial number.
            </p>
            <div className="mt-4 text-xs font-semibold text-charcoal-20">
              Phone: +263 710 493700 • Email: info@itechdrones.com
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 md:p-8">
        <form onSubmit={onTrack} className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Repair reference number</Label>
              <TextInput
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                placeholder="e.g., FD-ALPHA-4821"
                autoComplete="off"
              />
              <HelperText>Recommended for best results.</HelperText>
            </div>
            <div className="space-y-2">
              <Label>Phone number or email</Label>
              <TextInput
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g., you@example.com or +1 (555) ..."
                autoComplete="off"
              />
              <HelperText>Use whichever you provided during logging.</HelperText>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold text-charcoal-20">
              Track milestones from intake to quality check and completion.
            </div>
            <Button type="submit" disabled={loading || !canSearch}>
              {loading ? "Tracking..." : "Track Repair"}
            </Button>
          </div>

          {error ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {error}
            </div>
          ) : null}
        </form>
      </Card>

      {result ? (
        <div className="grid gap-4 md:grid-cols-12">
          <Card className="md:col-span-12 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-base font-semibold text-charcoal-30">
                  Repair status timeline
                </div>
                <div className="mt-1 text-xs font-medium text-charcoal-20">
                  Reference:{" "}
                  <span className="font-extrabold text-brand-600">
                    {result.referenceNumber}
                  </span>{" "}
                  • {result.lastUpdatedLabel}
                </div>
              </div>
              <div className="text-xs font-semibold text-charcoal-20">
                {result.drone.brand} {result.drone.model}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-black/5 bg-white p-4">
              <div className="flex items-center justify-between text-xs font-semibold text-charcoal-20">
                <span>Progress</span>
                <span>{Math.round(progressPct)}%</span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-xl bg-black/5">
                <div
                  className="h-full rounded-xl bg-brand-500 shadow-glow transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-charcoal-20">
                <span>{REPAIR_STAGES[0]}</span>
                <span>{REPAIR_STAGES[REPAIR_STAGES.length - 1]}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {REPAIR_STAGES.map((stage, idx) => {
                const state =
                  idx < result.currentStageIndex
                    ? "done"
                    : idx === result.currentStageIndex
                      ? "active"
                      : "upcoming";

                const dotClass =
                  state === "done"
                    ? "bg-brand-500"
                    : state === "active"
                      ? "bg-brand-600 shadow-glow"
                      : "bg-black/15";
                const textClass =
                  state === "done" || state === "active"
                    ? "text-charcoal-30"
                    : "text-charcoal-20";

                return (
                  <div
                    key={stage}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4 transition"
                  >
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-white">
                      <div
                        className={`h-3.5 w-3.5 rounded-full ${dotClass} shadow-glow`}
                      />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${textClass}`}>
                        {stage}
                      </div>
                      {state === "active" ? (
                        <div className="mt-1 text-xs font-semibold text-brand-600">
                          Currently in progress
                        </div>
                      ) : state === "done" ? (
                        <div className="mt-1 text-xs font-semibold text-charcoal-20">
                          Completed
                        </div>
                      ) : (
                        <div className="mt-1 text-xs font-semibold text-charcoal-20">
                          Pending
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 p-5">
              <div className="text-sm font-semibold text-brand-600">
                Next update
              </div>
              <div className="mt-1 text-sm font-medium text-charcoal-20">
                We’ll move your repair through the remaining milestones and
                confirm when your drone is ready for collection.
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs font-semibold text-charcoal-20">
                  Tip: keep this reference number for future tracking.
                </div>
                <a
                  className="text-sm font-semibold text-brand-600 hover:text-brand-700"
                  href="/log-queries"
                >
                  Log another query
                </a>
              </div>
            </div>
          </Card>
        </div>
      ) : null}
      </div>
    </div>
  );
}

