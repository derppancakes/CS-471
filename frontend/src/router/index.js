import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:month/:day/:year',
      name: 'pastPuzzle',
      component: HomeView
    },
    {
      path: '/past-puzzles',
      name: 'past-puzzles',
      component: () => import('../views/PastPuzzlesView.vue'),
    },
    {
      path: '/leaderboards',
      name: 'leaderboards',
      component: () => import('../views/LeaderboardsView.vue'),
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('../views/AccountView.vue'),
    },
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
  ]
})

export default router
