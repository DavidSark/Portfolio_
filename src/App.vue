<template>
 
  <RouterView v-slot="{Component}">

    <transition name="fade" mode="out-in" >
      <Component :is="Component"/>
    </transition>

  </RouterView>


</template>


<style >


.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
transition: opacity 0.5s ease-out;;
}
</style>

<script>
// export default{
//   name: "App",
//   mounted() {
//     //constante pour le curseur
//     const cursor = document.querySelector('.cursor');
//     //ici j'ajoute l'événement mousemove au document et cela "traque" les mouvements de la souris sur X et Y:
//     document.addEventListener('mousemove', e => {
//       //setAttribute permet de modifier les attributs de top et left quand la souris se déplace
//       cursor.setAttribute('style', 'top:'+(e.pageY - 5)+"px; left:"+(e.pageX -5)+"px;")
//       })
//       //ici j'ajoute l'événément click pour ajouter une class expand pour jouer l'animation du clique.
//     document.addEventListener('click', () =>{
//       cursor.classList.add('expand');
//       //ici je retire la classe expand après 500ms tout simplement
//       setTimeout(()=>{
//         cursor.classList.remove('expand');
//       }, 500)
//     })
//     },
  
  
//   }
</script>