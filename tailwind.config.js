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
      "xsmall": "349px",
      "small": "769px",
      "medium": "989px"
    },
    backgroundImage: {
      // 'hero': "url('/images/approach2.png')"
    },
    fontWeight: {
  
  },
fontFamily: {
  "primary": ['DM Sans'],
  "secondary" : ['Inter']
},
    },
  },
  plugins: [],
}

