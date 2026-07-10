// Product catalogue + filter taxonomy for Floora.
// Images are sourced from Unsplash (interior / architecture photography).

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  {
    slug: "spc",
    name: "SPC Flooring",
    short: "SPC",
    blurb: "Stone Polymer Composite — rigid, 100% waterproof, dimensionally stable.",
    image: u("1618221195710-dd6b41faaea6"),
  },
  {
    slug: "wpc",
    name: "WPC Flooring",
    short: "WPC",
    blurb: "Wood Polymer Composite — warm underfoot with a quiet, cushioned step.",
    image: u("1615529182904-14819c35db37"),
  },
  {
    slug: "laminate",
    name: "Laminate",
    short: "Laminate",
    blurb: "High-definition wood replicas with a hard-wearing AC-rated surface.",
    image: u("1597072689227-8882273e8f6a"),
  },
  {
    slug: "vinyl",
    name: "Luxury Vinyl",
    short: "Vinyl",
    blurb: "Flexible luxury vinyl planks and tiles with lifelike texture.",
    image: u("1567016432779-094069958ea5"),
  },
  {
    slug: "porcelain",
    name: "Porcelain Tile",
    short: "Porcelain",
    blurb: "Full-body porcelain in marble, stone and concrete expressions.",
    image: u("1600566753086-00f18fb6b3ea"),
  },
];

// Filter taxonomies
export const finishes = ["Matte", "Glossy", "Textured", "Satin"];
export const styles = ["Wood", "Stone", "Marble", "Concrete", "Plain"];
export const colorsList = [
  { name: "Warm White", hex: "#F2ECE2" },
  { name: "Sand", hex: "#D8C5A6" },
  { name: "Oak", hex: "#B98E5E" },
  { name: "Walnut", hex: "#6E4A2E" },
  { name: "Greige", hex: "#A99C8A" },
  { name: "Charcoal", hex: "#2C2B28" },
  { name: "Stone Grey", hex: "#9A958C" },
  { name: "Marble White", hex: "#ECEAE6" },
];
export const sizes = [
  '7" × 48" Plank',
  '9" × 60" Plank',
  "600 × 600 mm",
  "800 × 800 mm",
  "600 × 1200 mm",
];
export const rooms = ["Living Room", "Bathroom", "Kitchen", "Bedroom", "Commercial", "Outdoor"];

