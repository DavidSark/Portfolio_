<template>
    <div class="flex justify-center items-center h-screen">
      <div class="relative">
        <h1 class="text-3xl mb-6 hover:text-blue-500 cursor-pointer"
            @mouseover="showImage('person')"
            @mouseleave="hideImage('person')">
          Hey, I’m <span class="underline">AsrafAli</span>, a student currently based
          in India.
        </h1>
        <h1 class="text-3xl mb-6 hover:text-blue-500 cursor-pointer"
            @mouseover="showImage('country')"
            @mouseleave="hideImage('country')">
          Another text to hover over.
        </h1>
  
        <div class="absolute z-10">
         
            <img v-show="showPersonImage" src="../assets/img/ghosti.PNG" class="w-48 md:w-72" :style="personImageStyle" />
            <img v-show="showCountryImage" src="../assets/img/Ghostie.png" class="w-48 md:w-72" :style="countryImageStyle" />
       
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPersonImage: false,
        showCountryImage: false,
        personImageStyle: {},
        countryImageStyle: {}
      }
    },
    methods: {
      showImage(image) {
        this[`show${image.charAt(0).toUpperCase() + image.slice(1)}Image`] = true;
  
        // Generate random position for image
        const x = Math.random() * (window.innerWidth - 300);
        const y = Math.random() * (window.innerHeight - 300);
  
        // Set image style with transition
        this[`${image}ImageStyle`] = {
          top: `${y}px`,
          left: `${x}px`,
          transition: 'all 0.5s'
        }
      },
      hideImage(image) {
        this[`show${image.charAt(0).toUpperCase() + image.slice(1)}Image`] = false;
      }
    }
  }
  </script>
  
  <style scoped>
 
  </style>
  