import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships-list',
    name: 'starships-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StarshipsListView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.logedin) {
        next();
      } else {
        next();
        // next(false);
      }
    }
  },
  {
    path: '/starship',
    name: 'starship',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StarshipView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.logedin) {
        next();
      } else {
        next();
        // next(false);
      }
    }
  },
  {
    path: '/characters-list',
    name: 'characters-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CharactersListView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.logedin) {
        next();
      } else {
        next();
        // next(false);
      }
    }
  },
  {
    path: '/character',
    name: 'character',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CharacterView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.logedin) {
        next();
      } else {
        next();
        // next(false);
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router