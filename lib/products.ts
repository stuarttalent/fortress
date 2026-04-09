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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703804/0c4fe6f0b2b557871270255819330cd0_cxanol.png,
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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703804/80d4349a909e93993916eb02371d408e_hlu7dw.jpg",
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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703804/xgxgktgMdJsDg9V9JeB88o_lnamfs.jpg",
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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703805/FPV-Drones-1_glqj7p.png",
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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703803/content_MG-1S_b_gqrxtf.jpg",
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
      "https://res.cloudinary.com/dugcmzmw4/image/upload/v1775703804/header_DJI_Mavic_3_Enterprise_Series_-_New_Portable_Commercial_Drones_jztnzf.webp",
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

