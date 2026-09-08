import { heroui } from "@heroui/react";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // HeroUI 2.8 ships .mjs chunks and npm may nest the theme package under
    // @heroui/react/node_modules — cover both with a zero-or-more-dirs glob.
    "./node_modules/@heroui/**/theme/dist/**/*.{js,mjs}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        body: "var(--color-body)",
        "body-strong": "var(--color-body-strong)",
        muted: "var(--color-muted)",
        "muted-soft": "var(--color-muted-soft)",
        hairline: "var(--color-hairline)",
        "hairline-soft": "var(--color-hairline-soft)",
        canvas: "var(--color-canvas)",
        "surface-soft": "var(--color-surface-soft)",
        "surface-card": "var(--color-surface-card)",
        "surface-strong": "var(--color-surface-strong)",
        "surface-dark": "var(--color-surface-dark)",
        "surface-dark-elevated": "var(--color-surface-dark-elevated)",
        "on-primary": "var(--color-on-primary)",
        "on-dark": "var(--color-on-dark)",
        "on-dark-soft": "var(--color-on-dark-soft)",
        "semantic-up": "var(--color-semantic-up)",
        "semantic-down": "var(--color-semantic-down)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-sans)"], // Uses Inter, just like sans
      },
      borderRadius: {
        xl: "24px",
      },
      spacing: {
        section: "96px",
      }
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0052ff",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#eef0f3",
              foreground: "#0a0b0d",
            },
            focus: "#0052ff",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#0052ff",
              foreground: "#ffffff",
            },
            background: "#0a0b0d",
            content1: "#16181c",
          }
        }
      },
    }),
  ],
};
