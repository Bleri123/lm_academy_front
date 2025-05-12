import { useUserStore } from '@/stores/useUserStore'
import { createRouter, createWebHistory } from 'vue-router'
import fetchCurrentUser from '@/utils/fetchCurrentUser'
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
          meta: {
            visitor: true,
          },
        },
        {
          path: 'privacy-policy',
          name: 'privacyPolicy',
          component: () => import('@/components/default/PrivacyPolicy.vue'),
          meta: {
            visitor: true,
          },
        },
        {
          path: 'terms-of-service',
          name: 'termsOfService',
          component: () => import('@/components/default/TermsOfService.vue'),
          meta: {
            visitor: true,
          },
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/components/default/ContactPage.vue'),
          meta: {
            visitor: true,
          },
        },
        {
          path: 'about-us',
          name: 'aboutUs',
          component: () => import('@/components/default/AboutUsPage.vue'),
          meta: {
            visitor: true,
          },
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
        {
          path: 'send-registration-invite',
          name: 'DashboardSendRegistrationInvite',
          component: () => import('@/views/Dashboard/SendRegistrationInviteView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const localStorageToken = localStorage.getItem('lm_access_token')
  let isUserLoggedIn = userStore?.isUserLoggedIn
  let storeUser = userStore?.user

  console.log('storeUser', storeUser)

  if (localStorageToken && storeUser != undefined) {
    fetchCurrentUser().then((user) => {
      console.log('user', user.user)
      userStore.setUser(user.user)
      isUserLoggedIn = true
    })
  }

  return next()
})
export default router
