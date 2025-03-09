<template>
  <div>
    <h1>Hello World {{ message }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Bleon Nasufi learning Vue.js')

setTimeout(() => {
  message.value = 'Bleon Nasufi also learning PHP'
}, 5000)
</script>

<style>
h1 {
  color: skyblue;
}
</style>
