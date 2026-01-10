/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' is the default, but we'll create custom keys
        poppins: ['Poppins', 'sans-serif'],
        sansita: ['"Sansita Swashed"', 'cursive']
      }
    }
  },
  plugins: []
}
