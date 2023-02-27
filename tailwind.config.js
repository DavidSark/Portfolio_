module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        violet: '#BF98F1',
        blanc_impur: '#C7C7C7',
        noir_impur: "#343434",
        rouge_clair: '#F19898',
        vert_clair: '#98F1C6',
        violet_nano: '#9546FF',
        violet_clair: '#E1C6FF',
        gris_clair: '#818181',
        gris: '#A3A3A3',
        ask_dark: '#1C1C1C',
        ask_blue_dark: '#3316E3',
        ask_blue_clear: '#77D1D7',
        ask_grey: '#F6F6F6',

      },

      "fontFamily": {
        poppins: ['Poppins', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
        reem: ['Reem Kufi', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      },

      fontSize: {
        '8': '10px',
        '1rem': '1rem',
        '26': '1.625rem',
        '64': '4.25em',
        '3rem': '3.5rem',
        '12.5rem': '12.5rem',
        '5rem': '5rem',
        
      },

      borderWidth: {
        default: '1px',
      },
      
      padding:{
        '23rem': '23rem'
      },
      width:{
        "17.5rem": "17.5rem",
        "20rem":"20rem",
        "32.5rem": "36rem",
        '30rem': '30rem',
        "34.26rem":'34.26rem',
        '58.75rem': '58.75rem'
      },
      height:{
        "19.375": "19.5rem"
        
      },
    },

  },
  plugins: [],
}
