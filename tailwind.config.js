/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(34, 139, 34)',       // Forest Green
          200: 'rgb(28, 117, 28)',
          300: 'rgb(22, 95, 22)',
          400: 'rgb(16, 73, 16)',
          500: 'rgb(10, 51, 10)',
          600: 'rgb(4, 29, 4)',
          700: 'rgb(0, 17, 0)',
          800: 'rgb(0, 13, 0)',
          900: 'rgb(0, 9, 0)',
        },
        background: {
          light: 'rgb(245, 255, 250)', // Mint Cream (Light Mode)
          dark: '#161622', // Dark Mode
        },
        card: {
          light: 'rgb(143, 188, 143)',       // Dark Sea Green
          dark: 'rgb(30, 30, 30)', // Dark Mode
        },
        text: {
          light: 'rgb(0, 100, 0)',           // Dark Green (Text)
          dark: 'rgb(200, 200, 200)', // Light Gray (Text)
        },
        border: {
          light: 'rgb(85, 107, 47)',       // Olive Drab
          dark: 'rgb(50, 50, 50)', // Dark Gray
        },
        notification: {
          success: 'rgb(152, 251, 152)', // Pale Green
          error: 'rgb(255, 100, 100)', // Light Coral
          warning: 'rgb(255, 215, 0)', // Golden
        },
      },
    },
  },
  plugins: [],
}