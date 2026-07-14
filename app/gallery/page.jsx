import GalleryClient from "@/components/GalleryClient";
import { getGalleryItems } from "@/lib/cms";

export const metadata = {
  title: "Gallery & Inspiration",
  description:
    "Browse completed Floora projects and room installations — living rooms, bathrooms, kitchens and commercial spaces.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();
  return <GalleryClient items={items} />;
}
