<template>
  <div>
    <div class="noise"></div>
    <div class="cursor"></div>

    <div id="container ">

      <main class="flex items-center flex-col justify-center h-screen random-color ">

        <div class="ligne0 border-default border-blanc_impur "></div>

        <div class="flex justify-center items-center ">
          <p class=" text-blanc_impur font-mitr my-3 md:my-8 uppercase text-4xl md:text-9xl titre_anim letter_spacing ">
            works</p>
        </div>

        <div class="ligne1 border-default border-blanc_impur "></div>

        <!-- <div class="flex justify-center items-center mt-16">
                     <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">scroll down</p>
                </div> -->

      </main>

    </div>

    <section class=" sticky top-0 bg-[#090909] p-10 z-10">
      <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase">
        <RouterLink to="/works" class="">Works</RouterLink>
        <RouterLink to="/about" class="">About</RouterLink>
      </div>
    </section>

    <ul class=" flex flex-col justify-center items-center">

      <li class="relative">

        <RouterLink to="/naknow" @mouseover="showImage('naknowledge')" @mouseleave="hideImage('naknowledge')"
          class=" py-5 md:py-32 lg:flex lg:justify-between font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase  text-vert_clair tracking-widest letter_spacing">
          <span
            class=" name bord_transparent block lg:inline-block font-extrabold hover_effect max-w-6xl lg:w-1/2">naknowledge</span>
          <span class="hidden lg:inline-block random-color">|</span>
          <span class="lg:pt-1 random-color z-0">School project</span>

          <transition name="fade">
            <img v-show="showNaknowledgeImage"
              class="hidden z-10 w-30rem lg:inline-block absolute top-[-500px] right-0  ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
              src="@/assets/img/naknowledge.png" alt="Image" :style="naknowledgeImageStyle" />
          </transition>
        </RouterLink>

        <hr />
      </li>



      <li class="relative">

        <RouterLink to="/askme" @mouseover="showImage('askme')" @mouseleave="hideImage('askme')"
          class=" py-5 md:py-32 lg:flex lg:justify-between font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase  text-vert_clair tracking-widest letter_spacing">
          <span
            class=" name bord_transparent block lg:inline-block font-extrabold hover_effect max-w-6xl lg:w-1/2">Askme</span>
          <span class="hidden  lg:inline-block random-color">|</span>
          <span class="lg:pt-1 random-color z-0">School project</span>

          <transition name="fade">
            <img v-show="showAskmeImage"
              class="hidden z-10 w-30rem lg:inline-block absolute top-[-500px] right-0  ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
              src="@/assets/img/askme.png" alt="Image" :style="askmeImageStyle" />
          </transition>
        </RouterLink>

        <hr />
      </li>


      <li class="relative">
        <RouterLink to="/velo" @mouseover="showImage('velo')" @mouseleave="hideImage('velo')"
          class=" py-5 md:py-32 lg:flex lg:justify-between lg:items-center relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair tracking-widest letter_spacing">
          <span class=" bord_transparent block lg:inline-block font-extrabold 
                      hover_effect max-w-6xl lg:w-1/2"> Unicycle</span> <span
            class="hidden lg:inline-block random-color ">|</span> <span class="lg:pt-1 random-color">School project</span>

          <transition name="fade">
            <img v-show="showVeloImage"
              class="hidden z-10 w-30rem lg:inline-block absolute top-[-500px] right-0  ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
              src="@/assets/img/velotaf.png" alt="Image" :style="veloImageStyle" />
          </transition>
        </RouterLink>

        <hr />
      </li>

      <li class="mb-20">

        <RouterLink to="/mmi" @mouseover="showImage('mmi')" @mouseleave="hideImage('mmi')"
          class="py-5 md:py-32 lg:flex lg:justify-between  relative font-poppins text-lg md:text-5xl lg:text-5xl 2xl:text-3rem uppercase text-vert_clair tracking-widest letter_spacing">
          <span
            class=" name bord_transparent block lg:inline-block font-extrabold hover_effect max-w-6xl lg:w-1/2">MMI</span>
          <span class="hidden lg:inline-block random-color">|</span>
          <span class="lg:pt-1  random-color">School project</span>

          <transition name="fade">
            <img v-show="showMmiImage"
              class="hidden z-10 w-30rem lg:inline-block absolute top-[-500px] right-0  ml-2 2xl:bottom-64 2xl:w-32.5rem h-auto transform translate-y-full"
              src="@/assets/img/mmi.png" alt="Image" :style="mmiImageStyle" />
          </transition>
        </RouterLink>

        <hr />

      </li>

    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showNaknowledgeImage: false,
      showAskmeImage: false,
      showVeloImage: false,
      showMmiImage: false,
      showGhostieImage: false,
      naknowledgeImageStyle: {},
      askmeImageStyle: {},
      veloImageStyle: {},
      mmiImageStyle: {},
      ghostieImageStyle: {},
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

<style></style>