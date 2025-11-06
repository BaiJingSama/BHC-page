<template>
  <div class="relative">
    <HeaderComponent />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import HeaderComponent from './components/header/index.vue'
</script>

