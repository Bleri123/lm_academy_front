<template>
  <header>
    <div class="flex justify-between items-center border-b-4 border-textPrimary py-4">
      <h1 class="logo text-5xl text-textPrimary">LM Academy</h1>
      <nav class="text-3xl flex gap-2">
        <router-link :to="{ name: 'home' }" exact-active-class="border-b-textPrimary border-b-2"
          >Home</router-link
        >
        <span>|</span>
        <router-link :to="{ name: 'aboutUs' }" exact-active-class="border-b-textPrimary border-b-2"
          >About Us</router-link
        >
        <span>|</span>
        <router-link to="/login" exact-active-class="border-b-textPrimary border-b-2"
          >Login</router-link
        >
      </nav>
    </div>
  </header>
</template>
