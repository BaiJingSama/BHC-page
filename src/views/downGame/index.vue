<template>
  <div class="p-8">
    <el-button type="primary" @click="toHome">{{ t('downGame.title') ? '回首页' : '回首页' }}</el-button>
    <h1 class="text-4xl font-bold mt-4">Vue 3 + Element Plus + TailwindCSS</h1>
    <div class="text-blue-500 text-xl font-bold">{{ t('downGame.title') }}</div>
    <div class="text-base md:text-lg lg:text-xl">
      {{ t('downGame.intro') }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const toHome = () => {
  router.push('/')
}

// 使用模块化 i18n（全局作用域）
const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped lang="scss"></style>