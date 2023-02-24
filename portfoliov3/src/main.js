import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

//animation de changement de couleur quand on refresh la page :
window.addEventListener('load', () => {
    const colors = ['#98F1C6', '#F19898', '#BF98F1']; // Ajoutez les couleurs que vous souhaitez utiliser ici
  
    /* Génère une couleur aléatoire */
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    /* Sélectionne tous les éléments ayant la classe "random-color" */
    const elements = document.querySelectorAll('.random-color');
  
    /* Pour chaque élément, applique la même couleur aléatoire */
    elements.forEach((element) => {
      element.style.color = randomColor;
    });
  });
  



  // Sélectionne la première div avec la classe "border-t-2"
const borderDiv = document.querySelector('.border-t-2');

// Crée une instance de IntersectionObserver
const observer = new IntersectionObserver(entries => {
  // Vérifie chaque entrée
  entries.forEach(entry => {
    // Si la div est visible à l'écran
    if (entry.intersectionRatio > 0) {
      // Ajoute la classe "animate"
      borderDiv.classList.add('animate');
      // Arrête l'observation pour cette entrée
      observer.unobserve(entry.target);
    }
  });
});

// Commence à observer la div
observer.observe(borderDiv);
