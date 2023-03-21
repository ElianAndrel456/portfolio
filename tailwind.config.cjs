/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#16DB65',
        secondary: '#04471C',
        darkPrimary: '#020202',
      },
    },
  },
  plugins: [],
}
