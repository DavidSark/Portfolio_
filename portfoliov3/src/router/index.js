import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import TestView from '../views/TestView.vue'
import NaknowledgeView from '../views/NaknowledgeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/works', name: 'Works', component: WorksView},
    { path: '/test', name: 'Test', component: TestView},
    { path: '/naknow', name: 'Naknowledge', component: NaknowledgeView},
    { path: '/about', name: 'About', component: AboutView},
    

    // ici les autre routes
  ],
  scrollBehavior (to, from, savedPosition) {
  
    return { left: 0, top: 0 }
    
  }
  
})

export default router
