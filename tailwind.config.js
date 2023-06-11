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
        'sign-in': "url('../public/signin_xl.svg')",
        'car': "url('../public/car.svg')",
        'uet': "url('../public/uet.png')",
        'vnu': "url('../public/vnu.png')",
        'fit': "url('../public/fit.png')",
        'ava0': "url('../public/ava0.png')",
        'ava1': "url('../public/ava1.png')",
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
          "neutral": "#B6D4EC",
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
