<script setup>
import HeaderDefault from '../components/default/general/HeaderDefault.vue'
import FooterDefault from '../components/default/general/FooterDefault.vue'
</script>

<template>
  <main class="px-4">
    <!-- header start -->
    <HeaderDefault />
    <!-- header end -->

    <!-- content start -->
    <router-view class="wrapper min-h-[calc(100vh-10rem)]" />
    <!-- content end -->

    <!-- Footer start -->
    <FooterDefault />
    <!-- Footer end -->
  </main>
</template>
