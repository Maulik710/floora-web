import { Suspense } from "react";
import CatalogClient from "@/components/CatalogClient";
import { getProducts, getCategories, getColors, getRooms } from "@/lib/cms";

export const metadata = {
  title: "Products & Catalog",
  description:
    "Filter Floora's full range of SPC, WPC, laminate, vinyl and porcelain surfaces by material, finish, colour, style, size and room.",
};

export default async function ProductsPage() {
  const [products, categories, colorsList, rooms] = await Promise.all([
    getProducts(),
    getCategories(),
    getColors(),
    getRooms(),
  ]);

  return (
    <Suspense fallback={<div className="container-luxe py-24 text-stone">Loading catalog…</div>}>
      <CatalogClient products={products} categories={categories} colorsList={colorsList} rooms={rooms} />
    </Suspense>
  );
}