export const products = [
  {
    slug: "nordic-oak-spc",
    name: "Nordic Oak",
    category: "spc",
    finish: "Matte",
    style: "Wood",
    color: "Oak",
    colorHex: "#B98E5E",
    size: '7" × 48" Plank',
    rooms: ["Living Room", "Bedroom", "Kitchen"],
    price: "On request",
    tag: "Bestseller",
    images: [u("1618221195710-dd6b41faaea6"), u("1600585154340-be6161a56a0c"), u("1618219740975-d40978bb7378")],
    specs: {
      Thickness: "5.5 mm + 1.5 mm IXPE pad",
      "Plank Size": '7" × 48" (178 × 1220 mm)',
      Finish: "Matte, embossed-in-register",
      "Wear Layer": "0.5 mm (20 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential & light commercial",
      Installation: "Click-lock, floating",
      Warranty: "25-year residential",
    },
  },
  {
    slug: "smoked-walnut-spc",
    name: "Smoked Walnut",
    category: "spc",
    finish: "Textured",
    style: "Wood",
    color: "Walnut",
    colorHex: "#6E4A2E",
    size: '9" × 60" Plank',
    rooms: ["Living Room", "Commercial"],
    price: "On request",
    tag: "New",
    images: [u("1615529182904-14819c35db37"), u("1600566752355-35792bedcfea"), u("1600121848594-d8644e57abab")],
    specs: {
      Thickness: "6.0 mm + 1.5 mm IXPE pad",
      "Plank Size": '9" × 60" (228 × 1520 mm)',
      Finish: "Deep-textured, hand-scraped look",
      "Wear Layer": "0.55 mm (22 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential & commercial",
      Installation: "Click-lock, floating",
      Warranty: "Lifetime residential",
    },
  },
  {
    slug: "linen-wpc",
    name: "Linen Greige",
    category: "wpc",
    finish: "Satin",
    style: "Plain",
    color: "Greige",
    colorHex: "#A99C8A",
    size: '7" × 48" Plank',
    rooms: ["Bedroom", "Living Room"],
    price: "On request",
    tag: "",
    images: [u("1567016432779-094069958ea5"), u("1616486338812-3dadae4b4ace"), u("1616594039964-ae9021a400a0")],
    specs: {
      Thickness: "8.0 mm rigid core",
      "Plank Size": '7" × 48" (178 × 1220 mm)',
      Finish: "Soft satin, low-sheen",
      "Wear Layer": "0.5 mm (20 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential",
      Installation: "Click-lock, floating",
      Warranty: "25-year residential",
    },
  },
  {
    slug: "highland-wpc",
    name: "Highland Ash",
    category: "wpc",
    finish: "Textured",
    style: "Wood",
    color: "Sand",
    colorHex: "#D8C5A6",
    size: '9" × 60" Plank',
    rooms: ["Living Room", "Kitchen", "Commercial"],
    price: "On request",
    tag: "",
    images: [u("1618219740975-d40978bb7378"), u("1600210492486-724fe5c67fb0"), u("1600607687939-ce8a6c25118c")],
    specs: {
      Thickness: "8.0 mm rigid core + cork",
      "Plank Size": '9" × 60" (228 × 1520 mm)',
      Finish: "Textured wood-grain",
      "Wear Layer": "0.55 mm (22 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential & commercial",
      Installation: "Click-lock, floating",
      Warranty: "Lifetime residential",
    },
  },
  {
    slug: "manor-laminate",
    name: "Manor Oak",
    category: "laminate",
    finish: "Matte",
    style: "Wood",
    color: "Oak",
    colorHex: "#B98E5E",
    size: '7" × 48" Plank',
    rooms: ["Living Room", "Bedroom"],
    price: "On request",
    tag: "Bestseller",
    images: [u("1597072689227-8882273e8f6a"), u("1586023492125-27b2c045efd7"), u("1493809842364-78817add7ffb")],
    specs: {
      Thickness: "12 mm HDF core",
      "Plank Size": '7" × 48" (178 × 1220 mm)',
      Finish: "Matte synchronised emboss",
      "Wear Layer": "AC4 — commercial rated",
      "Water Resistance": "Water-resistant (24h swell-guard)",
      "Application": "Residential & light commercial",
      Installation: "Click-lock, floating",
      Warranty: "20-year residential",
    },
  },
  {
    slug: "noir-laminate",
    name: "Noir Plank",
    category: "laminate",
    finish: "Glossy",
    style: "Wood",
    color: "Charcoal",
    colorHex: "#2C2B28",
    size: '9" × 60" Plank',
    rooms: ["Living Room", "Commercial"],
    price: "On request",
    tag: "",
    images: [u("1600566753086-00f18fb6b3ea"), u("1615875605825-5eb9bb5d52ac"), u("1600585154340-be6161a56a0c")],
    specs: {
      Thickness: "12 mm HDF core",
      "Plank Size": '9" × 60" (228 × 1520 mm)',
      Finish: "High-gloss piano finish",
      "Wear Layer": "AC5 — heavy commercial",
      "Water Resistance": "Water-resistant",
      "Application": "Commercial & residential",
      Installation: "Click-lock, floating",
      Warranty: "15-year commercial",
    },
  },
  {
    slug: "coastal-vinyl",
    name: "Coastal Bleached",
    category: "vinyl",
    finish: "Textured",
    style: "Wood",
    color: "Warm White",
    colorHex: "#F2ECE2",
    size: '7" × 48" Plank',
    rooms: ["Bathroom", "Kitchen", "Bedroom"],
    price: "On request",
    tag: "New",
    images: [u("1616486338812-3dadae4b4ace"), u("1600210492493-0946911123ea"), u("1567016432779-094069958ea5")],
    specs: {
      Thickness: "5.0 mm flexible LVT",
      "Plank Size": '7" × 48" (178 × 1220 mm)',
      Finish: "Textured matte",
      "Wear Layer": "0.5 mm (20 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential wet areas",
      Installation: "Glue-down / loose-lay",
      Warranty: "20-year residential",
    },
  },
  {
    slug: "atelier-vinyl",
    name: "Atelier Concrete",
    category: "vinyl",
    finish: "Matte",
    style: "Concrete",
    color: "Stone Grey",
    colorHex: "#9A958C",
    size: "600 × 600 mm",
    rooms: ["Commercial", "Kitchen"],
    price: "On request",
    tag: "",
    images: [u("1600566752355-35792bedcfea"), u("1600121848594-d8644e57abab"), u("1615529182904-14819c35db37")],
    specs: {
      Thickness: "5.0 mm rigid LVT tile",
      "Tile Size": "600 × 600 mm",
      Finish: "Matte concrete texture",
      "Wear Layer": "0.55 mm (22 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Commercial & residential",
      Installation: "Click-lock, floating",
      Warranty: "Lifetime residential",
    },
  },
  {
    slug: "carrara-porcelain",
    name: "Carrara Statuario",
    category: "porcelain",
    finish: "Glossy",
    style: "Marble",
    color: "Marble White",
    colorHex: "#ECEAE6",
    size: "600 × 1200 mm",
    rooms: ["Living Room", "Bathroom", "Commercial"],
    price: "On request",
    tag: "Bestseller",
    images: [u("1600566753086-00f18fb6b3ea"), u("1615875605825-5eb9bb5d52ac"), u("1600585154340-be6161a56a0c")],
    specs: {
      Thickness: "9 mm full-body porcelain",
      "Tile Size": "600 × 1200 mm",
      Finish: "Polished glossy, book-matched",
      "Wear Layer": "Through-body, PEI IV",
      "Water Resistance": "Impervious (< 0.5% absorption)",
      "Application": "Floor & wall, indoor",
      Installation: "Thin-set / adhesive",
      Warranty: "Lifetime structural",
    },
  },
  {
    slug: "travertine-porcelain",
    name: "Travertine Sand",
    category: "porcelain",
    finish: "Matte",
    style: "Stone",
    color: "Sand",
    colorHex: "#D8C5A6",
    size: "800 × 800 mm",
    rooms: ["Bathroom", "Outdoor", "Commercial"],
    price: "On request",
    tag: "",
    images: [u("1600210492486-724fe5c67fb0"), u("1600607687939-ce8a6c25118c"), u("1600210492493-0946911123ea")],
    specs: {
      Thickness: "10 mm full-body porcelain",
      "Tile Size": "800 × 800 mm",
      Finish: "Matte, natural stone texture",
      "Wear Layer": "Through-body, PEI IV, R11 slip",
      "Water Resistance": "Impervious (< 0.5% absorption)",
      "Application": "Floor & wall, indoor / outdoor",
      Installation: "Thin-set / adhesive",
      Warranty: "Lifetime structural",
    },
  },
  {
    slug: "urban-porcelain",
    name: "Urban Cement",
    category: "porcelain",
    finish: "Matte",
    style: "Concrete",
    color: "Charcoal",
    colorHex: "#2C2B28",
    size: "600 × 1200 mm",
    rooms: ["Commercial", "Living Room", "Kitchen"],
    price: "On request",
    tag: "New",
    images: [u("1615875605825-5eb9bb5d52ac"), u("1600566753086-00f18fb6b3ea"), u("1600121848594-d8644e57abab")],
    specs: {
      Thickness: "9 mm full-body porcelain",
      "Tile Size": "600 × 1200 mm",
      Finish: "Matte concrete, soft-grip",
      "Wear Layer": "Through-body, PEI V, R10 slip",
      "Water Resistance": "Impervious (< 0.5% absorption)",
      "Application": "Floor & wall, heavy traffic",
      Installation: "Thin-set / adhesive",
      Warranty: "Lifetime structural",
    },
  },
  {
    slug: "alabaster-spc",
    name: "Alabaster Stone",
    category: "spc",
    finish: "Satin",
    style: "Stone",
    color: "Warm White",
    colorHex: "#F2ECE2",
    size: "600 × 600 mm",
    rooms: ["Bathroom", "Kitchen", "Living Room"],
    price: "On request",
    tag: "",
    images: [u("1616594039964-ae9021a400a0"), u("1616486338812-3dadae4b4ace"), u("1567016432779-094069958ea5")],
    specs: {
      Thickness: "5.5 mm + 1.5 mm IXPE pad",
      "Tile Size": "600 × 600 mm",
      Finish: "Satin stone texture",
      "Wear Layer": "0.5 mm (20 mil)",
      "Water Resistance": "100% waterproof",
      "Application": "Residential & light commercial",
      Installation: "Click-lock, floating",
      Warranty: "25-year residential",
    },
  },
];

export const getCategory = (slug) => categories.find((c) => c.slug === slug);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getRelated = (product, count = 3) =>
  products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, count);

// Real colour variants for a product — other catalogue items that share the same
// look-and-feel (category + style first, then just category) but come in a
// different colourway. Each result is an actual product with its own photos and
// page, so picking a swatch navigates to that product — same as Amazon's variants.
export const getColorVariants = (product, count = 6) => {
  const sameStyle = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category && p.style === product.style
  );
  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category && p.style !== product.style
  );
  const others = products.filter((p) => p.slug !== product.slug && p.category !== product.category);

  const seenColors = new Set([product.color]);
  const siblings = [];
  for (const p of [...sameStyle, ...sameCategory, ...others]) {
    if (siblings.length >= count - 1) break;
    if (seenColors.has(p.color)) continue;
    seenColors.add(p.color);
    siblings.push(p);
  }

  return [product, ...siblings];
};

export const categoryName = (slug) => getCategory(slug)?.short || slug;
