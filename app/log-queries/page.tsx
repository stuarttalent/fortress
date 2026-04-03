"use client";

import { type FormEvent, useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import {
  HelperText,
  Label,
  Select,
  TextArea,
  TextInput
} from "../../components/ui/Field";
import { ButtonLink } from "../../components/ui/Button";

type ContactMethod = "Phone" | "Email";
type ServiceType = "Drone Repair" | "Maintenance & Servicing" | "Technical Support" | "Parts Replacement";

function makeDummyReference() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const digits = "23456789";
  const pick = (s: string, len: number) =>
    Array.from({ length: len }, () => s[Math.floor(Math.random() * s.length)]).join("");

  return `FD-${pick(letters, 3)}-${pick(digits, 4)}`;
}

export default function LogQueriesPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [droneBrand, setDroneBrand] = useState("");
  const [droneModel, setDroneModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState<ServiceType>("Drone Repair");
  const [description, setDescription] = useState("");
  const [preferredContact, setPreferredContact] = useState<ContactMethod>("Email");

  const canSubmit = useMemo(() => {
    return (
      fullName.trim().length >= 2 &&
      (phone.trim().length >= 7 || email.trim().includes("@")) &&
      droneBrand.trim().length >= 2 &&
      droneModel.trim().length >= 2 &&
      serialNumber.trim().length >= 3 &&
      description.trim().length >= 10
    );
  }, [description, droneBrand, droneModel, email, fullName, phone, serialNumber]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (!canSubmit) {
      setFormError("Please complete all required fields (and ensure a valid phone or email).");
      return;
    }

    setSubmitting(true);
    // Simulate async submission to backend.
    await new Promise((r) => setTimeout(r, 900));
    const ref = makeDummyReference();
    setSubmittedRef(ref);
    setSubmitting(false);

    // Placeholder for backend connection:
    // 1) send form fields + file to API endpoint
    // 2) persist query to database
    // 3) return reference number
  }

  return (
    <div className="content-shell space-y-10 pb-16 pt-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <h1 className="text-3xl font-semibold text-charcoal-30 md:text-4xl">
            Log a Repair Query
          </h1>
          <p className="mt-3 text-sm font-medium text-charcoal-20">
            Submit your drone details and the issue description. After
            submission, you will receive a reference number for tracking
            repair progress.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Premium intake", d: "Clean information collection" },
              { t: "Reference number", d: "Track progress anytime" },
              { t: "Tech support", d: "Clear next steps" }
            ].map((x) => (
              <Card key={x.t} className="p-4">
                <div className="text-sm font-semibold text-charcoal-30">{x.t}</div>
                <div className="mt-1 text-xs font-medium text-charcoal-20">{x.d}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Card className="p-6">
            <div className="text-base font-semibold text-charcoal-30">
              What happens next?
            </div>
            <div className="mt-4 space-y-3">
              {[
                "We review your request and confirm intake.",
                "A technician performs diagnosis and verifies the issue.",
                "You receive milestones during the repair process.",
                "Once your drone is ready, you’ll be notified for collection."
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600 shadow-glow">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <div className="text-sm font-medium text-charcoal-20">{step}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-brand-50 p-4 text-sm font-semibold text-brand-600 shadow-soft">
              After submission, save your reference number to track status.
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-6 md:p-8">
        <form onSubmit={onSubmit} className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Full name</Label>
              <TextInput
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g., Taylor Morgan"
                required
                autoComplete="name"
              />
            </div>
            <div className="space-y-2">
              <Label>Phone number</Label>
              <TextInput
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 555 123 4567"
                autoComplete="tel"
              />
              <HelperText>Optional if you provide a valid email.</HelperText>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Email address</Label>
              <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <HelperText>Optional if you provide a valid phone number.</HelperText>
            </div>
            <div className="space-y-2">
              <Label>Preferred contact method</Label>
              <Select
                value={preferredContact}
                onChange={(e) => setPreferredContact(e.target.value as ContactMethod)}
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Drone brand</Label>
              <TextInput
                value={droneBrand}
                onChange={(e) => setDroneBrand(e.target.value)}
                placeholder="e.g., DJI"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Drone model</Label>
              <TextInput
                value={droneModel}
                onChange={(e) => setDroneModel(e.target.value)}
                placeholder="e.g., Mini 3 Pro"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Serial number</Label>
              <TextInput
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                placeholder="Enter serial"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Type of service needed</Label>
              <Select
                value={serviceNeeded}
                onChange={(e) => setServiceNeeded(e.target.value as ServiceType)}
              >
                <option value="Drone Repair">Drone Repair</option>
                <option value="Maintenance & Servicing">
                  Maintenance & Servicing
                </option>
                <option value="Technical Support">Technical Support</option>
                <option value="Parts Replacement">Parts Replacement</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Upload image/file (optional)</Label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-2xl border border-black/10 bg-white px-3 py-2.5 text-sm outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-brand-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-brand-600 hover:file:bg-brand-100"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                accept="image/*,application/pdf"
              />
              {fileName ? (
                <HelperText>Attached: {fileName}</HelperText>
              ) : (
                <HelperText>Upload a photo of the issue or any error screen.</HelperText>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Description of issue</Label>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what happened, any error messages, when it started, and any symptoms."
              required
            />
            <HelperText>
              Tip: include error codes, noise, battery behavior, or camera issues.
            </HelperText>
          </div>

          {formError ? (
            <div className="rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm font-semibold text-red-700">
              {formError}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs font-semibold text-charcoal-20">
              By submitting, you agree we may contact you about your repair query.
            </div>
            <Button type="submit" disabled={submitting} className="disabled:opacity-60">
              {submitting ? "Submitting..." : "Submit Repair Query"}
            </Button>
          </div>

          {submittedRef ? (
            <div className="rounded-2xl border border-brand-500/20 bg-brand-50 p-5">
              <div className="text-sm font-semibold text-brand-600">
                Query submitted successfully
              </div>
              <div className="mt-2 text-sm font-medium text-charcoal-30">
                Your reference number:
                <span className="ml-2 inline-flex rounded-xl bg-white px-3 py-1 text-sm font-extrabold tracking-wide text-brand-600 shadow-soft">
                  {submittedRef}
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/track-repair">Track Repair</ButtonLink>
                <ButtonLink href="/log-queries" variant="secondary">
                  Submit Another Query
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </form>
      </Card>
    </div>
  );
}

