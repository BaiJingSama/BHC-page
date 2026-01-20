<template>
  <div class="w-full relative bg-[#0e0024] pt-30 h-auto">
    <img src="./images/game-down-bg.png" alt="" class="w-full h-auto block" />

    <!-- 示例性使用模块化翻译 -->
    <div class="w-full absolute top-6 left-0 flex flex-col items-center text-white text-sm">
      <div class="font-bold text-lg">{{ t('downGame.title') }}</div>
      <div class="text-[#9f99a7] text-xs mt-1">{{ t('downGame.intro') }}</div>
    </div>

    <div class="w-full absolute bottom-10 left-0 flex items-center justify-center text-white text-xs">
      <div class="px-4 py-2.5 rounded-lg mr-8 bg-[#ab60ff]">IOS下载</div>
      <div class="px-4 py-2.5 rounded-lg bg-[#ab60ff]">安卓下载</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()

// 使用模块化 i18n（全局作用域）
const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped lang="scss"></style>