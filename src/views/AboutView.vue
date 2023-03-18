<template>
    <div>
        <div class="noise"></div>
        <div class="cursor"></div>

        <div id="container ">

            <main class="flex items-center flex-col justify-center h-screen  ">

                <div class="ligne0  border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center ">
                    <p
                        class=" text-blanc_impur font-mitr my-3 md:my-8 uppercase text-4xl md:text-9xl titre_anim letter_spacing ">
                        About</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">Me
                    </p>
                </div>

            </main>


            <section class=" sticky top-0 bg-[#090909] p-14 z-20 mb-20 ">
                <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase font-poppins">
                    <RouterLink to="/works" class="lg:text-xl 2xl:text-2xl">Works</RouterLink>
                    <RouterLink to="/about" class="lg:text-xl 2xl:text-2xl">About</RouterLink>
                </div>
            </section>



            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" ">
                        <div class="flex flex-col justify-center">

                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">Who </span> <br /> <span
                                    class="font-bold random-color">
                                    am i </span>
                            </h2>
                            <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">
                                My name is David and I love the web! <br/> 
                                I've always scanned the technologies and technical
                                possibilities related to the digital world in order to capture people's attention.<br/>
                                I particularly like to be in front of a problem and to solve it always to improve my
                                abilities and to give the best of myself.
                                Whether it's for design or web development, I will give my heart to surpass myself and make
                                your imagination real.
                                Don't be shy!
                            </p>

                        </div>

                    </div>
                </div>

            </section>




            <section class="mt-20 pb-44">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class=" flex flex-col justify-center">

                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">get in </span> <br /> <span
                                    class="font-bold random-color">
                                    touch </span>
                            </h2>
                            <form action="https://formsubmit.co/david.sarkissiann@gmail.com" method="post"
                                class="flex flex-col pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8 font-poppins">

                                <input type="text" id="nom" name="nom" placeholder="Name" required>


                                <input type="email" id="email" name="email" placeholder="E-mail" required>


                                <textarea id="message" name="message" required placeholder="Message"></textarea>

                                <div class="flex justify-center items-center ">
                                    <input type="submit" value="SEND">
                                </div>

                                <input type="hidden" name="_next" value="https://portfolio.davidsarkissian.fr/about">
                                <input type="hidden" name="_captcha" value="false">
                                
                            </form>

                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0">
                            <div class="about_hover bg-gris font-poppins  lg:min-h-full">
                                <div class="whitespace-nowrap text-center p-16">
                                    <p class="text-xl text-noir_impur font-extrabold uppercase letter_spacing">More info</p>
                                </div>
                                <div class="mb-5 px-14 2xl:px-32 text-base  text-noir_impur font-bold letter_spacing ">
                                    <p>david.sarkissiann@<br class="sm:hidden" />gmail.com</p>
                                </div>
                                <div class="my-5 px-14 2xl:px-32 text-base  text-noir_impur font-bold letter_spacing ">
                                    <p>Based in France</p>
                                </div>
                                <div class="my-5 px-14 2xl:px-32 text-base  text-noir_impur font-bold letter_spacing ">
                                    <p>Currently student</p>
                                </div>
                                <div
                                    class="my-5 px-14 pb-24 2xl:px-32 text-base  text-noir_impur font-bold letter_spacing ">
                                    <p>Learning at BUT MMI - Montbéliard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>

</div></template>