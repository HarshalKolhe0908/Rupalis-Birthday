/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef5e7",
          100: "#fdebd0",
          200: "#f9e79f",
          300: "#f5b041",
          400: "#f39c12",
          500: "#e67e22",
          600: "#d35400",
          700: "#ba4a00",
          800: "#922b00",
          900: "#6a1b00",
        },
        accent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f8b4d9",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse_glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        spin_slow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse_glow: 'pulse_glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        spin_slow: 'spin_slow 20s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
