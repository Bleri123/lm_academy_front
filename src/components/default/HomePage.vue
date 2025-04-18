<script setup>
import { onMounted, ref } from 'vue'

const quote = ref('')
const author = ref('')

const fetchZenQoutes = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/zen-quote')
    const data = await response.json()
    console.log('response', data)

    if (data.success) {
      quote.value = data.quote.text
      author.value = data.quote.author
    } else {
      quote.value = "The world would go on even without you. Don't take yourself so seriously"
      author.value = 'Norman Vincent Peale'
    }
  } catch (error) {
    console.error('Error fetching quote:', error)
  }
}
onMounted(() => {
  fetchZenQoutes()
})
</script>

<template>
  <!-- content start -->
  <div class="h-full flex flex-col justify-around">
    <div class="welcome-message flex justify-center">
      <div class="w-[250px] md:w-[450px] text-center">
        <h1 class="text-3xl">
          Welcome to LM Academy Empowering Students with the Skills of Tomorrow
        </h1>
      </div>
    </div>
    <div class="api-quote flex justify-end">
      <div class="w-[250px] md:w-[450px] text-end space-y-4 text-2xl">
        <h1 class="italic font-gelasio text-[#003366]">
          {{ quote || 'Loading...' }}
        </h1>
        <p class="text-[#8694a9]">{{ author || 'Loading...' }}</p>
      </div>
    </div>
  </div>
  <!-- content end -->
</template>
