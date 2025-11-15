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
      <img src="./images/nano-images.png" alt="" class="absolute right-12 -top-4 w-48 max-w-[34vw] h-auto z-3" />


      <div class="flex flex-col px-6 py-10">
        <span class="text-white text-5xl font-bold tracking-[.05em]">项目介绍</span>
        <span class="text-[#9f99a7] text-sm pt-4">猎取荣耀，夺走世界。</span>
      </div>

      <div class="backdrop-filter px-4 text-xs">
        <div class="py-6">
          <div>Bounty Hunter 是全球首个全链互通的PVP GameFi竞技场。</div>
          <div>在这里，你的每一次点击，都在改变命运。</div>
          <div>我们不造梦，我们创造规则。</div>
        </div>
        <div class="py-2 flex justify-between">
          <span>真实对战机制</span>
          <span>|</span>
          <span>极速倍速玩法</span>
          <span>|</span>
          <span>积分凭证系统</span>
          <span>|</span>
          <span>联盟激励机制</span>
        </div>
      </div>
    </div>

    <div class="w-full px-5">
      <div class="flex items-center justify-center py-8">
        <img :src="showModeData.images" alt="" class="w-48 max-w-[36vw] h-auto">
      </div>

      <div class="flex flex-col px-6 text-[#9f99a7] text-xs">
        <span class="text-white pb-4 text-5xl font-bold tracking-[0.1em]">游戏模式</span>
        <span v-for="item in showModeData.textList" :key="item">{{ item }}</span>
      </div>

      <div class="w-full flex items-center justify-center pt-8 text-white text-xs">
        <div class="px-3 py-2 rounded-lg mr-8" :class="[currentMode === 1 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 1">PVP模式</div>
        <div class="px-3 py-2 rounded-lg" :class="[currentMode === 2 ? 'bg-[#ab60ff]' : 'bg-[#230a45]']"
          @click="currentMode = 2">极速模式</div>
      </div>
    </div>

    <div class="w-full px-5">
      <div class="flex justify-end px-6 py-12 pb-0">
        <span class="text-white text-5xl font-bold tracking-[.05em]">积分系统</span>
      </div>

      <div class="flex justify-center w-full -mt-6">
        <img src="./images/integrating-image.png" alt="" class="w-90 max-w-[90vw] h-auto">
      </div>

      <div class="flex flex-col pt-10 px-12 text-white text-xs">
        <span>积分不是补偿，而是通往未来的钥匙。</span>
        <span>玩家在游戏中获得的[积分凭证]可用于：</span>
        <span>游戏内兑换：皮肤、道具、限定NFT等稀有物品；</span>
        <span>积分商城兑换：包括iPhone、iPad等高价值实物；</span>
        <div class="pt-10">TGE之后更可实现价值转换积累积分</div>
        <span>解锁未来</span>
      </div>
    </div>

    <div class="reactive w-full px-5">
      <div class="flex justify-center px-6 pt-12 pb-0">
        <span class="text-white text-5xl font-bold tracking-[.05em]">联盟生态</span>
      </div>

      <div class="w-full flex justify-center -mt-6">
        <img src="./images/league-bg.png" alt="" class="w-[140vw] max-w-none h-auto" style="min-width:600px;" />
        <div class="absolute flex flex-col item-center justify-center text-white text-xs z-10 pt-8 text-center">
          <div class="py-3">共享流量，分润永续</div>
          <span>联盟是Bounty Hunter生态的核心动力</span>
          <span>所有合作方享受 7% 永续收益分配</span>
          <span>可绑定推广关系、部署子战场、获取联盟激励</span>
          <span>同时获得未来发币阶段空头与治理权</span>
        </div>
      </div>

      <div class="flex justify-center -mt-10">
        <div class="px-3 py-2 rounded-lg bg-[#ab60ff] text-white text-xs">立即申请联盟合作</div>
      </div>
    </div>


    <div class="w-full">
      <div class="flex flex-col justify-center px-6 py-12 text-center">
        <span class="text-white text-5xl font-bold tracking-[.05em]">未来蓝图</span>
        <div class="text-white text-xs pt-4">从游戏，到宇宙</div>
      </div>

      <div class="flex justify-between item-center px-4">
        <div v-for="item in nextTopData" :key="item.indexNum"
          class="w-30 max-w-[30vw] rounded-lg bg-[#170a2d] px-2 py-1">
          <div class="flex justify-between items-center">
            <span class="text-[#ab60ff] text-3xl font-bold">{{ item.indexNum }}</span>
            <span class="text-white text-sm">{{ item.indexZh }}</span>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] text-[10px] py.5">{{ text }}</span>
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
          class="w-30 max-w-[30vw] rounded-lg bg-[#170a2d] px-2 py-1">
          <div class="flex justify-between items-center">
            <span class="text-[#ab60ff] text-3xl font-bold">{{ item.indexNum }}</span>
            <span class="text-white text-sm">{{ item.indexZh }}</span>
          </div>
          <div class="flex flex-col pt-1">
            <span v-for="text in item.textList" :key="text" class="text-[#9f99a7] text-[10px] py.5">{{ text }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col text-center items-center justify-center py-10 text-[#ab60ff]">
      <span class="text-3xl font-bold">我们不追随趋势</span>
      <span class="text-3xl font-bold pt-2">我们创造赛道</span>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue'
import carouselImage1 from './images/carousel-1.png'
import pvpImage from './images/pvp-game-image.png'
import topspeedImage from './images/topspeed-game-image.png'
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
  const topspeedList = ['一场与时间赛跑的收益狂潮。', '倒计时启动，60秒生死时刻。', '每一秒都让收益倍增，也让危险更近。', '越早兑现，越稳妥；']
  const pvpTextList = ['双猎之战，唯快与策略者胜。', '在赏金猎人的世界里，速度即力量，精准即财富。', '当两名玩家踏入竞技场，计时开始，金币散布整张地图上。']
  return {
    images: currentMode.value === 1 ? pvpImage : topspeedImage,
    textList: currentMode.value === 1 ? pvpTextList : topspeedList
  }
})

const nextTopData = [
  {
    indexNum: '01',
    indexZh: '阶段一',
    textList: ['多链同步上线', '开放PVP与极速模式', '直推奖励系统启动']
  },
  {
    indexNum: '02',
    indexZh: '阶段二',
    textList: ['推出多人战场', '大型工会战', '(4人、8人团队战、联盟战)']
  },
  {
    indexNum: '03',
    indexZh: '阶段三',
    textList: ['启动NFT皮肤 & 装备系统']
  }
]
const nextBottomData = [
  {
    indexNum: '04',
    indexZh: '阶段四',
    textList: ['平台代币发布，积分与代币联动开启DAO治理', '平台代币成为跨链链游生态治理核心代币']
  },
  {
    indexNum: '05',
    indexZh: '阶段五',
    textList: ['积分商城开放', '支持实体兑换与NFT联动消费']
  },
  {
    indexNum: '06',
    indexZh: '阶段六',
    textList: ['垃圾币焚毁兑换机制正式上线', '完成生态闭环', '平台代币价值全面提升']
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
</style>