// Lightweight inline SVG icon set (24x24 viewBox, stroke-based — Lucide style).
// Using SVG instead of emojis keeps the brand feeling refined and consistent.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Search = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
);
export const Menu = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Plus = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = (p) => (
  <svg {...base} {...p}><path d="M5 12h14" /></svg>
);
export const Check = (p) => (
  <svg {...base} {...p}><path d="M5 12.5 10 17 19 7" /></svg>
);
export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ChevronDown = (p) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const ChevronUp = (p) => (
  <svg {...base} {...p}><path d="m6 15 6-6 6 6" /></svg>
);
export const ChevronLeft = (p) => (
  <svg {...base} {...p}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = (p) => (
  <svg {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const Bag = (p) => (
  <svg {...base} {...p}><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const Phone = (p) => (
  <svg {...base} {...p}><path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z" /></svg>
);
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const MapPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const Clock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>
);
export const Download = (p) => (
  <svg {...base} {...p}><path d="M12 4v10m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></svg>
);
export const Quote = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm11 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v1a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" /></svg>
);
export const Star = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8-4.3-4.1 5.9-.9L12 3Z" /></svg>
);
export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Layers = (p) => (
  <svg {...base} {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>
);
export const Palette = (p) => (
  <svg {...base} {...p}><path d="M12 3a9 9 0 1 0 0 18 2 2 0 0 0 2-2c0-1-.7-1.5-.7-2.3 0-.7.6-1.2 1.3-1.2H16a5 5 0 0 0 5-5c0-4.2-4-7.5-9-7.5Z" /><circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const Headset = (p) => (
  <svg {...base} {...p}><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a4 4 0 0 1-4 4h-2" /></svg>
);
export const Droplet = (p) => (
  <svg {...base} {...p}><path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z" /></svg>
);
export const Ruler = (p) => (
  <svg {...base} {...p}><rect x="3" y="8" width="18" height="8" rx="1.5" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" /></svg>
);
export const Handshake = (p) => (
  <svg {...base} {...p}><path d="M2 13l5-4 3 3h4l3-3 5 4" /><path d="M7 12v4a2 2 0 0 0 2 2h1" /><path d="M17 12v4a2 2 0 0 1-2 2h-1" /><path d="M10 14h4" /></svg>
);
export const Calendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const Wrench = (p) => (
  <svg {...base} {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" /></svg>
);
export const Smile = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01M15 9h.01" /></svg>
);
export const Award = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="5" /><path d="m8.5 12.5-1.5 6 5-2.5 5 2.5-1.5-6" /></svg>
);
export const Leaf = (p) => (
  <svg {...base} {...p}><path d="M12 21c-4-1-7-4-7-9 0-4 3-7 7-8 4 1 7 4 7 8 0 5-3 8-7 9Z" /><path d="M12 21V9" /></svg>
);
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 0 0 1.523 5.26l-.999 3.648 3.965-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
);
export const Instagram = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
);
export const Pinterest = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2.01.03-2.88.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.32-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.26-.59-2.04-2.42-2.04-3.9 0-3.17 2.3-6.08 6.64-6.08 3.48 0 6.19 2.48 6.19 5.8 0 3.46-2.18 6.25-5.21 6.25-1.02 0-1.97-.53-2.3-1.16l-.62 2.39c-.23.86-.84 1.95-1.25 2.61.94.29 1.93.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>
);
export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></svg>
);
export const Houzz = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}><path d="M16 24v-8H8v8H2V0h6v9.3L16 7v9h6v8h-6z" /></svg>
);
