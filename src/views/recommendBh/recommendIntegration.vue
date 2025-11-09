<template>
  <div class="w-full pt-20">
    <div class="w-full px-15 text-[#9f99a7] text-xs">
      <div class="text-white pb-4 text-5xl font-bold tracking-[0.1em] py-2">积分系统</div>
      <div>用户价值记录凭证</div>
      <div>用于记录玩家贡献与权益，承载链上与链下的多维价值，是连接游戏经济与未来代币体系的核心桥梁。</div>
    </div>

    <div class="w-full flex flex-col items-center pb-20">
      <div v-for="item in integrationList" :key="item.title" class="rounded-3xl border border-white px-10 py-10 max-w-[70vw] text-[#d3ced9] text-xs glass mt-10">
        <div class="w-full flex items-center justify-center">
          <img :src="item.images" alt="" class="w-50 max-w-[50vw] h-auto"></img>
        </div>
        <div class="text-white text-lg font-bold pt-10 pb-6">{{ item.title }}</div>
        <div class="leading-6" v-for="text in item.textList" :key="text">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import integration1 from './images/integration-1.png'
import integration2 from './images/integration-2.png'
import integration3 from './images/integration-3.png'
import integration4 from './images/integration-4.png'
const integrationList = [
  {
    images: integration1,
    title: '积分的价值',
    textList: ['Bounty Hunter的「积分」不仅是一种奖励，更是未来全链生态的价值凭证与桥梁。它记录贡献、体现权益，并最终映射为正式代币', '积分不是补偿，而是通往未来的钥匙。','每一分努力，都会成为未来代币价值的注脚。']
  },
  {
    images: integration2,
    title: '获取方式',
    textList: ['1.游戏表现奖励在PVP、极速模式中根据胜负金币收集与算力贡献发放积分。','2.任务与活动激励完成日常任务、成就目标、活动挑战、邀请好友与社区互动。','3.特殊行为奖励参与质押、燃烧、推广活动，可获得额外积分加成。']
  },
  {
    images: integration3,
    title: '应用场景',
    textList: ['游戏内兑换积分可用于兑换角色皮肤、专属特效、功能道具及稀有NFT。积分商城即将上线的商城支持兑换电子产品、生态周边等实物奖励，实现虚拟与现实的价值互通。治理与纪念权益高等级用户可参与测试、治理提案、限量NFT发行等活动。从链上荣耀到现实奖励，积分让你的努力有迹可循。']
  },
  {
    images: integration4,
    title: '积分与代币承接',
    textList: ['当Bounty Hunter完成多链部署并进入治理阶段，将正式发行代币，并以100%等值赔付机制回馈所有积分持有者。历史积分将映射为代币兑换凭证；早期玩家将成为代币经济的核心受益者；积分价值将随平台成长持续放大。']
  }
]
</script>

<style scoped lang="scss">
.glass {
  background: rgba(255, 255, 255, 0.02);          /* 完全透明 */
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);

  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.25);    /* 高光边框，让轮廓更像玻璃 */   /* 深度阴影，可按需去掉 */
}
</style>