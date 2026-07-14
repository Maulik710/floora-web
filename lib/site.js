// Static navigation + WhatsApp link helper. Brand/contact info (name, phone,
// email, address, hours, social) is CMS content — see getSiteSettings in lib/cms.js.

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const whatsappLink = (
  message = "Hello Floora, I'd like to know more about your surfaces.",
  waNumber
) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
