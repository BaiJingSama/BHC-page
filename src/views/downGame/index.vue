<template>
  <div class="w-full relative bg-[#000000] pt-30 h-auto">
    <img src="./images/game-down-bg.png" alt="" class="w-full h-auto block" />

    <!-- 示例性使用模块化翻译 -->
    <!-- <div class="w-full absolute top-6 left-0 flex flex-col items-center text-white text-sm">
      <div class="font-bold text-lg">{{ t('downGame.title') }}</div>
      <div class="text-[#9f99a7] text-xs mt-1">{{ t('downGame.intro') }}</div>
    </div> -->

    <div class="absolute top-8 left-0 w-full px-5 pt-24 flex flex-col items-center">
      <div class="flex justify-center px-6">
        <span class="text-[#AB60FF] text-5xl font-bold tracking-[.05em]">{{ $t('downGame.title') }}</span>
      </div>

      <div class="w-full flex justify-center">
        <!-- <img src="./images/league-bg.png" alt="" class="w-[140vw] max-w-none h-auto" style="min-width:600px;" /> -->
        <div class="text-[#9f99a7] flex flex-col item-center justify-center  text-xs z-10 pt-8 text-center">
          <span class="py-0.5">{{ $t('downGame.doc1') }}</span>
          <span class="py-0.5">{{ $t('downGame.doc2') }}</span>
          <span class="py-0.5">{{ $t('downGame.doc3') }}</span>
          <span class="py-0.5">{{ $t('downGame.doc4') }}</span>
        </div>
      </div>

      <img src="./images/people.png" alt="" class="w-75 max-w-[75vw] h-auto mt-10">
    </div>



    <div class="w-full absolute bottom-15 left-0 flex items-center justify-center text-white text-xs">
      <div class="px-6 py-3 rounded-lg mr-8 bg-[#ab60ff]">{{ $t('downGame.iosButton') }}</div>
      <div class="px-6 py-3 rounded-lg bg-[#ab60ff]">{{ $t('downGame.androidButton') }}</div>
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