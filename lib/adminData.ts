import { type RepairRecord } from "./repairData";

export type DroneRegistryItem = {
  id: string;
  brand: string;
  model: string;
  serialNumber: string;
  ownerName: string;
  ownerContact: string;
  registeredAt: string;
  warrantyLabel: string;
};

export type AdminRepairItem = RepairRecord & {
  intakeType: "Repair" | "Maintenance" | "Support";
  priority: "Low" | "Normal" | "High";
  assignedTo: string;
  notes: string;
};

export const DUMMY_DRONE_REGISTRY: DroneRegistryItem[] = [
  {
    id: "DRN-001",
    brand: "DJI",
    model: "Mini 3 Pro",
    serialNumber: "SN-3P8K-1204",
    ownerName: "Taylor Morgan",
    ownerContact: "customer1@example.com",
    registeredAt: "2026-03-18",
    warrantyLabel: "In warranty"
  },
  {
    id: "DRN-002",
    brand: "Autel",
    model: "EVO Lite+",
    serialNumber: "EVL-88A1-5402",
    ownerName: "Samantha King",
    ownerContact: "pilot2@example.com",
    registeredAt: "2026-02-27",
    warrantyLabel: "Warranty check needed"
  },
  {
    id: "DRN-003",
    brand: "Skydio",
    model: "2+",
    serialNumber: "SKD-2P5H-3308",
    ownerName: "Jordan Parker",
    ownerContact: "+1 (555) 010-8844",
    registeredAt: "2026-01-09",
    warrantyLabel: "Out of warranty"
  },
  {
    id: "DRN-004",
    brand: "DJI",
    model: "Air 3",
    serialNumber: "AIR3-77Q2-8820",
    ownerName: "Alex M.",
    ownerContact: "+1 (555) 010-1155",
    registeredAt: "2026-03-30",
    warrantyLabel: "In warranty"
  }
];

export const DUMMY_ADMIN_REPAIRS: AdminRepairItem[] = [
  {
    referenceNumber: "FD-ALPHA-4821",
    contact: { email: "customer1@example.com", phone: "+1 (555) 010-2233" },
    drone: { brand: "DJI", model: "Mini 3 Pro", serialNumber: "SN-3P8K-1204" },
    currentStageIndex: 3,
    lastUpdatedLabel: "Today • 10:24 AM",
    intakeType: "Repair",
    priority: "High",
    assignedTo: "Maya Chen",
    notes: "Intermittent gimbal jitter. Suspect calibration + ribbon cable."
  },
  {
    referenceNumber: "FD-BRAVO-7396",
    contact: { email: "pilot2@example.com" },
    drone: { brand: "Autel", model: "EVO Lite+", serialNumber: "EVL-88A1-5402" },
    currentStageIndex: 5,
    lastUpdatedLabel: "Yesterday • 5:13 PM",
    intakeType: "Maintenance",
    priority: "Normal",
    assignedTo: "Ethan Rivera",
    notes: "Routine maintenance + battery health evaluation."
  },
  {
    referenceNumber: "FD-CHARLIE-1057",
    contact: { phone: "+1 (555) 010-8844" },
    drone: { brand: "Skydio", model: "2+", serialNumber: "SKD-2P5H-3308" },
    currentStageIndex: 7,
    lastUpdatedLabel: "2 days ago • 1:06 PM",
    intakeType: "Support",
    priority: "Low",
    assignedTo: "Priya Nair",
    notes: "Firmware question resolved; device marked completed."
  }
];

