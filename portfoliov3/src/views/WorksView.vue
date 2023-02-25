<template>
    <div>
        <div class="noise"></div>
        <div class="cursor"></div>

        <div id="container " > 

            <main class="flex items-center flex-col justify-center h-screen random-color ">  

                <div class="ligne0  border-default border-blanc_impur "></div>
  
                <div class="flex justify-center items-center ">
                    <p class=" text-blanc_impur font-mitr my-3 md:my-8 uppercase text-4xl md:text-9xl titre_anim letter_spacing ">works</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                     <RouterLink to="/works" class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">scroll down</RouterLink>
                </div>

            </main>
            
        </div>


        <ul class=" ">
            <li class="text-center ">
                <RouterLink to="/works" class="relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair random-color tracking-widest letter_spacing" >
                  <span  @mouseover="showImage('naknowledge')" @mouseleave="hideImage('naknowledge')" class=" name bord_transparent block lg:inline-block font-extrabold hover_effect">Naknowledge</span> <span class="hidden lg:inline-block">-</span> School project
                    
                  <transition name="fade">
                    <img
                      v-show="showNaknowledgeImage"
                        class="hidden  w-30rem lg:inline-block absolute bottom-52 right-0 ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
                        src="../assets/img/naknowledge.PNG"
                        alt="Image"
                      :style="naknowledgeImageStyle" />
                  </transition>
                </RouterLink>

                <hr class="my-10 lg:my-32 test"/>
            </li>

            <li class="text-center ">
                <RouterLink to="/works" class="relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair random-color tracking-widest letter_spacing" >
                  <span  @mouseover="showImage('country')" @mouseleave="hideImage('country')" class=" name bord_transparent block lg:inline-block font-extrabold 
                  hover_effect">Ghostie</span> <span class="hidden lg:inline-block">-</span> School project

                  <transition name="fade">
                    <img 
                    v-show="showCountryImage" 
                      class="hidden w-30rem lg:inline-block absolute bottom-52 right-0 ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
                      src="../assets/img/Ghostie.PNG"
                      alt="Image"
                      :style="countryImageStyle" />
                  </transition>
                </RouterLink>

                <hr class="my-10 lg:my-32 test"/>

                
            </li>

           
            
        </ul>





       

        <RouterLink to="/">Retour</RouterLink><br/>
        <RouterLink to="/test">Test</RouterLink>
    </div>
</template>

<script>
export default {
    data() {
      return {
        showNaknowledgeImage: false,
        showCountryImage: false,
        naknowledgeImageStyle: {},
        countryImageStyle: {}
      }
    },
    methods: {
      showImage(image) {
        this[`show${image.charAt(0).toUpperCase() + image.slice(1)}Image`] = true;
  
       
  
        // Set image style with transition
        this[`${image}ImageStyle`] = {
          top: `${y}px`,
          left: `${x}px`,
          transition: 'all 0.1s'
        }
      },
      hideImage(image) {
        this[`show${image.charAt(0).toUpperCase() + image.slice(1)}Image`] = false;
      }
    }
  }
</script>

<style>



</style>