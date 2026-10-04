/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mc: {
          darkest: '#090d16',
          dark: '#0f172a',
          card: '#151e33',
          border: '#23304c',
          muted: '#8ba2c4',
          emerald: '#10b981',
          gold: '#f59e0b',
          soul: '#06b6d4',
          sift: '#a855f7',
          crimson: '#ef4444',
          iron: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Rajdhani', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glow-soul': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-sift': '0 0 25px -5px rgba(168, 85, 247, 0.35)',
      }
    },
  },
  plugins: [],
};
