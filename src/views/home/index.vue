<template>
  <div class="bg-[#0e0024] overflow-auto overflow-x-hidden overflow-y-auto">
    <div class="w-full">
      <el-carousel ref="carouselRef" arrow="always" :interval="3000" :height="carouselHeight || '200px'"
        trigger="click">
        <el-carousel-item @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove"
          v-for="(item, index) in carouselList" :key="index">
          <img :ref="el => carouselImgs[index] = el" @load="onImgLoad(index)" :src="item" alt=""
            class="w-full h-auto block">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="w-full px-5 relative">
      <img src="./images/nano-images.png" alt="" class="absolute right-5 -top-4 w-42 max-w-[32vw] h-auto z-3" />


      <div class="flex flex-col px-5 py-10">
        <span class="text-[#AB60FF] text-4xl font-bold tracking-[.05em]"
          :class="[lang === 'en' ? 'english-title' : '']">{{
          $t('home.title') }}</span>
        <span class="text-[#9f99a7] text-xs pt-4 pr-25" :class="[lang === 'en' ? 'english-title' : '']">{{
          $t('home.intro') }}</span>
      </div>

      <div class="backdrop-filter px-4 text-xs w-full">
        <div class="w-full py-6 pt-8 flex flex-col items-center px-8">
          <img src="./images/home-introduce.png" alt="" class="w-64 max-w-[78vw] h-auto mb-4">
          <div>{{ $t('home.introDoc1') }}</div>
          <div>{{ $t('home.introDoc2') }}</div>
        </div>
        <div class="w-full pb-6 flex flex-col items-center text-center">
          <span class="xs-text">{{ $t('home.introDoc4') }}</span>
          <span class="xs-text">{{ $t('home.introDoc5') }}</span>
        </div>
      </div>
    </div>

    <!-- 獵人盲盒 -->

    <div class="w-full px-5 relative ">
      <div class="flex flex-col justify-center px-6 py-12 text-center">
        <span class=" text-4xl font-bold tracking-[.05em] text-[#AB60FF]"
          :class="[lang === 'en' ? 'english-title' : '']">{{ $t('home.HunterTitle')
          }}</span>
        <div class="text-white text-xs pt-3">{{ $t('home.HunterDoc') }}
        </div>
      </div>

      <img src="./images/home-bg-1.png" alt="" class="absolute left-3 top-20 w-100 max-w-[100vw] h-auto z-[1]">
    </div>

    <div class="w-full relative mt-20">
      <div class="absolute left-0 z-[2] float-slow will-change-transform">
        <img src="./images/home-card-1.png" class="w-22 max-w-[22vw] h-auto" />
      </div>

      <div class="absolute left-6 -top-8 z-[3] float-medium will-change-transform">
        <img src="./images/home-card-2.png" class="w-42 max-w-[42vw] h-auto" />
      </div>

      <!-- 中间这张：X 位移合并进动画里 -->
      <div class="absolute left-[50%] -top-14 z-[4] float-fast-center will-change-transform">
        <img src="./images/home-card-3.png" class="w-40 max-w-[40vw] h-auto" />
      </div>

      <div class="absolute right-6 -top-8 z-[3] float-medium will-change-transform">
        <img src="./images/home-card-4.png" class="w-42 max-w-[42vw] h-auto" />
      </div>

      <div class="absolute right-0 z-[2] float-slow will-change-transform">
        <img src="./images/home-card-5.png" class="w-22 max-w-[22vw] h-auto" />
      </div>
    </div>

    <div class="w-full flex items-center gap-8 mt-80 justify-center">
      <div class="flex flex-col items-center">
        <div class="w-25 h-25 relative rounded-full border-[#D687FF] border-[3px]">
          <img src="./images/box-1.png" alt="" class="absolute -left-1 top-0 w-25 max-w-[25vw] h-auto z-[1]">
        </div>
        <span class="pt-2 text-white text-xs">{{ $t('home.Box1') }}</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-25 h-25 relative rounded-full border-[#D687FF] border-[3px]">
          <img src="./images/box-2.png" alt="" class="absolute -left-1 top-0 w-25 max-w-[25vw] h-auto z-[1]">
        </div>
        <span class="pt-2 text-white text-xs">{{ $t('home.Box2') }}</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-25 h-25 relative rounded-full border-[#D687FF] border-[3px]">
          <img src="./images/box-3.png" alt="" class="absolute -left-1 top-0 w-25 max-w-[25vw] h-auto z-[1]">
        </div>
        <span class="pt-2 text-white text-xs">{{ $t('home.Box3') }}</span>
      </div>
    </div>

    <div class="w-full px-5 pt-10">
      <div class="backdrop-filter px-4 text-xs w-full">
        <p class="py-4 text-sm text-white font-bold flex justify-center text-center">{{
          $t('home.HunterText1') }}</p>
        <div class="w-full pb-6 flex flex-col items-center">
          <span class="xs-text pb-2">{{ $t('home.HunterText2') }}</span>
          <span class="xs-text pb-2">{{ $t('home.HunterText3') }}</span>
          <span class="xs-text ">{{ $t('home.HunterText4') }}</span>
        </div>
      </div>
    </div>

    <div class="w-full pt-10 flex items-center gap-2 justify-center">
      <!-- 左箭头：向右呼吸 -->
      <img src="./images/right-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-left" />

      <div class="w-35 py-3 text-center text-white text-sm font-bold bg">
        {{ $t('home.button1') }}
      </div>

      <!-- 右箭头：向左呼吸 -->
      <img src="./images/left-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-right" />
    </div>


    <!-- 游戏模式 -->
    <div class="w-full px-5">
      <div class="flex items-center justify-center pt-8 pb-4">
        <img :src="showModeData.img" alt="" class="w-84 max-w-[84vw] h-auto">
      </div>

      <div class="flex flex-col px-6">
        <span class="text-[#AB60FF] pb-4 text-4xl font-bold text-center english-title">{{
          $t('home.gameModel')
          }}</span>
      </div>

      <div class="w-full flex items-center gap-4 flex-wrap justify-center pt-6 text-white text-xs">
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 1 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 1">{{ $t('home.gameModelTitle1') }}</div>
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 2 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 2">{{ $t('home.gameModelTitle2') }}</div>
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 3 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 3">{{ $t('home.gameModelTitle3') }}</div>
      </div>

      <div class="flex flex-col gap-3 text-[#9f99a7] text-xs py-8 px-8">
        <div class="flex flex-col items-center text-center" v-if="showModeData.mode !== 3"
          v-for="(item, index) in showModeData.textList" :key="index">
          <span class="py-0.5" v-for="textItem in item" :key="textItem">{{ $t(textItem) }}</span>
        </div>
        <div class="flex flex-col items-center text-center" v-else v-for="(item) in showModeData.textList">
          <template v-for="textItem in item">
            <span class="px-2 py-0.5" v-if="!textItem.isTitle" :class="[textItem.leftIcon ? 'left-icon' : '']">
              {{ $t(textItem.text) }}
            </span>
            <span class="text-[#AB60FF] font-bold py-0.5" v-else>{{ $t(textItem.text) }}</span>
          </template>
        </div>
      </div>
    </div>


    <!-- 积分系统 -->
    <div class="w-full px-5">
      <div class="flex justify-center px-6 py-12 pb-12">
        <span class="text-[#AB60FF] flex items-center text-4xl font-bold tracking-[.05em]"
          :class="[lang === 'en' ? 'english-title' : '']">{{ $t('home.PointsTitle')
          }}</span>
      </div>

      <div class="flex justify-center w-full -mt-6">
        <img src="./images/integrating-image.png" alt="" class="w-90 max-w-[90vw] h-auto">
      </div>

      <div class="flex flex-col items-center text-center font-thin pt-10 px-12  text-[#9f99a7] text-xs">
        <span class="text-white font-bold pb-2">{{ $t('home.PointsDoc1') }}</span>
        <span class="py-0.5">{{ $t('home.PointsDoc2') }}</span>
        <span class="py-0.5">{{ $t('home.PointsDoc3') }}</span>
        <span class="py-0.5">{{ $t('home.PointsDoc4') }}</span>
        <span class="py-0.5">{{ $t('home.PointsDoc5') }}</span>
      </div>
    </div>

    <!-- 联盟生态 -->
    <div class="w-full px-5 pt-24">
      <div class="flex justify-center px-6">
        <span class="text-[#AB60FF] text-4xl font-bold tracking-[.05em]"
          :class="[lang === 'en' ? 'english-title' : '']">{{ $t('home.allianceTitle')
          }}</span>
      </div>

      <div class="w-full flex justify-center">
        <!-- <img src="./images/league-bg.png" alt="" class="w-[140vw] max-w-none h-auto" style="min-width:600px;" /> -->
        <div class="text-[#9f99a7] flex flex-col item-center justify-center  text-xs z-10 pt-8 text-center">
          <div class="py-3 font-bold text-white">{{
            $t('home.allianceDoc1') }}</div>
          <span class="py-0.5">{{ $t('home.allianceDoc2') }}</span>
          <span class="py-0.5">{{ $t('home.allianceDoc3') }}</span>
          <span class="py-0.5">{{ $t('home.allianceDoc4') }}</span>
          <span class="py-0.5">{{ $t('home.allianceDoc5') }}</span>
        </div>
      </div>

      <div class="w-full px-5 pt-20">
        <div
          class="text-[#9f99a7] backdrop-filter py-4 px-4 text-xs w-full flex flex-col items-center text-center relative pt-[160px]">
          <img src="./images/ecology-bg.png" alt=""
            class="w-60 max-w-[60vw] h-auto absolute -top-15 left-[50%] translate-x-[-50%]">
          <span class="py-0.5">{{ $t('home.allianceDoc6') }}</span>
          <span class="py-0.5">{{ $t('home.allianceDoc7') }}</span>
          <span class="py-0.5">{{ $t('home.allianceDoc8') }}</span>
        </div>
      </div>

      <div class="w-full pt-10 flex items-center gap-2 justify-center">
        <!-- 左箭头：向右呼吸 -->
        <img src="./images/right-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-left" />

        <div class="w-35 py-3 text-center text-white text-sm font-bold bg">
          {{ $t('home.allianceButton') }}
        </div>

        <!-- 右箭头：向左呼吸 -->
        <img src="./images/left-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-right" />
      </div>
    </div>

    <!-- 未来蓝图 -->
    <div class="w-full">
      <div class="flex flex-col justify-center px-6 py-12 text-center">
        <span class="text-[#AB60FF] text-4xl font-bold tracking-[.05em] english-title">{{ $t('home.RoadmapTitle')
          }}</span>
        <div class="text-white text-xs pt-4">{{ $t('home.RoadmapDoc') }}</div>
      </div>

      <div class="flex justify-between px-4">
        <div v-for="item in nextTopData" :key="item.indexNum"
          class="w-30 max-w-[30vw] rounded-lg bg-[#170a2d] px-2 py-2">
          <div class="flex justify-between items-center">
            <span class="text-[#ab60ff] text-3xl font-bold">{{ $t(item.indexNum) }}</span>
            <!-- <span class="text-white text-sm">{{ item.indexZh }}</span> -->
            <div class="flex flex-col">
              <span class="text-white text-[10px]">{{ $t(item.indexZh) }}</span>
              <span class="text-[#9f99a7] text-[8px]">{{ $t(item.indexDoc) }}</span>
            </div>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] py0.5"
              :class="[lang === 'en' ? 'text-[7px]' : 'text-[8px]']">{{ $t(text)
              }}</span>
          </div>
        </div>
      </div>

      <div class="w-full py-10 relative">
        <div class="w-full h-[4px] bg-[#ab5fff] absolute left-0 top-[50%] z-1 -translate-y-[50%]"></div>
        <div
          class="w-full flex justify-center item-center flex-nowrap absolute left-0 top-[50%] z-2 -translate-y-[50%]">
          <div class="rounded-[50%] border-[5px] border-[#ab5fff] w-6 h-6 bg-[#0e0024]"></div>
          <div class="rounded-[50%] border-[5px] border-[#ab5fff] w-6 h-6 mx-12 bg-[#0e0024]"></div>
          <div class="rounded-[50%] border-[5px] border-[#ab5fff] w-6 h-6 bg-[#0e0024]"></div>
        </div>
      </div>

      <div class="flex justify-between item-center px-4">
        <div v-for="item in nextBottomData" :key="item.indexNum"
          class="w-30 max-w-[30vw] rounded-lg bg-[#170a2d] px-2 py-2">
          <div class="flex justify-between items-center">
            <span class="text-[#ab60ff] text-3xl font-bold">{{ $t(item.indexNum) }}</span>
            <!-- <span class="text-white text-sm">{{ item.indexZh }}</span> -->
            <div class="flex flex-col">
              <span class="text-white text-[10px]">{{ $t(item.indexZh) }}</span>
              <span class="text-[#9f99a7] text-[8px]">{{ $t(item.indexDoc) }}</span>
            </div>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] py.5"
              :class="[lang === 'en' ? 'text-[7px]' : 'text-[8px]']">{{ $t(text) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col text-center items-center justify-center py-10 text-[#9f99a7]">
      <span class="text-2xl font-bold english-title">{{ $t('home.bottomTitle1') }}</span>
      <span class="text-2xl font-bold pt-2 english-title">{{ $t('home.bottomTitle2') }}</span>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick, computed, watch } from 'vue'
import carouselImage1 from './images/carousel-1.png'
import i18n from '../../plugins/i18n'

// import pvpImage from './images/pvp-game-image.png'
// import topspeedImage from './images/topspeed-game-image.png'

import gameModeImg1 from './images/game-type-1.png'
import gameModeImg2 from './images/game-type-2.png'
import gameModeImg3 from './images/game-type-3.png'

// import { useRouter } from 'vue-router'
// const router = useRouter()
// const changeRoute = (path: string) => {
//   router.push(`/${path}`)
// }

const lang = computed(() => i18n.global.locale.value)

watch(
  () => i18n.global.locale,
  (val: string) => {
    console.log(lang.value)
  },
  { deep: true }
)

const carouselList = ref([
  carouselImage1,
  carouselImage1,
  carouselImage1
])

const carouselHeight = ref('0px')

// 保存图片 refs
const carouselImgs = []

const onImgLoad = async (index) => {
  // 只在第一张图片加载后设置高度（避免多次抖动）
  if (carouselHeight.value !== '0px') return

  await nextTick()

  const img = carouselImgs[index]
  if (!img) return

  const height = img.clientHeight
  carouselHeight.value = height + 'px'
}

const currentMode = ref(1)


const showModeData = computed(() => {
  // const topspeedList = ['一场与时间赛跑的收益狂潮。', '倒计时启动，60秒生死时刻。', '每一秒都让收益倍增，也让危险更近。', '越早兑现，越稳妥；']
  // const pvpTextList = ['双猎之战，唯快与策略者胜。', '在赏金猎人的世界里，速度即力量，精准即财富。', '当两名玩家踏入竞技场，计时开始，金币散布整张地图上。']
  // return {
  //   images: currentMode.value === 1 ? pvpImage : topspeedImage,
  //   textList: currentMode.value === 1 ? pvpTextList : topspeedList
  // }
  return gameModeList.find(item => item.mode === currentMode.value)
})

const gameModeList = reactive([
  {
    mode: 1,
    img: gameModeImg1,
    textList: [
      ['home.gameModel1Text1', 'home.gameModel1Text2'],
      ['home.gameModel1Text3', 'home.gameModel1Text4'],
      ['home.gameModel1Text5', 'home.gameModel1Text6']
    ]
  },
  {
    mode: 2,
    img: gameModeImg2,
    textList: [
      ['home.gameModel2ext1', 'home.gameModel2ext2', 'home.gameModel2ext3'],
      ['home.gameModel2ext4', 'home.gameModel2ext5'],
      ['home.gameModel2ext6', 'home.gameModel2ext7']
    ] 
  },
  {
    mode: 3,
    img: gameModeImg3,
    textList: [
      [
        {
          text: 'home.gameModel3ext1',
          leftIcon: true,
          isTitle: false
        },
        {
          text: 'home.gameModel3ext2',
          leftIcon: true,
          isTitle: false
        },
        {
          text: 'home.gameModel3ext3',
          leftIcon: false,
          isTitle: false
        },
        {
          text: 'home.gameModel3ext4',
          leftIcon: false,
          isTitle: false
        },
        {
          text: 'home.gameModel3ext5',
          leftIcon: false,
          isTitle: false
        },
      ],
      [
        {
          text: 'home.gameModel3ext6',
          isTitle: true,
          leftIcon: false
        },
        {
          text: 'home.gameModel3ext7',
          leftIcon: true,
          isTitle: false
        },
        {
          text: 'home.gameModel3ext8',
          leftIcon: true,
          isTitle: false
        }
      ],
    ],

  }
])

const nextTopData = [
  {
    indexNum: '01',
    indexZh: 'home.nextData1Index',
    indexDoc: 'home.nextData1IndexDoc',
    textList: ['home.nextData1Text1', 'home.nextData1Text2', 'home.nextData1Text3', 'home.nextData1Text4', 'home.nextData1Text5', 'home.nextData1Text6']
  },
  {
    indexNum: '02',
    indexZh: 'home.nextData2Index',
    indexDoc: 'home.nextData2IndexDoc',
    textList: ['home.nextData2Text1', 'home.nextData2Text2', 'home.nextData2Text3', 'home.nextData2Text4', 'home.nextData2Text5']
  },
  {
    indexNum: '03',
    indexZh: 'home.nextData3Index',
    indexDoc: 'home.nextData3IndexDoc',
    textList: ['home.nextData3Text1', 'home.nextData3Text2']
  }
]
const nextBottomData = [
  {
    indexNum: '04',
    indexZh: 'home.nextData4Index',
    indexDoc: 'home.nextData4IndexDoc',
    textList: ['home.nextData4Text1', 'home.nextData4Text2', 'home.nextData4Text3', 'home.nextData4Text4']
  },
  {
    indexNum: '05',
    indexZh: 'home.nextData5Index',
    indexDoc: 'home.nextData5IndexDoc',
    textList: ['home.nextData5Text1', 'home.nextData5Text2', 'home.nextData5Text3', 'home.nextData5Text4']
  },
  {
    indexNum: '06',
    indexZh: 'home.nextData6Index',
    indexDoc: 'home.nextData6IndexDoc',
    textList: ['home.nextData6Text1']
  }
]

const carouselRef = ref(null)
const touStart = ref(false)
const touStartX = ref(0)
const touchX = ref('left')
const onTouchStart = (e) => {
  touStart.value = true
  touStartX.value = e.changedTouches[0].clientX
}
const onTouchEnd = (e) => {
  touStart.value = false
  if(e.changedTouches[0].clientX - touStartX.value > 0) {
    touchX.value = 'right'
    carouselRef.value.prev()
  }else{
    touchX.value = 'left'
    carouselRef.value.next()
  }
  
  console.log(touchX.value)
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
    font-size: 64px;
    color: #b15cff;
    filter:
      drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 20px #b15cff) drop-shadow(0 0 40px #b15cff) drop-shadow(0 0 60px #b15cff);
  }
  i{
    font-size: 24px;
  }
}

::v-deep .el-carousel__arrow--right {
  right: 10px !important;
}

::v-deep .el-carousel__arrow--left {
  left: 10px !important;
}

::v-deep .el-carousel__indicator {
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}

::v-deep .el-carousel__indicator--horizontal {
  padding: 12px;
}

.backdrop-filter {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  color: #9f99a7;

  /* Safari */

  /* 玻璃边框 + 阴影让效果更立体 */
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  /* box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18); */
  /* color: #fff; */
}

.line-box {
  position: relative;
}

.line-item {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ab5fff;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
}

.xs-text {
  font-size: 10px;
}

.left-dot {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #D687FF;
    top: 50%;
    left: -12px;
    transform: translateY(-50%);
  }
}

