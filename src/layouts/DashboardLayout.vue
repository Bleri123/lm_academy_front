<script setup>
import DashboardSidebar from '@/components/dashboard/general/DashboardSidebar.vue'
import DashboardHeader from '@/components/dashboard/general/DashboardHeader.vue'
</script>
<template>
  <main>
    <!--start the project-->
    <div id="main-wrapper" class="flex p-5 xl:pr-0 min-h-screen">
      <DashboardSidebar />
      <div class="w-full page-wrapper xl:px-6 px-0">
        <!-- Main Content -->
        <main class="h-full max-w-full">
          <div class="container full-container p-0 flex flex-col gap-6">
            <!--  Header Start -->
            <DashboardHeader />
            <!--  Header End -->
            <router-view />
          </div>
        </main>
        <!-- Main Content End -->
      </div>
    </div>
    <!--end of project-->
  </main>
</template>
