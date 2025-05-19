<script setup>
import Axios from '@/utils/axios'

const handleUserProfile = async () => {
  try {
    const response = await Axios.get('/auth/user-profile')

    console.log('response: ', response)
  } catch (error) {
    console.log('error on catch: ', error)
  }
}
</script>
<template>
  <h6 class="text-lg text-gray-500 font-semibold mb-6">Course Page</h6>

  <button @click="handleUserProfile">Fetch User data</button>
</template>
