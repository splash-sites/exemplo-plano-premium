export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#6B2737',
        secondary: '#E7B9C2',
        dark: '#4A1B26',
        cream: '#FBF8F5',
        blush: '#F6E7EA',
        ink: '#4A3B3B',
        muted: '#6A5555',
        softmuted: '#7A6666',
        bordercol: '#EFE2E4',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    }
  },
  plugins: [],
};
