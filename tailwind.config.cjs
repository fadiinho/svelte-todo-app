/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
          'm-header-image': "url(/src/assets/bg-mobile-light.jpg)",
          'm-header-image-dark': "url(/src/assets/bg-mobile-dark.jpg)",
          'd-header-image': "url(/src/assets/bg-desktop-light.jpg)",
          'd-header-image-dark': "url(/src/assets/bg-desktop-dark.jpg)"
      },
      colors: {
        "gradient-from": "hsl(192, 100%, 67%)",
        "gradient-to": "hsl(280, 87%, 65%)",
        // Dark
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-grayish-blue": "hsl(234, 11%, 52%)",
        "very-dark-grayish": "hsl(233, 14%, 35%)",
        "very-dark-grayish-2": "hsl(237, 14%, 26%)",

        // Light
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": "hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)",

      }
    },
  },
  plugins: [],
}
