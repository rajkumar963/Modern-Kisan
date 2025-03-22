
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        kisan: {
          50: '#f2fcf5',
          100: '#e6f7eb',
          200: '#cdf0d7',
          300: '#a3e2b7',
          400: '#73ce90',
          500: '#4ab46f',
          600: '#36965a',
          700: '#2c7347',
          800: '#275c3c',
          900: '#224c34',
          950: '#0e2a1c',
        },
        earth: {
          50: '#f9f7f1',
          100: '#f0ebe0',
          200: '#e0d7c1',
          300: '#cebb9a',
          400: '#baa177',
          500: '#aa8c5f',
          600: '#97744d',
          700: '#7d5b40',
          800: '#674b38',
          900: '#563f31',
          950: '#302119',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "fade-in": {
          "0%": { opacity: '0', transform: 'translateY(10px)' },
          "100%": { opacity: '1', transform: 'translateY(0)' }
        },
        "fade-out": {
          "0%": { opacity: '1', transform: 'translateY(0)' },
          "100%": { opacity: '0', transform: 'translateY(10px)' }
        },
        "scale-in": {
          "0%": { transform: 'scale(0.95)', opacity: '0' },
          "100%": { transform: 'scale(1)', opacity: '1' }
        },
        "scale-out": {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.95)', opacity: '0' }
        },
        "slide-in-right": {
          "0%": { transform: 'translateX(100%)' },
          "100%": { transform: 'translateX(0)' }
        },
        "slide-out-right": {
          "0%": { transform: 'translateX(0)' },
          "100%": { transform: 'translateX(100%)' }
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: '1' },
          "50%": { opacity: '0.8' }
        },
        "float": {
          "0%, 100%": { transform: 'translateY(0)' },
          "50%": { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
        "slide-out-right": "slide-out-right 0.4s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
