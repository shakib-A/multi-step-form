/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{jsx,js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'Marineblue': 'hsl(213, 96%, 18%)',
        'Purplishblue': 'hsl(243, 100%, 62%)',
        'Pastelblue': 'hsl(228, 100%, 84%)',
        'Lightblue': 'hsl(206, 94%, 87%)',
        'Strawberryred': 'hsl(354, 84%, 57%)',
        'Coolgray': 'hsl(231, 11%, 63%)',
        'Lightgray': 'hsl(229, 24%, 87%)',
        'Magnolia': 'hsl(217, 100%, 97%)',
        'Alabaster': 'hsl(231, 100%, 99%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      backgroundImage: {
        'Desktop': "url('images/bg-sidebar-desktop.svg')",
        'Mobile': "url('images/bg-sidebar-mobile.svg')",
        'Arcade': "url('images/icon-arcade.svg')",
        'Advanced': "url('images/icon-advanced.svg')",
        'Pro': "url('images/icon-pro.svg')",
        'Thanks': "url('images/icon-thank-you.svg')",
      }
    },
  },
  plugins: [],
}

