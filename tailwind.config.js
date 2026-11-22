/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#100d25",
        "card-bg": "#151030",
        "accent-purple": "#915eff",
        "data-cyan": "#00f2fe",
        "data-blue": "#38bdf8",
        "data-emerald": "#10b981"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1c133a",
        glow: "0 0 25px rgba(145, 94, 255, 0.35)",
        cyanGlow: "0 0 25px rgba(0, 242, 254, 0.35)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.25), rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
}
