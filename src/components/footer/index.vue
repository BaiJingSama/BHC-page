<template>
  <div class="w-full border-[#322645] border-t-1 bg-[#0e0024]">
    <div class="w-full flex justify-center items-center py-8">
      <img src="./images/footer-logo.png" alt="" class="w-20 max-w-[20vw] h-auto">
    </div>

    <div class="w-full flex justify-center items-center">
      <img :src="item.image" alt="" v-for="item in iconList" :key="item.image" :class="item.class">
    </div>

    <div class="w-full flex justify-center items-center py-5">
      <span class="text-[#9f99a7] text-sm">{{ $t('footer.bottomText') }}</span>
    </div>

    <div class="w-full flex justify-center items-center pt-2 pb-12">
      <img src="./images/footer-bar-image.png" alt="" class="w-80 max-w-[80vw] h-auto">
    </div>
  </div>
</template>

<script lang="ts" setup>
import xIcon from './images/x-icon.png'
import tgIcon from './images/tg-icon.png'
import dcIcon from './images/dc-icon.png'
import emailIcon from './images/email-icon.png'

const iconList = [
  {
    image: xIcon,
    class: ['w-8', 'max-w-[8vw]', ' h-auto', 'mr-3']
  },
  {
    image: tgIcon,
    class: ['w-8', 'max-w-[8vw]', ' h-auto, mr-3']
  },
  // {
  //   image: dcIcon,
  //   class: ['w-8', 'max-w-[8vw]', ' h-auto, mr-3']
  // },
  {
    image: emailIcon,
    class: ['w-8', 'max-w-[8vw]', ' h-auto']
  }
]
</script>

<style lang="scss" scoped></style>