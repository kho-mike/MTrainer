import { createRouter, createWebHistory } from 'vue-router';
import Exercise                           from '@/components/pages/Exercise.vue';
import Test                               from '@/components/pages/Test.vue';
import Login                              from '@/components/pages/Login.vue';
import Reg                                from '@/components/pages/Reg.vue';
import Settings                           from '@/components/pages/Settings.vue';
import Modes                              from '@/components/pages/Modes.vue';
import Mode                               from '@/components/pages/Mode.vue';

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/modes',
      name: 'modes',
      component: Modes
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mode',
      name: 'mode',
      component: Mode
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/new',
      name: 'new',
      // component: New,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/pages/New.vue')
    }
  ]
})

export default router
