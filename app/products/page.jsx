import { Suspense } from "react";
import CatalogClient from "@/components/CatalogClient";

export const metadata = {
  title: "Products & Catalog",
  description:
    "Filter Floora's full range of SPC, WPC, laminate, vinyl and porcelain surfaces by material, finish, colour, style, size and room.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-24 text-stone">Loading catalog…</div>}>
      <CatalogClient />
    </Suspense>
  );
}
