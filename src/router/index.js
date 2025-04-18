import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'defaultLayout',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomePageView.vue'),
        },
        {
          path: 'privacy-policy',
          name: 'privacyPolicy',
          component: () => import('@/components/default/PrivacyPolicy.vue'),
        },
        {
          path: 'terms-of-service',
          name: 'termsOfService',
          component: () => import('@/components/default/TermsOfService.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/components/default/ContactPage.vue'),
        },
      ],
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/Errors/NotFound.vue'),
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/Auth/LoginView.vue'),
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Auth/RegisterView.vue'),
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'DashboardLayout',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard/DashboardView.vue'),
        },
        {
          path: 'users-lists',
          name: 'DashboardUserlist',
          component: () => import('@/views/Dashboard/UserList.vue'),
        },
      ],
    },
  ],
})

export default router
