<template>
  <div class="w-full">
    <el-carousel arrow="always" :interval="3000" :height="carouselHeight">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <img ref="carouselImgs" @load="onImgLoad(index)" :src="item" alt="" class="w-full h-auto block">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import carouselImage1 from './images/carousel-1.png'
// import { useRouter } from 'vue-router'
// const router = useRouter()
// const changeRoute = (path: string) => {
//   router.push(`/${path}`)
// }


const carouselList = ref([
  carouselImage1,
  carouselImage1,
  carouselImage1
])

const carouselHeight = ref('0px')

// 保存图片 refs
const carouselImgs = ref([])

const onImgLoad = async (index) => {
  // 只在第一张图片加载后设置高度（避免多次抖动）
  if (carouselHeight.value !== '0px') return

  await nextTick()

  const img = carouselImgs.value[index]
  if (!img) return

  const height = img.clientHeight
  carouselHeight.value = height + 'px'
}
</script>

<style scoped lang="scss">
::v-deep .el-carousel__container {
  z-index: 1;
}

::v-deep .el-carousel__arrow {
  background-color: transparent !important;
  top: 65% !important;

  i svg {
    color: #b15cff;
    filter:
      drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 20px #b15cff) drop-shadow(0 0 40px #b15cff) drop-shadow(0 0 60px #b15cff);
  }
}

::v-deep .el-carousel__arrow--right {
  right: 10px !important;
}

::v-deep .el-carousel__arrow--left {
  left: 10px !important;
}
</style>