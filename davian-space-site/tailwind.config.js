/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        night: {
          950: "#030712",
          900: "#0a0f1e",
          800: "#111827",
          700: "#1e293b"
        },
        glow: {
          50: "#ecfeff",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490"
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.1)",
        glowStrong: "0 0 30px rgba(6, 182, 212, 0.6), 0 0 80px rgba(139, 92, 246, 0.15)",
        glass: "0 25px 60px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.1)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 20% 0%, rgba(6, 182, 212, 0.2), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(6, 182, 212, 0.08), transparent 60%), linear-gradient(180deg, #030712, #0a0f1e)"
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "12.5%": { transform: "translate(20px, -20px) rotate(5deg)" },
          "25%": { transform: "translate(25px, 15px) rotate(-4deg)" },
          "37.5%": { transform: "translate(0, 25px) rotate(3deg)" },
          "50%": { transform: "translate(-25px, 20px) rotate(-5deg)" },
          "62.5%": { transform: "translate(-30px, -15px) rotate(4deg)" },
          "75%": { transform: "translate(-20px, -25px) rotate(-3deg)" },
          "87.5%": { transform: "translate(15px, -30px) rotate(2deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" }
        },
        logoGlow: {
          "0%, 100%": { 
            transform: "translateY(0px) scale(1)"
          },
          "50%": { 
            transform: "translateY(-15px) scale(1.1)"
          }
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "10%": { transform: "translateY(-4px) rotate(-3deg)" },
          "30%": { transform: "translateY(-2px) rotate(3deg)" },
          "50%": { transform: "translateY(-6px) rotate(-2deg)" },
          "70%": { transform: "translateY(-2px) rotate(2deg)" },
          "90%": { transform: "translateY(-4px) rotate(-1deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        logoGlow: "logoGlow 3s ease-in-out infinite",
        bounce: "bounce 0.6s ease-in-out",
        shimmer: "shimmer 2.5s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      },
      fontFamily: {
        display: [
          "Space Grotesk",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        hero: [
          "Orbitron",
          "Courier New",
          "monospace"
        ],
        body: [
          "Sora",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};
