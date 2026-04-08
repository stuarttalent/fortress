export type ProductCategory =
  | "Consumer"
  | "Professional"
  | "Enterprise"
  | "Agriculture"
  | "Accessories";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  startingPrice: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
  specs: { label: string; value: string }[];
};

export const PRODUCT_CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: "Consumer", label: "Consumer" },
  { id: "Professional", label: "Professional" },
  { id: "Enterprise", label: "Enterprise" },
  { id: "Agriculture", label: "Agriculture" },
  { id: "Accessories", label: "Accessories" }
];

export const DUMMY_PRODUCTS: Product[] = [
  {
    slug: "mini-series",
    name: "Mini Series",
    tagline: "Ultra-light. Ultra capable.",
    category: "Consumer",
    startingPrice: "$499",
    imageSrc:
      "https://images.unsplash.com/photo-1527979809431-8b3b7c4c5f0d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Compact consumer drone on a clean background",
    highlights: ["Lightweight design", "Stabilized video", "Quick setup"],
    specs: [
      { label: "Flight time", value: "Up to 34 min" },
      { label: "Camera", value: "4K video" },
      { label: "Weight", value: "< 250g class" }
    ]
  },
  {
    slug: "air-series",
    name: "Air Series",
    tagline: "Smart performance for creators.",
    category: "Professional",
    startingPrice: "$999",
    imageSrc:
      "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mid-size drone flying outdoors",
    highlights: ["Obstacle sensing", "Fast tracking", "Crisp HDR"],
    specs: [
      { label: "Camera", value: "4K HDR" },
      { label: "Sensors", value: "Multi-directional" },
      { label: "Control", value: "Long-range link" }
    ]
  },
  {
    slug: "mavic-series",
    name: "Mavic Series",
    tagline: "Flagship imaging. Trusted reliability.",
    category: "Professional",
    startingPrice: "$1,999",
    imageSrc:
      "https://images.unsplash.com/photo-1524143986875-3b098d78b363?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Premium camera drone in flight",
    highlights: ["Pro camera system", "Stable in wind", "Advanced tracking"],
    specs: [
      { label: "Camera", value: "Pro imaging" },
      { label: "Stability", value: "Wind optimized" },
      { label: "Modes", value: "Cinematic + Pro" }
    ]
  },
  {
    slug: "fpv-avata",
    name: "Avata / FPV",
    tagline: "Immersive flight. Pure adrenaline.",
    category: "Consumer",
    startingPrice: "$1,299",
    imageSrc:
      "https://images.unsplash.com/photo-1520975867597-0f358a94a1d8?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "FPV style drone with dramatic lighting",
    highlights: ["Agile control", "Cinematic motion", "Stabilized footage"],
    specs: [
      { label: "Experience", value: "Immersive FPV" },
      { label: "Control", value: "Responsive" },
      { label: "Stabilization", value: "Advanced" }
    ]
  },
  {
    slug: "agras",
    name: "Agras",
    tagline: "Precision agriculture at scale.",
    category: "Agriculture",
    startingPrice: "Request quote",
    imageSrc:
      "https://images.unsplash.com/photo-1620912189869-2a0ae2bfc5ce?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Agriculture drone over farmland",
    highlights: ["High efficiency", "Smart planning", "Reliable payload"],
    specs: [
      { label: "Use case", value: "Agriculture" },
      { label: "Planning", value: "Smart routes" },
      { label: "Payload", value: "Enterprise grade" }
    ]
  },
  {
    slug: "enterprise-suite",
    name: "Enterprise Suite",
    tagline: "Inspection-ready. Mission-focused.",
    category: "Enterprise",
    startingPrice: "Request quote",
    imageSrc:
      "https://images.unsplash.com/photo-1504445969282-7feb20f202b8?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Enterprise drone inspection scenario",
    highlights: ["Inspection workflows", "Data-ready", "Fleet reliability"],
    specs: [
      { label: "Use case", value: "Inspection" },
      { label: "Operations", value: "Fleet-ready" },
      { label: "Support", value: "Service plans" }
    ]
  }
];

export function getProductBySlug(slug: string) {
  return DUMMY_PRODUCTS.find((p) => p.slug === slug) ?? null;
}

