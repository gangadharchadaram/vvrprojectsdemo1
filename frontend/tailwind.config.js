/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",                // ✅ ADD THIS (VERY IMPORTANT)
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ already correct
  ],
  theme: {
    extend: {
      colors: {
        border: "#334155",
        input: "#334155",
        ring: "#FACC15",
        background: "#0F172A",
        foreground: "#F8FAFC",

        primary: {
          DEFAULT: "#FACC15",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#94A3B8",
          foreground: "#0F172A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F8FAFC",
        },
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#F97316",
          foreground: "#F8FAFC",
        },
        popover: {
          DEFAULT: "#1E293B",
          foreground: "#F8FAFC",
        },
        card: {
          DEFAULT: "#1E293B",
          foreground: "#F8FAFC",
        },
      },

      fontFamily: {
        heading: ['"Barlow Condensed"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
        technical: ['"JetBrains Mono"', "monospace"],
      },

      borderRadius: {
        lg: "0",
        md: "0",
        sm: "0",
      },

      backgroundImage: {
        "grid-pattern":
          "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23334155\" fill-opacity=\"0.15\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },

  plugins: [],
};