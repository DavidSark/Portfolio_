import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

console.log(AOS)

const app = createApp(App)

AOS.init();
AOS.refresh();

app.use(router)

app.mount('#app')


  //Smooth scroll lenis

  import Lenis from '@studio-freight/lenis'

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })
  
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


//animation de changement de couleur quand on refresh la page :
window.addEventListener('load', () => {
    const colors = ['#98F1C6', '#F19898', '#BF98F1','#98D6F1']; // Ajoutez les couleurs que vous souhaitez utiliser ici
  
    /* Génère une couleur aléatoire */
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    /* Sélectionne tous les éléments ayant la classe "random-color" */
    const elements = document.querySelectorAll('.random-color');
  
    /* Pour chaque élément, applique la même couleur aléatoire */
    elements.forEach((element) => {
      element.style.color = randomColor;
    });
  });
  
  elements.forEach((element) => {
    element.style.color = randomColor;
  });
  
  //Ajoutez cette ligne pour changer la couleur de base de l'animation
  const animEl = document.querySelector('.light_anim');
  animEl.style.color = randomColor;
  


 
  
  


