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
                        Askme</p>
                </div>

                <div class="ligne1 border-default border-blanc_impur "></div>

                <div class="flex justify-center items-center mt-16">
                    <a href="https://askme.melinaweb.fr/" target="_blank"
                        class="font-poppins text-base md:text-26 uppercase text-blanc_impur light_anim2 ">School project
                    </a>
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
                    <img src="@/assets/img/home_askme.png" alt="image of the website">
                    <a href="https://askme.melinaweb.fr/" target="_blank"
                        class=" absolute inset-x-0 flex flex-col bottom-0  mb-10  sm:mb-16  md:mb-20  items-center justify-end font-poppins text-base md:text-26 uppercase text-noir_impur letter_spacing light_anim3 ">Visit
                        the website</a>
                </div>
            </section>




            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">

                    <div class="lg:pr-14 flex flex-col justify-center ">

                        <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                            <span class=" bord_transparent font-extrabold">The</span> <br /> <span class="font-bold">
                                Project </span>
                        </h2>
                        <p class="pl-5 pr-5 lg:pl-0 text-base 2xl:text-xl text-blanc_impur leading-7 mb-8">Askme is a
                            school
                            project that was done by a group of three students. The goal was to create a website to help
                            students in their studies.<br /><br />

                            As part of this project, we developed the Askme promotional website, which outlines our values
                            and future features for Askme.
                        </p>

                    </div>
                </div>

            </section>

            <section class="mt-20">

                <div class="max-w-xl mx-auto items-center lg:max-w-7xl  lg:px-28">
                    <div class=" lg:grid lg:gap-x-0 lg:grid-cols-2 ">
                        <div class="lg:pr-14 flex flex-col  justify-center  ">

                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color">
                                <span class=" bord_transparent font-extrabold">Design &amp; </span> <br /> <span
                                    class="font-bold"> logo </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">For the logo, we chose to
                                use the first letter of the project name to make a typographic logo.
                                The first logo was a B because the project was originally called Blumee, but after further
                                reflection we decided to change the name and thus the logo.</p>

                        </div>

                        <div class="">
                            <div class="px-5 lg:px-0">
                                <div class="  ">
                                    <img src="@/assets/img/askme.png" alt="askme logo">
                                </div>
                                <div class=" flex">
                                    <img class="w-1/2 h-auto" src="@/assets/img/askme_old.png" alt="askme old logo">
                                    <img class="w-1/2 h-auto" src="@/assets/img/askme_new.png" alt="aksme new logo">
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
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">Font &amp; </span> <br /> <span
                                    class="font-bold"> Typography </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">First of all, Quicksand
                                is a modern, readable and user-friendly font. It is often used for headlines and titles
                                because of its large size and eye-catching appearance.<br /><br />

                                On the other hand, Raleway is an elegant and professional sans-serif font. It is easy to
                                read, even at small sizes, and its geometric structure makes it ideal for use on a website.
                                <br /><br />

                                Together, Quicksand and Raleway offer an effective combination for a website. The
                                combination of the two fonts makes it possible to highlight headings and titles while
                                maintaining high readability for running text. In addition, the difference in style between
                                the two fonts creates a visual contrast that helps structure the content of the
                                site.<br /><br />

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
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">Color </span> <br /> <span class="font-bold">
                                    palette </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">
                                First, bright blue is a vibrant, eye-catching color that can convey a sense of
                                confidence and professionalism. It is often used to draw attention to important elements and
                                create a dynamic atmosphere.
                                Soft clear blue is a calming color that can give a sense of tranquility
                                and calm.
                                <br/> <br/>

                                Black and white are classic and timeless colors that can give an impression of
                                professionalism. They are often used for running text, as it is easy to read and creates a
                                strong visual contrast with the background.  <br/> <br/>

                                Overall, the combination of these colors creates a harmonious and effective visual balance
                                for your website.
                            </p>
                        </div>

                        <div class="pl-5 pr-5 lg:pl-0 lg:pr-0">
                            <div class="p-6 bg-ask_blue_dark font-poppins">
                                <div class="mb-8">
                                    <p class="text-lg text-blanc_impur font-extrabold bord_transparent uppercase">Primary
                                    </p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing">Color</p>
                                    <p class="text-lg text-blanc_impur font-extrabold uppercase letter_spacing ">Dark Blue
                                    </p>

                                </div>


                                <div>

                                    <p class="text-xl text-blanc_impur font-extrabold bord_transparent uppercase">#3316E3
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
                                <div class="p-6 bg-ask_blue_clear font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent_noir uppercase">Secondary </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing">Color</p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing ">Clear
                                            Blue</p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent_noir uppercase">#77D1D7</p>
                                    </div>
                                </div>
                                <div class="p-6 bg-ask_grey font-poppins lg:w-1/2">
                                    <div class="mb-8">
                                        <p class="text-sm  font-extrabold bord_transparent_noir uppercase">Secondary </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing">Color
                                        </p>
                                        <p class="text-sm text-noir_impur font-extrabold uppercase letter_spacing ">Grey
                                        </p>

                                    </div>


                                    <div>

                                        <p class="text-xl font-extrabold bord_transparent_noir uppercase">#F6F6F6</p>
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
                            <h2 class=" pl-5 pr-5 lg:pl-0 text-4xl font-bold mb-8 text-vert_clair uppercase random-color ">
                                <span class=" bord_transparent font-extrabold">tools </span> <br /> <span class="font-bold">
                                    used </span>
                            </h2>
                            <p class="pl-5 pr-5 lg:pl-0 text-base text-blanc_impur leading-7 mb-8">To create the landing
                                page, some technical constraints were imposed. It was imperative to use Figma software to
                                model and set up a model of the site but it was also necessary to use the HTML markup
                                language for the hierarchization of elements but also CSS language to style the page in
                                accordance with the model.</p>
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

                                        <img class="w-14" src="@/assets/img/figma_square.svg" alt="figma logo">
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

                                        <img class="w-14" src="@/assets/img/html.svg" alt="html logo">
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
                                            to the website</p>

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
