/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['IBM Plex Serif', 'Georgia', 'serif'],
        'sans': ['IBM Plex Mono', 'monospace'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'cream': '#FFFFFF',
        'dark': '#000000',
        'highlight': '#FFE66D',
      },
    },
  },
  plugins: [],
}
