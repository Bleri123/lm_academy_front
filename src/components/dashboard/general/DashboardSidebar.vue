<script setup>
import { useUserStore } from '@/stores/useUserStore'

const userStore = useUserStore()

const handleLogout = () => {
  userStore.logout()
}
</script>

<template>
  <aside
    id="application-sidebar-brand"
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transform hidden xl:block xl:translate-x-0 xl:end-auto xl:bottom-0 fixed xl:top-5 xl:left-auto top-0 left-0 with-vertical h-screen z-[999] shrink-0 w-[270px] shadow-md xl:rounded-md rounded-none bg-white left-sidebar transition-all duration-300 overflow-y-auto"
  >
    <!-- ---------------------------------- -->
    <!-- Start Vertical Layout Sidebar -->
    <!-- ---------------------------------- -->
    <div class="p-4">
      <a href="../" class="text-nowrap">
        <img src="../../../assets/images/logos/logo-light.svg" alt="Logo-Dark" />
      </a>
    </div>
    <div class="scroll-sidebar">
      <nav class="w-full flex flex-col sidebar-nav px-4 mt-5">
        <ul id="sidebarnav" class="text-gray-600 text-sm">
          <li class="text-xs font-bold pb-[5px]">
            <i class="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
            <span class="text-xs text-gray-400 font-semibold">HOME</span>
          </li>

          <li class="sidebar-item">
            <router-link
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              :to="{ name: 'Dashboard' }"
            >
              <i class="ti ti-layout-dashboard ps-2 text-2xl"></i> <span>Dashboard</span>
            </router-link>
          </li>

          <li class="text-xs font-bold mb-4 mt-6">
            <i class="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
            <span class="text-xs text-gray-400 font-semibold">UI COMPONENTS</span>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../components/buttons.html"
            >
              <i class="ti ti-article ps-2 text-2xl"></i> <span>Buttons</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../components/alerts.html"
            >
              <i class="ti ti-alert-circle ps-2 text-2xl"></i> <span>Alerts</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../components/cards.html"
            >
              <i class="ti ti-cards ps-2 text-2xl"></i> <span>Card</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../components/forms.html"
            >
              <i class="ti ti-file-description ps-2 text-2xl"></i> <span>Forms</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../components/typography.html"
            >
              <i class="ti ti-typography ps-2 text-2xl"></i> <span>Typography</span>
            </a>
          </li>

          <li class="text-xs font-bold mb-4 mt-8">
            <i class="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
            <span class="text-xs text-gray-400 font-semibold">AUTH</span>
          </li>

          <li v-if="userStore.user.roles?.[0]?.name === 'Admin'" class="sidebar-item">
            <router-link
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              :to="{ name: 'DashboardSendRegistrationInvite' }"
            >
              <i class="ti ti-user-plus ps-2 text-2xl"></i>
              <span>Send Registration Invite</span>
            </router-link>
          </li>

          <li v-if="userStore.user.roles?.[0]?.name === 'Admin'" class="sidebar-item">
            <router-link
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              :to="{ name: 'CourseAdmin' }"
            >
              <i class="ti ti-user-plus ps-2 text-2xl"></i>
              <span>Course Admin</span>
            </router-link>
          </li>

          <li v-if="userStore.user.roles?.[0]?.name === 'User'" class="sidebar-item">
            <router-link
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              :to="{ name: 'CourseUser' }"
            >
              <i class="ti ti-user-plus ps-2 text-2xl"></i>
              <span>Course User</span>
            </router-link>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              @click="handleLogout()"
            >
              <i class="ti ti-login ps-2 text-2xl"></i> <span>Logout</span>
            </a>
          </li>

          <li class="text-xs font-bold mb-4 mt-8">
            <i class="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
            <span class="text-xs text-gray-400 font-semibold">EXTRA</span>
          </li>

          <li class="sidebar-item">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../pages/icons.html"
            >
              <i class="ti ti-mood-happy ps-2 text-2xl"></i> <span>Icons</span>
            </a>
          </li>

          <li class="sidebar-item pb-10">
            <a
              class="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative rounded-md text-gray-500 w-full"
              href="../pages/sample-page.html"
            >
              <i class="ti ti-aperture ps-2 text-2xl"></i> <span>Sample Page</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- </aside> -->
  </aside>
</template>
