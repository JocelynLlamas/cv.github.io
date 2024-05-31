import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Details from './pages/Details.vue'
import Contact from './pages/Contact.vue'
import PageNotFound from './pages/PageNotFound.vue'
import Pay from './pages/Pay.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    }, 
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
