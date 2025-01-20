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
      boxShadow: {
        'custom': '0 4px 15px  #11CE8A80', // Custom shadow
      },

    screens: {
      "xsmall": "349px",
      "small": "769px",
      "medium": "989px",
      "large": "1250px"
    },
    backgroundImage: {
      // 'hero': "url('/images/approach2.png')"
    },
    fontWeight: {
  
  },
fontFamily: {
  "primary": ['DM Sans'],
  "secondary" : ['Poppins'],
  "basic" : ['Gorditas']
},
    },
  },
  plugins: [],
}

