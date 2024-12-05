/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      colors: {
       approacIconBackgroundColor: 'rgba(253, 178, 26, 0.1)'
    },
    screens: {
      "small": "769px"
    },
    backgroundImage: {
      // 'hero': "url('/images/approach2.png')"
    },
    fontWeight: {
  
  },
fontFamily: {
  "primary": ['Poppins'],
  "secondary" : ['Inter']
},
    },
  },
  plugins: [],
}

