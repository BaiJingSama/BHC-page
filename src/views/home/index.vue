<template>
  <div class="p-8">
    <el-button type="primary" @click="changeRoute('notice')">去公告页</el-button>
    <el-button type="primary" @click="changeRoute('downGame')">去下载游戏</el-button>
    <el-button type="primary" @click="changeRoute('recommendBh')">去了解BH</el-button>
    <el-button type="primary" @click="changeRoute('recommendIntegration')">去积分系统</el-button>
    <el-button type="primary" @click="changeRoute('recommendGame')">去游戏介绍</el-button>
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
const changeRoute = (path: string) => {
  router.push(`/${path}`)
}
</script>

<style scoped lang="scss"></style>