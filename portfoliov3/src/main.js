import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

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
  
