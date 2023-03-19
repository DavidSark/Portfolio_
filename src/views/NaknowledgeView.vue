<template>
    <div>
        <div class="noise"></div>
        <div class="cursor"></div>

        <div id="container ">

            <main class="flex items-center flex-col justify-center h-screen random-color ">

                <div class="ligne0  border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center ">
                    <p
                        class=" text-blanc_impur font-mitr my-3 md:my-8 uppercase text-4xl lg:text-6xl 2xl:text-9xl titre_anim letter_spacing ">
                        Naknowledge</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">School project
                    </p>
                </div>

                <div class="scroll-down-container">
          <div  class="scroll-down-link">
            <span class="arrow-down"></span>
          </div>
        </div>
            </main>

            <section class=" sticky top-0 bg-[#090909] p-14 z-20 mb-20 ">
                <div class="flex justify-center items-center space-x-20 lg:space-x-44 uppercase font-poppins">
                    <RouterLink to="/works" class="lg:text-xl 2xl:text-2xl surligne">Works</RouterLink>
                    <RouterLink to="/about" class="lg:text-xl 2xl:text-2xl surligne">About</RouterLink>
                </div>
            </section>



            <section>
                <div class="max-w-max m-auto">
                    <img src="@/assets/img/naknowledge_home.png" alt="naknowledge example of the web site">
                </div>
            </section>


            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">

                    <div class="lg:pr-14 flex flex-col justify-center ">

                        <h2 class="font-mitr  pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                            <span class=" bord_transparent font-extrabold">The</span> <br /> <span class="font-bold">
                                Project </span>
                        </h2>
                        <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl text-blanc_impur leading-7 mb-8 font-poppins">Naknowledge is a
                            school
                            project that was done as a group. The goal was to create a website where people would come together
                            as a community around topics they love.

                            The technical constraint was to create a theme via the CMS Wordpress so that the design and logo
                            fit perfectly with its visual identity.
                        </p>

                    </div>
                </div>

            </section>



            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col justify-center ">

                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-mitr font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">Design &amp; </span> <br /> <span
                                    class="font-bold"> logo </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl text-blanc_impur leading-7 mb-8 font-poppins">The logo was
                                designed to be as close as possible to the idea of sharing and especially sharing knowledge.
                                That's why at first we started with the idea of a hexagon bridge that acts as a knowledge
                                sharing between people, then after reworking it a little, we kept the geometric elements to
                                give a more modern look with a box that represents knowledge.</p>

                        </div>

                        <div class="">
                            <div class="px-5 lg:px-0">
                                <div class="  ">
                                    <img src="@/assets/img/naknowledge_logo.png" alt="naknowledge logo">
                                </div>
                                <div class=" flex">
                                    <img class="w-1/2 h-auto" src="@/assets/img/old_logo.png" alt="naknowledge old logo">
                                    <img class="w-1/2 h-auto" src="@/assets/img/new_logo.png" alt="naknowledge new logo">
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
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-mitr font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">Font &amp; </span> <br /> <span
                                    class="font-bold"> Typography </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl font-poppins text-blanc_impur leading-7 mb-8">Reem Kufi is a modern,
                                elegant and easy to read font. It is often used for headlines and titles because of its
                                large size and eye-catching look.<br /><br />

                                As far as Raleway is concerned, this font is known for its professional and clean look. It
                                is also easy to read, even at small sizes, and its sans-serif structure makes it ideal for
                                use on a website.<br /><br />

                                Together, Reem Kufi and Raleway offer an effective combination for a website. The difference
                                in style between the two fonts creates a visual contrast that helps structure the content of
                                the site.</p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0">
                            <div class="p-6 bg-blanc_impur font-reem">
                                <div class="mb-8">
                                    <h3 class="text-xl font-bold text-noir_impur mb-2">Reem Kufi</h3>
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
                            <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl font-poppins text-blanc_impur leading-7 mb-8"> The combination of
                                colors chosen creates a harmonious and effective visual balance for the website. Bright
                                colors draw attention to important elements, while darker, subtle colors help create strong
                                visual contrast and maintain high readability for text.<br /><br />

                                Purple is a bright, rich color that can give an impression of creativity and
                                sophistication. It is often used to draw attention to important elements of the website and
                                create a strong visual impact.<br /><br />

                                Black and white are classic and timeless colors that can give an impression of
                                professionalism. They are often used for running text, as it is easy to read and creates a
                                strong visual contrast with the background.<br /><br />

                            </p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0 ">
                            <div class="p-6 bg-violet_nano font-poppins">
                                <div class="mb-8">
                                    <p class="text-lg text-blanc_impur font-extrabold bord_transparent uppercase">Primary
                                    </p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing">Color</p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing ">Dark Purple
                                    </p>

                                </div>


                                <div>

                                    <p class="text-xl text-blanc_impur font-extrabold bord_transparent uppercase">#9546FF
                                    </p>
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
                                <div class="p-6 bg-violet_clair font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent_noir uppercase">Secondary </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing">Color</p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing ">Clear
                                            Purple</p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent_noir uppercase">#E1C6FF</p>
                                    </div>
                                </div>
                                <div class="p-6 bg-gris_clair font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent uppercase">Secondary </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing">Color
                                        </p>
                                        <p class="text-sm text-blanc_impur font-extrabold uppercase letter_spacing ">Grey
                                        </p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent uppercase">#818181</p>
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
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-mitr font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">tools </span> <br /> <span class="font-bold">
                                    used </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl text-blanc_impur leading-7 mb-8 font-poppins">For this project,
                                different tools were used.
                                These tools were not imposed but were chosen judiciously to answer a precise task all along
                                the conception of the project.
                                There are digital tools related to design and layout but also related to web development.
                            </p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0 ">

                            <div class="lg:flex ">

                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2  flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Figma was used to make the layout
                                            of the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4 ">

                                        <img class="w-14" src="@/assets/img/figma_square.svg" alt="figma logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            Figma</p>

                                    </div>

                                </div>
                                <div
                                    class="card  relative p-6  bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default border-black ">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">HTML was the language used to
                                            hierarchize the elements of the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/html.svg" alt="html logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            html</p>

                                    </div>

                                </div>
                            </div>
                            <div class="lg:flex">
                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">CSS was used to give a unique style
                                            to the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/css3.svg" alt="css logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            css</p>

                                    </div>

                                </div>
                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">PHP was used to create and call
                                            functions and data</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/php.svg" alt="php logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            php</p>

                                    </div>

                                </div>


                            </div>
                            <div class="lg:flex">
                                <div
                                    class="card relative p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default lg:border-r-default border-black">


                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Wordpress was the CMS used to allow
                                            an easier management of the website</p>

                                    </div>
                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/wordpress.svg" alt="wordpress logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            Wordpress
                                        </p>

                                    </div>

                                </div>


                                <div
                                    class=" relative card p-6 bg-blanc_impur font-poppins lg:w-1/2 flex justify-center items-center flex-col border-b-default  border-black">

                                    <div class="bloc_hover p-6">

                                        <p class=" text-sm text-blanc_impur font-bold  ">Illustrator was used to make the
                                            logo and various graphic elements</p>

                                    </div>

                                    <div class="flex justify-center items-center flex-col space-y-4">

                                        <img class="w-14" src="@/assets/img/adobe_illustrator.svg"
                                            alt="adobe illustrator logo">
                                        <p
                                            class="text-sm text-noir_impur font-extrabold uppercase letter_spacing light_anim3">
                                            Illustrator</p>

                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </section>


            <section class="mt-20 pb-20">
                <div class="max-w-max m-auto ">
                    <img class="" src="@/assets/img/naknowledge_mobile.png" alt="naknowledge web site mobile example">
                </div>
            </section>


        </div>

    </div></template>

