<template>
  <div class="p-8">
    <el-button type="primary" @click="toHome">回首页</el-button>
    <h1 class="text-4xl font-bold mt-4">Vue 3 + Element Plus + TailwindCSS</h1>
    <div class="text-blue-500 text-xl font-bold">Tailwind 生效了！</div>
    <div class="text-base md:text-lg lg:text-xl">
      响应式文字大小
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss"></style>