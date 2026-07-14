import { Suspense } from "react";
import CatalogClient from "@/components/CatalogClient";
import { getProducts, getCategories, getRooms } from "@/lib/cms";

export const metadata = {
  title: "Products & Catalog",
  description:
    "Filter Floora's full range of SPC and LVT surfaces by material, colour, style, size and room.",
};

export default async function ProductsPage() {
  const [products, categories, rooms] = await Promise.all([
    getProducts(),
    getCategories(),
    getRooms(),
  ]);
  // Colour swatches are a property of the products themselves (each carries
  // its own colorHex), not a separate CMS collection — derive the unique list.
  const colorsList = Array.from(
    new Map((products ?? []).map((p) => [p.color, { name: p.color, hex: p.colorHex }])).values()
  );

  return (
    <Suspense fallback={<div className="container-luxe py-24 text-stone">Loading catalog…</div>}>
      <CatalogClient
        products={products ?? []}
        categories={categories ?? []}
        colorsList={colorsList}
        rooms={rooms ?? []}
      />
    </Suspense>
  );
}
