import { createRouter, createWebHistory } from 'vue-router';
import Exercise from '../components/content/Exercise.vue';
import Test from '../components/content/Test.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Exercise
    },
    {
      path: '/test',
      name: 'test',
      component: Test
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
