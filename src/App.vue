<template>
  <div>
    <h1 class="text-3xl font-bold underline text-sky-500">Hello World {{ message }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Bleon Nasufi learning Vue.js')

setTimeout(() => {
  message.value = 'Bleon Nasufi also learning PHP'
}, 5000)
</script>
