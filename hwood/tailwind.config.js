/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A7DB1',
        accent: '#C89B5E',
        dark: '#1D242C',
        light: '#F5F7F8',
      },
      fontFamily: {
        plex: ['"IBM Plex Sans Hebrew"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 30px rgba(20, 37, 53, 0.12)',
      },
      borderRadius: {
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};
