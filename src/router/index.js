import { createRouter, createWebHistory } from 'vue-router'
import StarshipsListView from '../views/StarshipsListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StarshipsListView
  },
  {
    path: '/starship',
    name: 'starship',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StarshipView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
