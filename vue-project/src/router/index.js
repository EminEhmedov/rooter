import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import AboutVue from '../components/About.vue'
import PriceVue from '../components/Price.vue'
import ProductVue from '../components/Product.vue'
import ContactVue from '../components/contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name:'Home',
      component: HomeVue
    },
    {
      path : '/about',
      name:'About',
      component: AboutVue
    },
    {
      path : '/contact',
      name:'Contact',
      component: ContactVue
    },
    {
      path : '/product',
      name:'Product',
      component: ProductVue
    },
    {
      path : '/price',
      name:'Price',
      component: PriceVue
    },
  ]
})

export default router
