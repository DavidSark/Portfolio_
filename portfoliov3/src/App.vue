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

</script>