/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#02223C",
          "secondary": "#075985",
          "accent": "#006661",
          "neutral": "#F8F8F1",
          "base-100": "#FFFFFF",
          "info": "#B6D4EC",
          "success": "#bae6fd",
          "warning": "#fcd34d",
          "error": "#b91c1c",
        },
      },
      // "dark",
      // "cupcake",
    ],
  }
}
