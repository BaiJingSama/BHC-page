<template>
  <div class="relative bg-[#0e0024]">
    <HeaderComponent />

    <main class="">
      <router-view />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/header/index.vue'
import FooterComponent from './components/footer/index.vue'
</script>

