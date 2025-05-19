<script setup>
import { ref } from 'vue'
import Axios from '@/utils/axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/useUserStore'
import { toast } from 'vue3-toastify'

const email = ref('')
const password = ref('')
const router = useRouter()

const userStore = useUserStore()

const handleSubmit = async () => {
  try {
    const data = {
      email: email.value,
      password: password.value,
    }

    const response = await Axios.post('/auth/login', data)

    if (response.status == 200) {
      const access_token = response?.data?.access_token

      const authUser = response?.data?.user

      localStorage.setItem('lm_access_token', access_token)

      userStore.setUser(authUser)
      router.push('/dashboard')

      const getRoles = await Axios.get('/auth/user-profile', data)
    }

    console.log('response', response)
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error.response.data.message)
  }
}
</script>
<template>
  <div class="justify-center items-center w-full card lg:flex max-w-md">
    <div class="w-full card-body">
      <a href="../" class="py-4 block"
        ><img src="../../assets/images/logos/logo-light.svg" alt="" class="mx-auto"
      /></a>
      <p class="mb-4 text-gray-400 text-sm text-center">Your Social Campaigns</p>
      <!-- form -->
      <form @submit.prevent="handleSubmit">
        <div>
          <!-- Email -->
          <div class="mb-4">
            <label for="forEmail" class="block text-sm mb-2 text-gray-400">Email</label>
            <input
              v-model="email"
              type="email"
              id="forEmail"
              class="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
              aria-describedby="hs-input-helper-text"
              required
              placeholder="Enter your email"
            />
          </div>
          <!-- password -->
          <div class="mb-6">
            <label for="forPassword" class="block text-sm mb-2 text-gray-400">Password</label>
            <input
              v-model="password"
              type="password"
              id="forPassword"
              class="py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-blue-600 focus:ring-0"
              aria-describedby="hs-input-helper-text"
              required
              placeholder="Enter your password"
            />
          </div>
          <!-- checkbox -->
          <div class="flex justify-between">
            <div class="flex">
              <input
                type="checkbox"
                class="shrink-0 mt-0.5 border-gray-200 rounded-[4px] text-blue-600 focus:ring-blue-500"
                id="hs-default-checkbox"
                checked
              />
              <label for="hs-default-checkbox" class="text-sm text-gray-500 ms-3"
                >Remember this Device</label
              >
            </div>
            <a href="../" class="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >Forgot Password ?</a
            >
          </div>
          <!-- button -->
          <div class="grid my-6">
            <button class="btn py-[10px] text-base text-white font-medium hover:bg-blue-700">
              Sign In
            </button>
          </div>

          <div class="flex justify-center gap-2 items-center">
            <p class="text-base font-semibold text-gray-400">New to Spike?</p>
            <a
              href="./authentication-register.html"
              class="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >Create an account</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
