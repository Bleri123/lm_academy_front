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
          meta: {
            unauthorized: true,
          },
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/Auth/RegisterView.vue'),
          meta: {
            unauthorized: true,
          },
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
          meta: {
            isAuthorized: true,
          },
        },
        {
          path: 'users-lists',
          name: 'DashboardUserlist',
          component: () => import('@/views/Dashboard/UserList.vue'),
          meta: {
            isAuthorized: true,
          },
        },
        {
          path: 'send-registration-invite',
          name: 'DashboardSendRegistrationInvite',
          component: () => import('@/views/Dashboard/SendRegistrationInviteView.vue'),
          meta: {
            forAdmin: true,
            isAuthorized: true,
          },
        },
        {
          path: 'admin/course-admin',
          name: 'CourseAdmin',
          component: () => import('@/views/Dashboard/Admin/CourseAdminView.vue'),
          meta: {
            forAdmin: true,
            isAuthorized: true,
          },
        },
        {
          path: 'user/course-user',
          name: 'CourseUser',
          component: () => import('@/views/Dashboard/User/CourseUserView.vue'),
          meta: {
            forUser: true,
            isAuthorized: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = localStorage.getItem('lm_access_token')
  let isUserLoggedIn = userStore?.isUserLoggedIn
  let storeUser = userStore?.user

  console.log('storeUser', storeUser)

  if (isAuthenticated) {
    if (to.meta.unauthorized) {
      next({ name: 'Dashboard' })
      return
    }

    if (Object.keys(storeUser).length === 0) {
      try {
        const user = await fetchCurrentUser()
        console.log('user', user.user)
        userStore.setUser(user.user)
        storeUser = user.user
        isUserLoggedIn = true
      } catch (error) {
        console.error('Error fetching user:', error)
        return next({ name: 'Login' })
      }
    }

    if (to.meta.forAdmin) {
      console.log('user role', storeUser?.roles?.[0]?.name)

      const isAdmin = storeUser?.roles?.[0]?.name === 'Admin'

      if (!isAdmin) {
        next({ name: 'Dashboard' })
        return
      }
    }

    if (to.meta.forUser) {
      console.log('user role', storeUser?.roles?.[0]?.name)

      const isUser = storeUser?.roles?.[0]?.name === 'User'

      if (!isUser) {
        next({ name: 'Dashboard' })
        return
      }
    }
  }

  if (!isAuthenticated && to.meta.isAuthorized) {
    next({ name: 'home' })
    return
  }

  return next()
})

export default router
