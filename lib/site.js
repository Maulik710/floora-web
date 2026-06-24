// Central brand + contact configuration. Update these once and they flow
// through the header, footer, contact page and all click-to-call / chat links.

export const site = {
  name: "Floora",
  tagline: "Surfaces for a Considered Life",
  description:
    "Floora crafts premium SPC, WPC, laminate, vinyl flooring and porcelain tiles for architects, designers and homeowners who value enduring beauty.",
  phoneDisplay: "+91 98250 00000",
  phone: "+919825000000",
  whatsapp: "919825000000",
  email: "hello@floora.com",
  addressLines: ["Floora Experience Centre", "Survey 142, Ceramic Zone Road", "Morbi, Gujarat 363642, India"],
  addressShort: "Morbi, Gujarat — India",
  mapQuery: "Morbi, Gujarat, India",
  hours: [
    { day: "Monday – Friday", time: "9:30 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Pinterest", href: "https://pinterest.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Houzz", href: "https://houzz.com" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const whatsappLink = (message = "Hello Floora, I'd like to know more about your surfaces.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
