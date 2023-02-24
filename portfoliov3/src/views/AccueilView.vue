<template>
  <div>

    <div class="cursor"></div>
    <div class="noise"></div>
    <div id="container" > 
    



      <div class="flex items-center flex-col justify-center h-screen random-color ">  
        
        
        <div class="flex justify-center mb-5">
          <p class="font-poppins text-xl md:text-7xl 2xl:text-5rem uppercase text-vert_clair random-color animation_text letter_spacing">hello, i am</p>
        </div>
  
  
      <div class="ligne0 mt-2 mb-1 border-default border-blanc_impur w-20 md:w-384px "></div>
  
  
  
      <div class="flex justify-center  ">
        <p class=" text-blanc_impur font-marxure uppercase text-4xl md:text-9xl md:mb-5 david_anim ">David</p>
      </div>
 

    
      <div class="ligne1 mt-4 mb-1 border-default border-blanc_impur w-20 md:w-384px "></div>
  

      <div class="flex justify-center items-center text-center random-color mt-5 ">
          <p class="font-poppins text-xl md:text-5xl lg:text-5xl 2xl:text-5rem uppercase text-vert_clair random-color animation_text2 tracking-widest letter_spacing">a french web designer &<br/> front-end developer</p>
      </div>

      <div class="flex justify-center items-center mt-20">
        <p class="font-poppins text-base md:text-26 uppercase text-blanc_impur mt-12 light_anim ">discover</p>
      </div>


  </div>

    </div>

  </div>
</template>

<script >
export default{
  name: "App",
  mounted() {
    //constante pour le curseur
    const cursor = document.querySelector('.cursor');

    //ici j'ajoute l'événement mousemove au document et cela "traque" les mouvements de la souris sur X et Y:
    document.addEventListener('mousemove', e => {
      //setAttribute permet de modifier les attributs de top et left quand la souris se déplace
      cursor.setAttribute('style', 'top:'+(e.pageY - 5)+"px; left:"+(e.pageX -5)+"px;")
      })

      //ici j'ajoute l'événément click pour ajouter une class expand pour jouer l'animation du clique.
    document.addEventListener('click', () =>{
      cursor.classList.add('expand');

      //ici je retire la classe expand après 500ms tout simplement
      setTimeout(()=>{
        cursor.classList.remove('expand');
      }, 500)
    })

    },
  }

</script>