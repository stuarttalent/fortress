export const REPAIR_STAGES = [
  "Query received",
  "Awaiting inspection",
  "Under diagnosis",
  "Repair in progress",
  "Awaiting parts",
  "Testing and quality check",
  "Ready for collection",
  "Completed"
] as const;

export type RepairStage = (typeof REPAIR_STAGES)[number];

export type RepairRecord = {
  referenceNumber: string;
  contact: {
    email?: string;
    phone?: string;
  };
  drone: {
    brand: string;
    model: string;
    serialNumber: string;
  };
  currentStageIndex: number; // inclusive
  lastUpdatedLabel: string;
};

// Dummy data for previewing the tracking UI.
export const DUMMY_REPAIR_RECORDS: RepairRecord[] = [
  {
    referenceNumber: "FD-ALPHA-4821",
    contact: { email: "customer1@example.com", phone: "+1 (555) 010-2233" },
    drone: {
      brand: "DJI",
      model: "Mini 3 Pro",
      serialNumber: "SN-3P8K-1204"
    },
    currentStageIndex: 3,
    lastUpdatedLabel: "Today • 10:24 AM"
  },
  {
    referenceNumber: "FD-BRAVO-7396",
    contact: { email: "pilot2@example.com" },
    drone: {
      brand: "Autel",
      model: "EVO Lite+",
      serialNumber: "EVL-88A1-5402"
    },
    currentStageIndex: 5,
    lastUpdatedLabel: "Yesterday • 5:13 PM"
  },
  {
    referenceNumber: "FD-CHARLIE-1057",
    contact: { phone: "+1 (555) 010-8844" },
    drone: {
      brand: "Skydio",
      model: "2+",
      serialNumber: "SKD-2P5H-3308"
    },
    currentStageIndex: 7,
    lastUpdatedLabel: "2 days ago • 1:06 PM"
  }
];

