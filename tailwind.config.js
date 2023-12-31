/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaryFont': 'var(--primaryFont)',
        'primaryBg': 'var(--primaryBg)',
        'accentOrange': 'var(--accentOrange)',
        'accentGreen': 'var(--accentGreen)',
        'accentBlue': 'var(--accentBlue)',
      },
      maxWidth: {
        'cutoff': '850px'
      },
      borderWidth: {
        'thin': '1px'
      }
    },
  },
  plugins: []
}
