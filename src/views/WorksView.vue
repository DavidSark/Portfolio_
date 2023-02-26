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
                     <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">scroll down</p>
                </div>

            </main>
            
        </div>


        <ul class=" flex flex-col justify-center items-center">
            <li class="">
              
                <RouterLink to="/naknow" class="lg:flex lg:justify-between  relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair random-color tracking-widest letter_spacing" >
                  <span  @mouseover="showImage('naknowledge')" @mouseleave="hideImage('naknowledge')" class=" name bord_transparent block lg:inline-block font-extrabold hover_effect max-w-6xl lg:w-1/2">Naknowledge</span> <span class="hidden lg:inline-block">|</span> 
                  <span class="lg:pt-1">School project</span>
                    
                  <transition name="fade">
                    <img
                      v-show="showNaknowledgeImage"
                        class="hidden  w-30rem lg:inline-block absolute bottom-52 right-0 ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
                        src="@/assets/img/naknowledge.png"
                        alt="Image"
                      :style="naknowledgeImageStyle" />
                  </transition>
                </RouterLink>

                <hr class="my-10 lg:my-32 test"/>
            </li>

            

            <li class="">
                <RouterLink to="/works" class="lg:flex lg:justify-between relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair random-color tracking-widest letter_spacing" >
                  <span  @mouseover="showImage('ghostie')" @mouseleave="hideImage('ghostie')" class=" bord_transparent block lg:inline-block font-extrabold 
                  hover_effect max-w-6xl lg:w-1/2">Ghostie</span> <span class="hidden lg:inline-block ">|</span> <span class="lg:pt-1">School project</span>

                  <transition name="fade">
                    <img 
                    v-show="showGhostieImage" 
                      class="hidden w-30rem lg:inline-block absolute bottom-52 right-0 ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
                      src="@/assets/img/ghostie.png"
                      alt="Image"
                      :style="ghostieImageStyle" />
                  </transition>
                </RouterLink>

                <hr class="my-10 lg:my-32 test"/>
            </li>

        </ul>





       

        <section class="my-40">
    <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase">
        <RouterLink to="/works" class="light_anim4">Works</RouterLink>
        <RouterLink to="/about" class="light_anim4 ">About</RouterLink>
    </div>
</section>



    </div>
</template>

<script>
export default {
    data() {
      return {
        showNaknowledgeImage: false,
        showGhostieImage: false,
        naknowledgeImageStyle: {},
        ghostieImageStyle: {}
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