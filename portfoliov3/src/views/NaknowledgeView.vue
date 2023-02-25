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
                     <RouterLink to="/works" class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">Naknowledge</RouterLink>
                </div>

            </main>
            

            <div class="">
                <section>
                    <div class="max-w-max m-auto">
                            <img src="../assets/img/naknowledge_home.png">
                    </div>
                </section>

                <section class="mt-20">
                    <div class="flex justify-center">
                        <div class=" max-w-xl lg:px-28 lg:max-w-7xl lg:flex lg:justify-center lg:items-center">
                            
                            
                            <div class="lg:flex lg:flex-col lg:pr-10">
                                <h2 class="px-5 mb-8 font-poppins md:text-2xl 2xl:text-4xl  uppercase text-vert_clair random-color tracking-widest letter_spacing"><span class=" bord_transparent font-extrabold">Design of the </span> <br/> <span class="font-bold"> Logo </span> </h2>
                                <p class=" px-5 max-w-3xl font-poppin text-blanc_impur mb-8">Chocolate cake liquorice oat cake caramels danish. Icing chocolate bar donut sweet candy chocolate cake bonbon lemon drops chocolate bar. Gingerbread sugar
                                plum sweet roll pudding cookie tiramisu cake wafer. Cotton candy gummies cake croissant jelly beans sweet roll candy canes ice cream. Wafer macaroon cookie chocolate chocolate bar donut jujubes candy. Cake cake cupcake cheesecake jelly-o lollipop jelly-o.</p>
                               
                            </div>

                            <div class="px-5">
                                <div class="mx-auto max-w-max ">
                                        <img src="../assets/img/naknowledge_logo.png">
                                </div>
                                <div class=" flex">
                                    <img class="w-1/2 h-auto" src="../assets/img/old_logo.png">
                                    <img class="w-1/2 h-auto" src="../assets/img/new_logo.png">
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>






       

        <RouterLink to="/">Retour</RouterLink><br/>
        <RouterLink to="/test">Test</RouterLink>
    </div>
</template>

<script>

</script>

<style>



</style>