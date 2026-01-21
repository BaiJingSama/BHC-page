<template>
  <div class="bg-[#0e0024] overflow-auto overflow-x-hidden">
    <div class="w-full">
      <el-carousel arrow="always" :interval="3000" :height="carouselHeight">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <img :ref="el => carouselImgs[index] = el" @load="onImgLoad(index)" :src="item" alt=""
            class="w-full h-auto block">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="w-full px-5 relative">
      <img src="./images/nano-images.png" alt="" class="absolute right-5 -top-4 w-42 max-w-[32vw] h-auto z-3" />


      <div class="flex flex-col px-5 py-10">
        <span class="text-[#AB60FF] ml-2 text-4xl font-bold tracking-[.05em]">{{ $t('home.title') }}</span>
        <span class="text-[#9f99a7] text-xs pt-4">{{ $t('home.intro') }}</span>
      </div>

      <div class="backdrop-filter px-4 text-xs w-full">
        <div class="w-full py-6 pt-8 flex flex-col items-center">
          <img src="./images/home-introduce.png" alt="" class="w-64 max-w-[78vw] h-auto mb-4">
          <div>基於 MOVA 生態的首個遊戲化 DAO 預測平台</div>
          <div>同時為 MOVA × USD1Swap 黑客松生態孵化項目</div>
          <div>並已獲得 100 萬 USD1 投資支持</div>
        </div>
        <div class="w-full pb-6 flex flex-col items-center">
          <span class="xs-text left-dot">將預測行為、決策過程、資金流向，壓縮進統一的遊戲化場景中</span>
          <span class="xs-text left-dot">不論輸贏，所有參與行為的價值不被淘汰，只被重新分配</span>
        </div>
      </div>
    </div>

    <!-- 獵人盲盒 -->

    <div class="w-full px-5 relative ">
      <div class="flex flex-col justify-center px-6 py-12 text-center">
        <span class=" text-5xl font-bold tracking-[.05em] text-[#AB60FF]">獵人盲盒</span>
        <div class="text-white text-xs pt-3">進入遊戲對戰、預測與價值分配系統的唯一入口</div>
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
        <span class="pt-2 text-white text-xs">白銀盲盒</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-25 h-25 relative rounded-full border-[#D687FF] border-[3px]">
          <img src="./images/box-2.png" alt="" class="absolute -left-1 top-0 w-25 max-w-[25vw] h-auto z-[1]">
        </div>
        <span class="pt-2 text-white text-xs">黃金盲盒</span>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-25 h-25 relative rounded-full border-[#D687FF] border-[3px]">
          <img src="./images/box-3.png" alt="" class="absolute -left-1 top-0 w-25 max-w-[25vw] h-auto z-[1]">
        </div>
        <span class="pt-2 text-white text-xs">史詩盲盒</span>
      </div>
    </div>

    <div class="w-full px-5 pt-10">
      <div class="backdrop-filter px-4 text-xs w-full">
        <p class="py-4 text-sm text-white font-bold flex justify-center">獵人NFT 是長期參與平台行為與價值分配的權益憑證</p>
        <div class="w-full pb-6 flex flex-col items-center">
          <span class="xs-text left-dot pb-2">每一個獵人角色，都是你的遊戲資產</span>
          <span class="xs-text left-dot pb-2">每一次對戰，都為你累積可結算價值</span>
          <span class="xs-text left-dot">每一次系統分配，都與你直接相關</span>
        </div>
      </div>
    </div>

    <div class="w-full pt-10 flex items-center gap-2 justify-center">
      <!-- 左箭头：向右呼吸 -->
      <img src="./images/right-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-left" />

      <div class="w-35 py-3 text-center text-white text-sm font-bold bg">
        立即搶購
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
        <span class="text-[#AB60FF] pb-4 text-5xl font-bold text-center tracking-[0.1em]">游戏模式</span>
      </div>

      <div class="w-full flex items-center gap-4 justify-center pt-6 text-white text-xs">
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 1 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 1">零成本體驗場</div>
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 2 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 2">PVP模式</div>
        <div class="px-4 py-3 rounded-lg" :class="[currentMode === 3 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 3">預測模式</div>
      </div>

      <div class="flex flex-col gap-3 text-[#9f99a7] text-xs py-8 px-8">
        <div class="flex flex-col" v-if="showModeData.mode !== 3" v-for="(item, index) in showModeData.textList"
          :key="index">
          <span class="py-0.5" v-for="textItem in item" :key="textItem">{{ textItem }}</span>
        </div>
        <div class="flex flex-col" v-else v-for="(item) in showModeData.textList">
          <template v-for="textItem in item">
            <span class="px-2 py-0.5" v-if="!textItem.isTitle" :class="[textItem.leftIcon ? 'left-icon' : '']">
              {{ textItem.text }}
            </span>
            <span class="text-[#AB60FF] font-bold py-0.5" v-else>{{ textItem.text }}</span>
          </template>
        </div>
      </div>
    </div>


    <!-- 积分系统 -->
    <div class="w-full px-5">
      <div class="flex justify-center px-6 py-12 pb-12">
        <span class="text-[#AB60FF] text-4xl font-bold tracking-[.05em]">Boost 積分系統</span>
      </div>

      <div class="flex justify-center w-full -mt-6">
        <img src="./images/integrating-image.png" alt="" class="w-90 max-w-[90vw] h-auto">
      </div>

      <div class="flex flex-col font-thin pt-10 px-12  text-[#9f99a7] text-xs">
        <span class="text-white font-bold pb-2">不是獎勵，而是每日都在累積的「挖礦權重」</span>

        <span class="py-0.5">Boost 積分是 Bounty Hunter 生態中的核心行為積分</span>
        <span class="py-0.5">不直接兌換價值，是每日挖礦分配的唯一計算依據</span>
        <span class="py-0.5">这是一個只獎勵「行為」與「時間」的系統</span>
        <span class="py-0.5">每一次行為，都會增加你的 Boost積分</span>
      </div>
    </div>

    <!-- 联盟生态 -->
    <div class="w-full px-5 pt-24">
      <div class="flex justify-center px-6">
        <span class="text-[#AB60FF] text-5xl font-bold tracking-[.05em]">聯盟生態</span>
      </div>

      <div class="w-full flex justify-center">
        <!-- <img src="./images/league-bg.png" alt="" class="w-[140vw] max-w-none h-auto" style="min-width:600px;" /> -->
        <div class="text-[#9f99a7] flex flex-col item-center justify-center  text-xs z-10 pt-8 text-center">
          <div class="py-3 font-bold text-white">「行為聚合 × 價值分配單元」</div>
          <span class="py-0.5">它不是單純的合作名單</span>
          <span class="py-0.5">而是一個可被接入、可被計算、可被分潤的生態層</span>
          <span class="py-0.5">每一個聯盟，皆可在 Bounty Hunter 內建立參與專區</span>
          <span class="py-0.5">聯盟不是被動導流，而是擁有「自己的戰場」</span>
        </div>
      </div>

      <div class="w-full px-5 pt-20">
        <div class="backdrop-filter py-4 px-4 text-xs w-full flex flex-col items-center">
          <img src="./images/ecology-bg.png" alt="" class="w-60 max-w-[60vw] h-auto -mt-20 mb-6">
          <span class="py-0.5">在這裡</span>
          <span class="py-0.5">其他生態、社群、項目方不只是「曝光合作」</span>
          <span class="py-0.5">而是以行為與真實流水，參與整個系統的價值循環</span>
        </div>
      </div>

      <div class="w-full pt-10 flex items-center gap-2 justify-center">
        <!-- 左箭头：向右呼吸 -->
        <img src="./images/right-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-left" />

        <div class="w-35 py-3 text-center text-white text-sm font-bold bg">
          立即申請聯盟合作
        </div>

        <!-- 右箭头：向左呼吸 -->
        <img src="./images/left-arrow.png" alt="" class="w-10 max-w-[10vw] h-auto arrow-breathe arrow-right" />
      </div>
    </div>

    <!-- 未来蓝图 -->
    <div class="w-full">
      <div class="flex flex-col justify-center px-6 py-12 text-center">
        <span class="text-[#AB60FF] text-5xl font-bold tracking-[.05em]">未来蓝图</span>
        <div class="text-white text-xs pt-4">從遊戲，到生態</div>
      </div>

      <div class="flex justify-between px-4">
        <div v-for="item in nextTopData" :key="item.indexNum"
          class="w-30 max-w-[30vw] rounded-lg bg-[#170a2d] px-2 py-2">
          <div class="flex justify-between items-center">
            <span class="text-[#ab60ff] text-3xl font-bold">{{ item.indexNum }}</span>
            <!-- <span class="text-white text-sm">{{ item.indexZh }}</span> -->
            <div class="flex flex-col">
              <span class="text-white text-[10px]">{{ item.indexZh }}</span>
              <span class="text-[#9f99a7] text-[8px]">{{ item.indexDoc }}</span>
            </div>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] text-[8px] py0.5">{{ text }}</span>
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
            <span class="text-[#ab60ff] text-3xl font-bold">{{ item.indexNum }}</span>
            <div class="flex flex-col">
              <span class="text-white text-[10px]">{{ item.indexZh }}</span>
              <span class="text-[#9f99a7] text-[8px]">{{ item.indexDoc }}</span>
            </div>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] text-[8px] py.5">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col text-center items-center justify-center py-10 text-[#9f99a7]">
      <span class="text-3xl font-bold">我們不追隨趨勢</span>
      <span class="text-3xl font-bold pt-2">我們創造賽道</span>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import carouselImage1 from './images/carousel-1.png'
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