/* 慢 */
.float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

/* 中 */
.float-medium {
  animation: float-medium 5s ease-in-out infinite;
}

/* 快（居中那张，包含 translateX(-50%)） */
.float-fast-center {
  animation: float-fast-center 4.5s ease-in-out infinite;
}

/* ===== keyframes ===== */

@keyframes float-slow {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes float-medium {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-16px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes float-fast-center {
  0% {
    transform: translate(-50%, 0);
  }

  50% {
    transform: translate(-50%, -22px);
  }

  100% {
    transform: translate(-50%, 0);
  }
}

/* 性能 & 丝滑优化 */
.float-slow,
.float-medium,
.float-fast-center {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.bg {
  background-image: url('./images/button-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: left top;
}

/* 公共：同步呼吸节奏 */
.arrow-breathe {
  animation: arrow-breathe 1.6s ease-in-out infinite;
  will-change: transform, opacity;
}

/* 左箭头：往右 */
.arrow-left {
  --move-x: 8px;
}

/* 右箭头：往左 */
.arrow-right {
  --move-x: -8px;
}

@keyframes arrow-breathe {
  0% {
    transform: translateX(0);
    opacity: 0.85;
  }

  50% {
    transform: translateX(var(--move-x));
    opacity: 1;
  }

  100% {
    transform: translateX(0);
    opacity: 0.85;
  }
}

.left-icon {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #AB60FF;
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
  }
}


</style>