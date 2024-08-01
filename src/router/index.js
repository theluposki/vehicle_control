import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cars',
      name: 'cars',
      component: () => import('../views/cars/Cars.vue'),
      children: [
        { 
          path: '', 
          name: 'list-cars', 
          component: () => import('../views/cars/ListCars.vue')
        },
        { 
          path: 'add', 
          name: 'add-car', 
          component: () => import('../views/cars/AddCar.vue')
        },
        { 
          path: 'details/:id', 
          name: 'details-cars', 
          component: () => import('../views/cars/DetailsCar.vue'),
          params: true
        },
      ]
    }
  ]
})

export default router
