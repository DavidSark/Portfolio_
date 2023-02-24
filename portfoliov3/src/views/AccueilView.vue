<template>
  <div>

    <div class="cursor"></div>
    <div class="noise"></div>
    <div id="container" > 
    



      <div class="flex items-center flex-col justify-center h-screen random-color mt-5">   
        <div class="flex justify-center">
          <p class="font-poppins text-5rem uppercase text-vert_clair text_loose test random-color animation_text ">hello, i am</p>
        </div>
  
  
    <div class="ligne0 my-5 "></div>
  
  
  <div class="appear">
    <div class="flex justify-center ">
      <p class=" text-blanc_impur font-marxure uppercase text-9xl david_anim">David</p>
    </div>
  </div>

  
    <div class="ligne1 my-5"></div>
 

  <div class="flex justify-center items-center line_height text-center random-color    ">
    <p class="font-poppins text-5rem uppercase text-vert_clair text_loose font-light random-color animation_text2 ">a french web designer &<br/> front-end developer</p>
  </div>

  <div class="flex justify-center random-color    ">
    <p class="font-poppins text-26 uppercase text-vert_clair text_loose test mt-20 random-color letter_spacing invisible">discover</p>
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