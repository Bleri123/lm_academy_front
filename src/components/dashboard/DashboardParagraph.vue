<script setup>
import Axios from '@/utils/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleUserProfile = async () => {
  try {
    const response = await Axios.get('/auth/user-profile')

    console.log('response: ', response)
  } catch (error) {
    console.log('error on catch: ', error)
  }
}

const handleSendRegistrationInvite = () => {
  router.push('/dashboard/send-registration-invite')
}
</script>
<template>
  <h6 class="text-lg text-gray-500 font-semibold mb-6">Course Page</h6>

  <button @click="handleUserProfile">Fetch User data</button>

  <div class="row">
    <div class="flex">
      <button @click="handleSendRegistrationInvite">redirect to send registration invite</button>
    </div>
  </div>
</template>
