/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral luxury palette
        canvas: "#FAF8F5", // warm white background
        cream: "#F3EEE6", // soft section background
        sand: "#E7DECF", // beige cards
        taupe: "#B8A892", // muted warm grey-brown
        clay: "#B08D57", // refined accent (muted gold/clay)
        "clay-dark": "#937241",
        charcoal: "#1C1B19", // near-black text / dark sections
        ink: "#33312D", // softened body text
        stone: "#6E6A62", // muted text
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        roman: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        4.5: "1.125rem",
      },
      letterSpacing: {
        luxe: "0.25em",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(28,27,25,0.12)",
        "soft-lg": "0 24px 60px -20px rgba(28,27,25,0.18)",
        card: "0 2px 24px -8px rgba(28,27,25,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1s ease both",
        "slow-zoom": "slow-zoom 16s ease-out both",
        "slide-in": "slide-in 0.4s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
