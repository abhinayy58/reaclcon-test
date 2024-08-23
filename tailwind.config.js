/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #1B3450 18.68%, #061C36 100%)',
      },
      border:{
        'custom-gradient-border':'linear-gradient(90deg, #AE8625 0%, #F7EF84 36%, #D2AC47 72.5%, #EDC967 100%)'
      }
    },
  },
  plugins: [],
}

