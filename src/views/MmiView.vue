<template>
    <div>
        <div class="noise"></div>
        <div class="cursor"></div>

        <div id="container ">

            <main class="flex items-center flex-col justify-center h-screen random-color ">

                <div class="ligne0  border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center ">
                    <p
                        class=" text-blanc_impur font-mitr my-3 md:my-8 uppercase text-4xl md:text-9xl titre_anim letter_spacing ">
                        MMI</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">School project
                    </p>
                </div>

            </main>

            <section class=" sticky top-0 bg-[#090909] p-14 z-20 mb-20 ">
      <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase">
        <RouterLink to="/works" class="lg:text-xl 2xl:text-2xl">Works</RouterLink>
        <RouterLink to="/about" class="lg:text-xl 2xl:text-2xl">About</RouterLink>
      </div>
    </section>


            <section>
                <div class="max-w-max m-auto relative">
                    <img src="@/assets/img/mmi_home.png">
                </div>
            </section>






            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">

                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">Design &amp; </span> <br /> <span
                                    class="font-bold"> logo </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">Chocolate cake liquorice
                                oat cake caramels danish. Icing chocolate bar donut sweet candy chocolate cake bonbon lemon
                                drops chocolate bar. Gingerbread sugar plum sweet roll pudding cookie tiramisu cake wafer.
                                Cotton candy gummies cake croissant jelly beans sweet roll candy canes ice cream. Wafer
                                macaroon cookie chocolate chocolate bar donut jujubes candy. Cake cake cupcake cheesecake
                                jelly-o lollipop jelly-o.</p>

                        </div>

                        <div class="">
                            <div class="px-5 lg:px-0">
                                <div class="  ">
                                    <img src="@/assets/img/mmi.png">
                                </div>
                                <div class=" flex">
                                    <img class="w-1/2 h-auto" src="@/assets/img/mmi_blanc.png">
                                    <img class="w-1/2 h-auto" src="@/assets/img/mmi_noir.png">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>





            <section>
                <div class="max-w-max m-auto relative mt-20">
                    <img src="@/assets/img/mmi/slide2.jpg">
                </div>

                <div class="max-w-max m-auto relative mt-20">
                    <img src="@/assets/img/mmi/slide3.jpg">
                </div>

                <div class="flex justify-center items-center mt-16">
                    <a href=" src/assets/img/charte_mmi.pdf " download
                        class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim3 letter_spacing">Download</a>
                </div>


            </section>



            <!-- 
                <div>
                    <carousel :slides="slides" controls indicators></carousel>
                </div>
             -->












            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">tools </span> <br /> <span class="font-bold">
                                    used </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">Chocolate cake liquorice
                                oat cake caramels danish. Icing chocolate bar donut sweet candy chocolate cake bonbon lemon
                                drops chocolate bar. Gingerbread sugar plum sweet roll pudding cookie tiramisu cake wafer.
                                Cotton candy gummies cake croissant jelly beans sweet roll candy canes ice cream. Wafer
                                macaroon cookie chocolate chocolate bar donut jujubes candy. Cake cake cupcake cheesecake
                                jelly-o lollipop jelly-o.</p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0 flex flex-col justify-end">

                            <div class="lg:flex ">

                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2  flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Figma was used to make the layout
                                            of the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4 ">

                                        <img class="w-14" src="@/assets/img/figma_square.svg">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            Figma</p>

                                    </div>

                                </div>
                                <div
                                    class="card  relative p-6  bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default border-black ">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">HTML was used the language used to
                                            hierarchize the elements of the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/html.svg">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            html</p>

                                    </div>

                                </div>
                            </div>
                            <div class="lg:flex justify-center">
                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">CSS was used to give a unique style
                                            to the site</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/css3.svg">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            css</p>

                                    </div>

                                </div>



                            </div>


                        </div>
                    </div>
                </div>

            </section>






        </div>




   





    </div>
</template>

<script>
import Carousel from "../components/carousel/Carousel.vue";

export default {
    name: "App",
    components: { Carousel },
    data: () => ({
        slides: [
            "/src/assets/img/mmi/slide1.jpg",
            "/src/assets/img/mmi/slide2.jpg",
            "/src/assets/img/mmi/slide3.jpg",
            "/src/assets/img/mmi/slide4.jpg",
            "/src/assets/img/mmi/slide5.jpg",
            "/src/assets/img/mmi/slide6.jpg",
            "/src/assets/img/mmi/slide7.jpg",

        ],
    }),
};
</script>

<style>
/* @media (min-width: 768px) {
    .md\:pl-0 {
        padding-left: 0 !important;
    }
} */
</style>