/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "jura": ['Jura', 'sans-serif'], 
        "offside":['Offside','sans-serif'],
        "paddy":['Padyakke Expanded One','serif']
    } ,
    backgroundImage: {
      'custom-gradient': 'linear-gradient(246.28deg, #F197F4 -27.32% , #5B6AAA 86.32%)',
      'button-gradient':'linear-gradient(180deg, rgba(179, 130, 211, 0.5) 0%, rgba(28, 39, 69, 0.5) 100%)',
      'cpt-gradient':'linear-gradient(109.71deg, rgba(255, 255, 255, 0.05) -10.84%, rgba(255, 255, 255, 0.001) 110.62%)',
      'feature-gradient':'linear-gradient(109.87deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.001) 100%);',
      'upload-gradient':'linear-gradient(180deg, rgba(241, 151, 244, 0.8) 0%, rgba(43, 58, 99, 0.8) 100%)',
      'generate-gradient':'linear-gradient(180deg, #302438 0%, #936094 100%)'
    },
    boxShadow:{
      'button-shadow':'0px 0px 10px 4px rgba(0, 0, 0, 0.25);',
      'box-shadow':'0px 5px 60px rgba(0, 0, 0, 0.5)'
    }
    },
    background:{
      'box-color':'rgba(255, 255, 255, 0.05);'
    },
    screens: {
      'xs': '480px',  // Custom size for extra small devices
      'sm': '640px',  // Small devices (default)
      'md': '768px',  // Medium devices (default)
      'lg': '1024px', // Large devices (default)
      'xl': '1280px', // Extra large devices (default)
      '2xl': '1536px', // Custom size for very large devices
    },
   
  },
  plugins: [],
}
