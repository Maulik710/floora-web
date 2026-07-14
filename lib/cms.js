// Thin fetch + transform layer over the Floora Strapi CMS (floora-admin).
// Every getter returns `null` (or `null` entries filtered out) on any
// failure — network error, CMS down, empty collection — so callers can
// fall back to the static sample data in lib/products.js / lib/site.js
// without this module needing to know about that fallback itself.

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

async function strapiFetch(path) {
  try {
    const res = await fetch(`${STRAPI_URL}/api${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch (err) {
    console.error(`[cms] Failed to fetch ${path}:`, err.message);
    return null;
  }
}

function mediaUrl(media) {
  if (!media?.url) return null;
  return media.url.startsWith("http") ? media.url : `${STRAPI_URL}${media.url}`;
}

function transformCategory(entry) {
  return {
    slug: entry.slug,
    name: entry.name,
    short: entry.short,
    blurb: entry.blurb,
    image: mediaUrl(entry.image),
  };
}

function transformProduct(entry) {
  return {
    slug: entry.slug,
    name: entry.name,
    millRef: entry.millRef,
    sku: entry.sku,
    category: entry.category?.slug ?? "",
    material: entry.material,
    style: entry.style,
    color: entry.color ?? "",
    colorHex: entry.colorHex ?? "#CCCCCC",
    size: entry.size,
    format: entry.format,
    rooms: (entry.rooms ?? []).map((r) => r.name),
    price: entry.price,
    tag: entry.tag ?? "",
    note: entry.note ?? null,
    images: (entry.images ?? []).map(mediaUrl).filter(Boolean),
    specs: Object.fromEntries((entry.specs ?? []).map((s) => [s.label, s.value])),
  };
}

function transformGalleryItem(entry) {
  return {
    id: entry.id,
    room: entry.room?.name ?? "",
    caption: entry.caption,
    image: mediaUrl(entry.image),
  };
}

function transformTestimonial(entry) {
  return {
    quote: entry.quote,
    name: entry.name,
    role: entry.role,
    rating: entry.rating ?? 5,
  };
}

function transformSiteSettings(entry) {
  return {
    name: entry.name,
    tagline: entry.tagline,
    description: entry.description,
    phoneDisplay: entry.phoneDisplay,
    phone: entry.phone,
    whatsapp: entry.whatsapp,
    email: entry.email,
    addressLines: (entry.address ?? "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean),
    addressShort: entry.addressShort,
    mapQuery: entry.mapQuery,
    hours: (entry.hours ?? []).map((h) => ({ day: h.day, time: h.time })),
    social: (entry.social ?? []).map((s) => ({ name: s.platform, href: s.url })),
  };
}

function transformHomePage(entry) {
  return {
    heroEyebrow: entry.heroEyebrow,
    heroHeading: entry.heroHeading,
    heroSubheading: entry.heroSubheading,
    heroImage: mediaUrl(entry.heroImage),
    stats: (entry.stats ?? []).map((s) => ({ value: s.value, label: s.label })),
    whyChoose: (entry.whyChoose ?? []).map((w) => ({ icon: w.icon, title: w.title, text: w.text })),
    certifications: (entry.certifications ?? []).map((c) => c.name),
    inspirationHeading: entry.inspirationHeading,
    inspirationDescription: entry.inspirationDescription,
    inspirationImage: mediaUrl(entry.inspirationImage),
    inspirationBullets: (entry.inspirationBullets ?? []).map((b) => b.text),
    ctaEyebrow: entry.ctaEyebrow,
    ctaHeading: entry.ctaHeading,
    ctaDescription: entry.ctaDescription,
    ctaImage: mediaUrl(entry.ctaImage),
  };
}

function transformAboutPage(entry) {
  return {
    heroEyebrow: entry.heroEyebrow,
    heroHeading: entry.heroHeading,
    heroDescription: entry.heroDescription,
    heroImage: mediaUrl(entry.heroImage),
    missionQuote: entry.missionQuote,
    manufacturingImages: (entry.manufacturingImages ?? []).map((m) => ({
      image: mediaUrl(m.image),
      label: m.label,
    })),
    values: (entry.values ?? []).map((v) => ({ icon: v.icon, title: v.title, text: v.text })),
    milestones: (entry.milestones ?? []).map((m) => ({ year: m.year, title: m.title, text: m.text })),
    stats: (entry.stats ?? []).map((s) => ({ value: s.value, label: s.label })),
  };
}

const PRODUCT_POPULATE =
  "populate[category]=true&populate[rooms]=true&populate[images]=true&populate[specs]=true";

const HOME_PAGE_POPULATE =
  "populate[heroImage]=true&populate[stats]=true&populate[whyChoose]=true&populate[certifications]=true&populate[inspirationImage]=true&populate[inspirationBullets]=true&populate[ctaImage]=true";

const ABOUT_PAGE_POPULATE =
  "populate[heroImage]=true&populate[manufacturingImages][populate][image]=true&populate[values]=true&populate[milestones]=true&populate[stats]=true";

export async function getCategories() {
  const data = await strapiFetch("/categories?populate=image&sort=name:asc&pagination[pageSize]=100");
  return data?.map(transformCategory) ?? null;
}

export async function getRooms() {
  const data = await strapiFetch("/rooms?sort=name:asc&pagination[pageSize]=100");
  return data?.map((r) => r.name) ?? null;
}

export async function getProducts() {
  const data = await strapiFetch(
    `/products?${PRODUCT_POPULATE}&pagination[pageSize]=100&sort=name:asc`
  );
  return data?.map(transformProduct) ?? null;
}

export async function getProductBySlug(slug) {
  const data = await strapiFetch(
    `/products?filters[slug][$eq]=${encodeURIComponent(slug)}&${PRODUCT_POPULATE}`
  );
  return data?.[0] ? transformProduct(data[0]) : null;
}

export async function getGalleryItems() {
  const data = await strapiFetch(
    "/gallery-items?populate[image]=true&populate[room]=true&pagination[pageSize]=100&sort=id:asc"
  );
  return data?.map(transformGalleryItem) ?? null;
}

export async function getTestimonials() {
  const data = await strapiFetch("/testimonials?pagination[pageSize]=50&sort=id:asc");
  return data?.map(transformTestimonial) ?? null;
}

export async function getSiteSettings() {
  const data = await strapiFetch("/site-setting?populate[hours]=true&populate[social]=true");
  return data ? transformSiteSettings(data) : null;
}

export async function getHomePage() {
  const data = await strapiFetch(`/home-page?${HOME_PAGE_POPULATE}`);
  return data ? transformHomePage(data) : null;
}

export async function getAboutPage() {
  const data = await strapiFetch(`/about-page?${ABOUT_PAGE_POPULATE}`);
  return data ? transformAboutPage(data) : null;
}

// Mirrors lib/products.js's getRelated/getColorVariants but operates over
// any product list, so a CMS-sourced catalogue gets correct "related" and
// "colour variant" results too instead of being computed off static data.
export function getRelatedFrom(list, product, count = 3) {
  return list
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(list.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, count);
}

export function getColorVariantsFrom(list, product, count = 6) {
  const sameStyle = list.filter(
    (p) => p.slug !== product.slug && p.category === product.category && p.style === product.style
  );
  const sameCategory = list.filter(
    (p) => p.slug !== product.slug && p.category === product.category && p.style !== product.style
  );
  const others = list.filter((p) => p.slug !== product.slug && p.category !== product.category);

  const seenColors = new Set([product.color]);
  const siblings = [];
  for (const p of [...sameStyle, ...sameCategory, ...others]) {
    if (siblings.length >= count - 1) break;
    if (seenColors.has(p.color)) continue;
    seenColors.add(p.color);
    siblings.push(p);
  }

  return [product, ...siblings];
}
