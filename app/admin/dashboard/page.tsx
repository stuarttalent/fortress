"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { Label, Select, TextInput } from "../../../components/ui/Field";
import { clearAdminSession, getAdminSession } from "../../../lib/adminAuth";
import { REPAIR_STAGES } from "../../../lib/repairData";
import { DUMMY_ADMIN_REPAIRS, DUMMY_DRONE_REGISTRY, type AdminRepairItem } from "../../../lib/adminData";

function Badge({
  children,
  tone = "neutral"
}: {
  children: React.ReactNode;
  tone?: "neutral" | "blue" | "green" | "amber" | "red";
}) {
  const classes =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
      : tone === "amber"
        ? "bg-amber-50 text-amber-700 border-amber-200/60"
        : tone === "red"
          ? "bg-red-50 text-red-700 border-red-200/60"
          : tone === "blue"
            ? "bg-brand-50 text-brand-600 border-brand-200/50"
            : "bg-black/5 text-charcoal-20 border-black/10";

  return (
    <span
      className={[
        "inline-flex items-center rounded-xl border px-2.5 py-1 text-xs font-semibold",
        classes
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function priorityTone(p: AdminRepairItem["priority"]): "neutral" | "blue" | "green" | "amber" | "red" {
  if (p === "High") return "red";
  if (p === "Normal") return "blue";
  return "neutral";
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [repairs, setRepairs] = useState<AdminRepairItem[]>(DUMMY_ADMIN_REPAIRS);
  const [selectedRef, setSelectedRef] = useState<string>(DUMMY_ADMIN_REPAIRS[0]?.referenceNumber ?? "");

  useEffect(() => {
    const session = getAdminSession();
    if (!session) {
      router.replace("/admin/sign-in");
      return;
    }
    setSessionEmail(session.email);
  }, [router]);

  const filteredDrones = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DUMMY_DRONE_REGISTRY;
    return DUMMY_DRONE_REGISTRY.filter((d) => {
      return (
        d.id.toLowerCase().includes(q) ||
        d.brand.toLowerCase().includes(q) ||
        d.model.toLowerCase().includes(q) ||
        d.serialNumber.toLowerCase().includes(q) ||
        d.ownerName.toLowerCase().includes(q) ||
        d.ownerContact.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const filteredRepairs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return repairs;
    return repairs.filter((r) => {
      return (
        r.referenceNumber.toLowerCase().includes(q) ||
        r.drone.brand.toLowerCase().includes(q) ||
        r.drone.model.toLowerCase().includes(q) ||
        r.drone.serialNumber.toLowerCase().includes(q) ||
        (r.contact.email?.toLowerCase().includes(q) ?? false) ||
        (r.contact.phone?.toLowerCase().includes(q) ?? false) ||
        r.assignedTo.toLowerCase().includes(q)
      );
    });
  }, [query, repairs]);

  const selectedRepair = useMemo(() => {
    return repairs.find((r) => r.referenceNumber === selectedRef) ?? null;
  }, [repairs, selectedRef]);

  const kpis = useMemo(() => {
    const total = repairs.length;
    const inProgress = repairs.filter((r) => r.currentStageIndex >= 2 && r.currentStageIndex <= 5).length;
    const awaitingParts = repairs.filter((r) => REPAIR_STAGES[r.currentStageIndex] === "Awaiting parts").length;
    const completed = repairs.filter((r) => REPAIR_STAGES[r.currentStageIndex] === "Completed").length;
    return { total, inProgress, awaitingParts, completed };
  }, [repairs]);

  function onSignOut() {
    clearAdminSession();
    router.replace("/admin/sign-in");
  }

  function updateSelectedStage(newIndex: number) {
    setRepairs((prev) =>
      prev.map((r) => {
        if (r.referenceNumber !== selectedRef) return r;
        return {
          ...r,
          currentStageIndex: newIndex,
          lastUpdatedLabel: "Just now • updated by admin"
        };
      })
    );
  }

  return (
    <div className="content-shell space-y-6 pb-16 pt-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold text-charcoal-20">Admin</div>
          <h1 className="mt-2 text-2xl font-semibold text-charcoal-30">
            Dashboard
          </h1>
          <div className="mt-2 text-sm font-medium text-charcoal-20">
            Signed in as{" "}
            <span className="font-semibold text-charcoal-30">
              {sessionEmail ?? "—"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/track-repair")}
          >
            View customer tracker
          </Button>
          <Button type="button" variant="secondary" onClick={onSignOut}>
            Sign out
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-12">
        <Card className="md:col-span-3 p-5">
          <div className="text-xs font-semibold text-charcoal-20">Repairs</div>
          <div className="mt-2 text-2xl font-semibold text-charcoal-30">{kpis.total}</div>
          <div className="mt-1 text-xs font-medium text-charcoal-20">Total open records</div>
        </Card>
        <Card className="md:col-span-3 p-5">
          <div className="text-xs font-semibold text-charcoal-20">In progress</div>
          <div className="mt-2 text-2xl font-semibold text-charcoal-30">{kpis.inProgress}</div>
          <div className="mt-1 text-xs font-medium text-charcoal-20">Diagnosis → QA</div>
        </Card>
        <Card className="md:col-span-3 p-5">
          <div className="text-xs font-semibold text-charcoal-20">Awaiting parts</div>
          <div className="mt-2 text-2xl font-semibold text-charcoal-30">{kpis.awaitingParts}</div>
          <div className="mt-1 text-xs font-medium text-charcoal-20">Parts on order</div>
        </Card>
        <Card className="md:col-span-3 p-5">
          <div className="text-xs font-semibold text-charcoal-20">Completed</div>
          <div className="mt-2 text-2xl font-semibold text-charcoal-30">{kpis.completed}</div>
          <div className="mt-1 text-xs font-medium text-charcoal-20">Ready / done</div>
        </Card>
      </div>

      <Card className="p-5">
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Label>Search</Label>
            <TextInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search reference, serial, model, customer, technician..."
            />
          </div>
          <div className="md:col-span-4">
            <Label>Selected repair</Label>
            <Select value={selectedRef} onChange={(e) => setSelectedRef(e.target.value)}>
              {repairs.map((r) => (
                <option key={r.referenceNumber} value={r.referenceNumber}>
                  {r.referenceNumber} • {r.drone.brand} {r.drone.model}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-12">
        {/* Repairs board */}
        <Card className="md:col-span-7 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-charcoal-30">
                Repair registry
              </div>
              <div className="mt-1 text-xs font-medium text-charcoal-20">
                Update status stages and track progress.
              </div>
            </div>
            <Badge tone="blue">{filteredRepairs.length} records</Badge>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-black/5">
            <div className="grid grid-cols-12 bg-black/[0.02] px-4 py-3 text-[11px] font-semibold text-charcoal-20">
              <div className="col-span-4">Reference</div>
              <div className="col-span-4">Drone</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Status</div>
            </div>
            <div className="divide-y divide-black/5">
              {filteredRepairs.map((r) => (
                <button
                  key={r.referenceNumber}
                  type="button"
                  onClick={() => setSelectedRef(r.referenceNumber)}
                  className={[
                    "grid w-full grid-cols-12 px-4 py-3 text-left transition",
                    r.referenceNumber === selectedRef
                      ? "bg-brand-50"
                      : "hover:bg-black/[0.02]"
                  ].join(" ")}
                >
                  <div className="col-span-4">
                    <div className="text-sm font-semibold text-charcoal-30">
                      {r.referenceNumber}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-charcoal-20">
                      {r.contact.email ?? r.contact.phone ?? "—"}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="text-sm font-semibold text-charcoal-30">
                      {r.drone.brand} {r.drone.model}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-charcoal-20">
                      {r.drone.serialNumber}
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <Badge tone={priorityTone(r.priority)}>{r.priority}</Badge>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <Badge tone="neutral">{REPAIR_STAGES[r.currentStageIndex]}</Badge>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Selected repair */}
        <Card className="md:col-span-5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-charcoal-30">
                Status manager
              </div>
              <div className="mt-1 text-xs font-medium text-charcoal-20">
                Set stage for the selected repair.
              </div>
            </div>
            {selectedRepair ? (
              <Badge tone="blue">{selectedRepair.referenceNumber}</Badge>
            ) : (
              <Badge>None</Badge>
            )}
          </div>

          {selectedRepair ? (
            <div className="mt-5 space-y-4">
              <div className="grid gap-3 rounded-2xl border border-black/5 bg-white p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">{selectedRepair.intakeType}</Badge>
                  <Badge tone={priorityTone(selectedRepair.priority)}>
                    {selectedRepair.priority}
                  </Badge>
                  <Badge tone="neutral">Assigned: {selectedRepair.assignedTo}</Badge>
                </div>
                <div className="text-sm font-semibold text-charcoal-30">
                  {selectedRepair.drone.brand} {selectedRepair.drone.model}
                </div>
                <div className="text-xs font-medium text-charcoal-20">
                  Serial: {selectedRepair.drone.serialNumber}
                </div>
                <div className="text-xs font-medium text-charcoal-20">
                  Last update: {selectedRepair.lastUpdatedLabel}
                </div>
                <div className="rounded-2xl bg-black/[0.02] p-3 text-xs font-medium text-charcoal-20">
                  <span className="font-semibold text-charcoal-30">Notes:</span>{" "}
                  {selectedRepair.notes}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Current stage</Label>
                <Select
                  value={String(selectedRepair.currentStageIndex)}
                  onChange={(e) => updateSelectedStage(Number(e.target.value))}
                >
                  {REPAIR_STAGES.map((stage, idx) => (
                    <option key={stage} value={String(idx)}>
                      {idx + 1}. {stage}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="rounded-2xl border border-black/5 bg-white p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-charcoal-20">
                  <span>Progress</span>
                  <span>
                    {Math.round(
                      ((selectedRepair.currentStageIndex + 1) / REPAIR_STAGES.length) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-xl bg-black/5">
                  <div
                    className="h-full rounded-xl bg-brand-500 shadow-glow transition-all"
                    style={{
                      width: `${((selectedRepair.currentStageIndex + 1) / REPAIR_STAGES.length) * 100}%`
                    }}
                  />
                </div>
                <div className="mt-3 text-[11px] font-semibold text-charcoal-20">
                  {REPAIR_STAGES[selectedRepair.currentStageIndex]}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 text-sm font-medium text-charcoal-20">
              Select a repair record to manage its status.
            </div>
          )}
        </Card>

        {/* Drone registry */}
        <Card className="md:col-span-12 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-charcoal-30">
                Drone registry
              </div>
              <div className="mt-1 text-xs font-medium text-charcoal-20">
                Registered drones and owner contacts.
              </div>
            </div>
            <Badge tone="blue">{filteredDrones.length} drones</Badge>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-black/5">
            <div className="grid grid-cols-12 bg-black/[0.02] px-4 py-3 text-[11px] font-semibold text-charcoal-20">
              <div className="col-span-2">ID</div>
              <div className="col-span-4">Drone</div>
              <div className="col-span-3">Owner</div>
              <div className="col-span-2">Warranty</div>
              <div className="col-span-1">Date</div>
            </div>
            <div className="divide-y divide-black/5">
              {filteredDrones.map((d) => (
                <div key={d.id} className="grid grid-cols-12 px-4 py-3">
                  <div className="col-span-2 text-sm font-semibold text-charcoal-30">
                    {d.id}
                  </div>
                  <div className="col-span-4">
                    <div className="text-sm font-semibold text-charcoal-30">
                      {d.brand} {d.model}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-charcoal-20">
                      {d.serialNumber}
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="text-sm font-semibold text-charcoal-30">
                      {d.ownerName}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-charcoal-20">
                      {d.ownerContact}
                    </div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    <Badge tone={d.warrantyLabel === "In warranty" ? "green" : d.warrantyLabel === "Out of warranty" ? "amber" : "neutral"}>
                      {d.warrantyLabel}
                    </Badge>
                  </div>
                  <div className="col-span-1 text-[11px] font-semibold text-charcoal-20">
                    {d.registeredAt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

