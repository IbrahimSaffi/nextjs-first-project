/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
    'greyish-black':'rgb(29, 29, 29)',
    'transparent-black':'rgba(0, 0, 0, 0.844)',
    'white':'white',
    'black':'black'
    },
    padding:{
      '10p':"10px"
    },
    height:{
      '58pt':"58%",
      '30pt':"30%",
      '15pt':"15%",
       's-6':"6vh",
       's-15':"15vh",
       '300p':"300px",
       '55pt':"55%"
    },
    width:{
      '9/10':"90%",
      's-1/5':"30vw",
      's-15':"15vw",
      '15pt':"15%",
      '17pt':"17%",
    },
    borderRadius:{
      '10p':"10px",
      '15p':"15px"
    },
    transitionProperty:{
      'height':"height"
    },
  },
},
  plugins: [],
}
