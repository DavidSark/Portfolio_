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
        rouge_clair: '#F19898',
        vert_clair: '#98F1C6',
      },

      "fontFamily": {
        marxure: ['Secular One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        '8': '10px',
        '1rem': '1rem',
        '26': '1.625rem',
        '64': '4.25em',
        '12.5rem': '12.5rem',
        '5rem': '5rem'
      },

      borderWidth: {
        default: '1px',
      },
      
      


    },

  },
  plugins: [],
}