const gameModeList = [
  {
    mode: 1,
    img: gameModeImg1,
    textList :[
      ['低門檻進場，以最小成本進入對戰與價值系統', '持有任意 NFT 即可參與'],
      ['用於培養玩家的 DAO 判斷能力與長期參與習慣', '讓每一次行為都成為經驗與價值的累積'],
      ['這不是短期博弈，而是一條可持續參與、可逐步升級的成長路徑']
    ]
  },
  {
    mode: 2,
    img: gameModeImg2,
    textList: [
      ['PVP 模式是核心對戰場景，玩家即時匹配，鏈上結算', '每一次對戰，都是一次判斷與策略的正面交鋒'],
      ['實際上，這是一個充滿不確定性的戰場', '結果並非單一因素決定，是實力 × 運氣的共同作用'],
      ['勝負不再是唯一價值來源','每一次參與，都留下可結算、可累積的價值']
    ]
  },
  {
    mode: 3,
    img: gameModeImg3,
    textList: [
      [
        {
          text: '圍繞可驗證事件與數據結果',
          leftIcon: true,
          isTitle: false
        },
        {
          text: '預測標的可來自：',
          leftIcon: true,
          isTitle: false
        },
        {
          text: '遊戲內事件',
          leftIcon: false,
          isTitle: false
        },
        {
          text: 'DAO 提案結果',
          leftIcon: false,
          isTitle: false
        },
        {
          text: '鏈上或現實世界可驗證數據',
          leftIcon: false,
          isTitle: false
        },
      ],
      [
        {
          text: '特點：',
          isTitle: true,
          leftIcon: false
        },
        {
          text: '預測本身即是一種 DAO 治理行為',
          leftIcon: true,
          isTitle: false
        },
        {
          text: '結果將直接影響 DAO 資源分配方向',
          leftIcon: true,
          isTitle: false
        }
      ],
    ],

  }
]

