/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        arc: {
          /* ── Core palette ─────────────────── */
          sand: "#E8DCC8", // main light bg
          "sand-dark": "#D4C9B0", // slightly darker sand
          "sand-light": "#F2EBD9", // lighter sand for cards
          black: "#0A0A0A", // rich black
          "black-soft": "#141414", // soft black for sections
          charcoal: "#1E1E1E", // card on dark bg
          /* ── Accent gold ──────────────────── */
          gold: "#EBAD21", // primary CTA / highlight
          "gold-dark": "#C9931A", // gold hover
          "gold-light": "#F5C842", // gold lighter tint
          /* ── Stripe colors (logo accent) ──── */
          teal: "#00A699",
          green: "#79B433",
          red: "#E33E33",
          /* ── Text ─────────────────────────── */
          ink: "#1A1A1A", // heading on light bg
          muted: "#6B6456", // body text on light bg
          faint: "#9E917E", // placeholder / subtle text
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        arc: "0 4px 16px rgba(10,10,10,0.12)",
        "arc-hover": "0 12px 36px rgba(10,10,10,0.22)",
        gold: "0 0 24px rgba(235,173,33,0.45)",
      },
      backgroundImage: {
        "sand-gradient":
          "linear-gradient(135deg, #F2EBD9 0%, #E8DCC8 60%, #D4C9B0 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #0A0A0A 0%, #1A1206 60%, #0A0A0A 100%)",
      },
    },
  },
  plugins: [],
};
