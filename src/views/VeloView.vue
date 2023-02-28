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
                        works</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <p 
                        class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">vélotaf
                </p>
                </div>

            </main>



          
 <section>
                    <div class="max-w-max m-auto relative">
                            <img src="@/assets/img/velotaf_home.png">
                            <a href="https://sae202.davidsarkissian.fr/" target="_blank" class=" absolute inset-x-0 flex flex-col bottom-0  mb-10  sm:mb-16  md:mb-20  items-center justify-end font-poppins text-base md:text-26 uppercase text-noir_impur light_anim2 ">velotaf</a>
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
                                    <img src="@/assets/img/velotaf.png">
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>



<section class="my-40">
    <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase">
        <RouterLink to="/works" class="light_anim4">Works</RouterLink>
        <RouterLink to="/about" class="light_anim4 ">about</RouterLink>
    </div>
</section>

 
    </div>
</template>

<script>

</script>

<style>
/* @media (min-width: 768px) {
    .md\:pl-0 {
        padding-left: 0 !important;
    }
} */
</style>