const nextTopData = [
  {
    indexNum: '01',
    indexZh: '阶段一',
    indexDoc: '(2026Q1)',
    textList: ['MOVA首發上線', '獵人盲盒 DApp 上線', '開放獵人 NFT 發售，$BHC發佈', '積分代幣挖矿，遊戲正式上線', '開放零擼與 PVP 模式','動態獎金池正式啟動']
  },
  {
    indexNum: '02',
    indexZh: '阶段二',
    indexDoc: '(2026Q2)',
    textList: ['開啟 DAO 治理，$BHC成為跨鏈', '鏈遊生態治理核心代幣', '推出多人戰場與大型公會戰', '（4 人 / 8 人團隊戰、聯盟對戰）','史詩盲盒正式開售']
  },
  {
    indexNum: '03',
    indexZh: '阶段三',
    indexDoc: '(2026Q3)',
    textList: ['開放預測等更多進階遊戲模式', '完成生態閉環','$BHC價值全面提升']
  }
]
const nextBottomData = [
  {
    indexNum: '04',
    indexZh: '阶段四',
    indexDoc: '(2026Q4)',
    textList: ['成立 BountyHunter Labs', '投資並孵化鏈遊或基礎設施專案', '積分商城開放','支持實體兌換與NFT聯動消費']
  },
  {
    indexNum: '05',
    indexZh: '阶段五',
    indexDoc: '(2027Q1)',
    textList: ['登陸 Top 10 交易平台', '完成 DEX + CEX 生態互聯', '推出 BountyHunter U 卡系統','實現虛擬與現實世界的消費對接']
  },
  {
    indexNum: '06',
    indexZh: '阶段六',
    indexDoc: '(2027+)',
    textList: ['打造涵蓋鏈遊、娛樂', '商城等場景的全球化結算體系']
  }
]
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

.left-icon{
  position: relative;
  &::before{
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