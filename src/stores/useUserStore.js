import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Axios from '@/utils/axios'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const isUserLoggedIn = ref(false)
  const router = useRouter()

  function setUser(userData) {
    user.value = userData
    isUserLoggedIn.value = true
  }

  async function logout() {
    try {
      await Axios.post('/auth/logout')
      localStorage.removeItem('lm_access_token')

      user.value = {}
      isUserLoggedIn.value = false

      router.push('/')
    } catch (error) {
      console.log('logout error', error)
    }
  }

  return { user, isUserLoggedIn, setUser, logout }
})
