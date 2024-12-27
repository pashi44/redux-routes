/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/*.{js,ts,jsx,tsx,ejs}"
    , "./src/tailwind/*.{js,ts,jsx,tsx,ejs}"

  ],
  theme: {

    screens: {
      sm: '480px',
      lg: '820px',
      xl: '1260px'
    },


    extend: {},
  },
  plugins: [

  ],
}

