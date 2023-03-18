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
                        Unicycle</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">school project
                    </p>
                </div>

            </main>


            <section class=" sticky top-0 bg-[#090909] p-14 z-40 mb-20 ">
                <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase font-poppins">
                    <RouterLink to="/works" class="lg:text-xl 2xl:text-2xl surligne">Works</RouterLink>
                    <RouterLink to="/about" class="lg:text-xl 2xl:text-2xl surligne">About</RouterLink>
                </div>
            </section>

            <section>
                <div class="max-w-max m-auto relative">
                    <img src="@/assets/img/velotaf_home.png" alt="unicycle website example">
                    <a href="https://sae202.davidsarkissian.fr/" target="_blank"
                        class=" absolute inset-x-0 flex flex-col bottom-0  mb-10  sm:mb-16  md:mb-20  items-center justify-end font-poppins text-base md:text-26 uppercase text-noir_impur letter_spacing light_anim3 ">visit
                        the site</a>
                </div>
            </section>

            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">

                    <div class="lg:pr-14 flex flex-col justify-center ">

                        <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                            <span class=" bord_transparent font-extrabold">The</span> <br /> <span class="font-bold">
                                Project </span>
                        </h2>
                        <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl text-blanc_impur leading-7 mb-8">Unicycle is a
                            project focused on the bike commuting. The goal was to create a communication strategy around
                            this topic while integrating a website.
                        </p>

                    </div>
                </div>

            </section>


            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">

                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">Design &amp; </span> <br /> <span
                                    class="font-bold"> logo </span>
                            </h2>
                            <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">The design of the logo is
                                quite simple, there is a road that represents the paths used when you are cycling and at the
                                end, the horizon.</p>

                        </div>

                        <div class="">
                            <div class="px-5 lg:px-0">
                                <div class="  ">
                                    <img src="@/assets/img/velotaf.png" alt="unicycle logo">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>




            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">
                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">Font &amp; </span> <br /> <span
                                    class="font-bold"> Typography </span>
                            </h2>
                            <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">First of all, Quicksand
                                is a modern, readable and user-friendly font. It is often used for headlines and titles
                                because of its large size and eye-catching appearance.<br /><br />

                                On the other hand, Raleway is an elegant and professional sans-serif font. It is easy to
                                read, even at small sizes, and its geometric structure makes it ideal for use on a website.
                                <br /><br />

                                Together, Quicksand and Raleway offer an effective combination for a website. The
                                combination of the two fonts makes it possible to highlight headings and titles while
                                maintaining high readability for running text. In addition, the difference in style between
                                the two fonts creates a visual contrast that helps structure the content of the
                                site.
                            </p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0">
                            <div class="p-6 bg-blanc_impur font-quicksand">
                                <div class="mb-8">
                                    <h3 class="text-xl font-bold text-noir_impur mb-2">Quicksand</h3>
                                    <p class="text-sm text-noir_impur mb-2">Regular</p>
                                    <p class="text-sm font-medium text-noir_impur mb-2">Medium</p>
                                    <p class="text-sm font-bold text-noir_impur mb-2">Bold</p>
                                </div>


                                <div>
                                    <p class="text-sm font-bold text-noir_impur mb-2">0123456789</p>
                                    <p class="text-sm font-medium text-noir_impur mb-2 uppercase">abcdefghijklmnopqrstuvwxyz
                                    </p>
                                    <p class="text-sm text-noir_impur mb-2">abcdefghijklmnopqrstuvwxyz</p>
                                </div>
                            </div>

                            <div class="p-6 bg-noir_impur font-raleway">
                                <div class="mb-8">
                                    <h3 class="text-xl font-bold text-blanc_impur mb-2">Raleway</h3>
                                    <p class="text-sm text-blanc_impur mb-2">Regular</p>
                                    <p class="text-sm font-medium text-blanc_impur mb-2">Medium</p>
                                    <p class="text-sm font-bold text-blanc_impur mb-2">Bold</p>
                                </div>


                                <div>
                                    <p class="text-sm font-bold text-blanc_impur mb-2">0123456789</p>
                                    <p class="text-sm font-medium text-blanc_impur mb-2 uppercase">
                                        abcdefghijklmnopqrstuvwxyz</p>
                                    <p class="text-sm text-blanc_impur mb-2">abcdefghijklmnopqrstuvwxyz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">
                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">Color </span> <br /> <span class="font-bold">
                                    palette </span>
                            </h2>
                            <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">First of all,dark green is a bright and energetic blue-green that draws attention.
                                The neutral gray is used to add depth and texture to the
                                website. This color is often used for body text because it is easy to read on a white
                                background.  <br/>

                                Pure white is a very important color for any website as it is often used as a
                                background to highlight content and images.<br/><br/>

                                Clear green is a fresh and bright green that can be used to evoke nature, growth or
                                health. This color can be used for icons that need a touch of bright
                                color.<br/><br/>

                                By using these different colors in the website, i have created a consistent color palette
                                that helps highlight the most important elements create a pleasant visual
                                experience for users.</p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0">
                            <div class="p-6 bg-velo_green_dark font-poppins">
                                <div class="mb-8">
                                    <p class="text-lg text-blanc_impur font-extrabold bord_transparent uppercase">Primary
                                    </p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing">Color</p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing ">Dark green
                                    </p>

                                </div>


                                <div>

                                    <p class="text-xl text-blanc_impur font-extrabold bord_transparent uppercase">#129A8F
                                    </p>
                                </div>
                            </div>



                            <div class="lg:flex">
                                <div class="p-6 bg-velo_black font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent uppercase">Secondary </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing">Color
                                        </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing ">black
                                        </p>

                                    </div>


                                    <div>

                                        <p class="text-xl text-blanc_impur font-extrabold bord_transparent uppercase">
                                            #4C4C4C</p>
                                    </div>
                                </div>
                                <div class="p-6 bg-white  font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent_noir uppercase">Secondary </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing">Color</p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing ">White
                                        </p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent_noir uppercase">#FFFFFF</p>
                                    </div>
                                </div>
                            </div>


                            <div class="lg:flex">
                                <div class="p-6 bg-black font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent uppercase">Secondary </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing">Color
                                        </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing ">black
                                        </p>

                                    </div>


                                    <div>

                                        <p class="text-xl text-blanc_impur font-extrabold bord_transparent uppercase">
                                            #000000</p>
                                    </div>
                                </div>
                                <div class="p-6 bg-vert_clair  font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent_noir uppercase">Secondary </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing">Color</p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing ">Clear
                                            Green</p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent_noir uppercase">#6AEAA3</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <section class="mt-20 pb-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center">
                            <h2 class="font-mitr pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">tools </span> <br /> <span class="font-bold">
                                    used </span>
                            </h2>
                            <p class="font-poppins pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">To create website,
                                some technical constraints were imposed. It was imperative to use Figma software to model
                                and
                                set up a model of the website but it was also necessary to use Wordpress to create the
                                projetct
                                but also CSS language to style the page in accordance with the
                                model.</p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0 flex flex-col justify-end">

                            <div class="lg:flex ">

                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2  flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Figma was used to make the layout
                                            of
                                            the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4 ">

                                        <img class="w-14" src="@/assets/img/figma_square.svg" aria-flowto="figma logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            Figma</p>

                                    </div>

                                </div>
                                <div
                                    class="card  relative p-6  bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default border-black ">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Wordpress was the CMS used to
                                            create the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/wordpress.svg" alt="wordpress logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            wordpress</p>

                                    </div>

                                </div>
                            </div>
                            <div class="lg:flex justify-center">
                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">CSS was used to give a unique style
                                            to
                                            the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/css3.svg" alt="css logo">
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

</div></template>

