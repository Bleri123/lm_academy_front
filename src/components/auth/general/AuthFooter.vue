<script setup></script>

<template>
  <div class="absolute bottom-0 left-0 ml-[25px] mb-[21px]">
    <div class="flex gap-3 text-[#0085DB]">
      <router-link class="hover:text-[#5a48ff]" :to="{ name: 'privacyPolicy' }"
        >Privacy Policy</router-link
      >
      <router-link class="hover:text-[#5a48ff]" :to="{ name: 'termsOfService' }"
        >Terms of Service</router-link
      >
    </div>
  </div>
</template>
