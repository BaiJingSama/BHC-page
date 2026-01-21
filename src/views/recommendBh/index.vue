<template>
  <div class="w-full overflow-x-hidden pt-20">
    <div class="w-full flex flex-col items-center">
      <img src="./images/recommend-title-image.png" alt="" class="w-70 max-w-[70vw] h-auto">
      <div class="text-white text-xs flex flex-col items-center pb-8">
        <div>{{ $t('recommendBh.intro') }}</div>
        <div>首批次全球仅开放10个入驻名额</div>
      </div>

      <div
        class="w-80 max-w-[80vw] text-xs flex flex-col items-center border border-white rounded-3xl py-6 px-4 text-white">
        <span>尊敬的合作伙伴：</span>
        <span>GameFi的新时代已经开始，而Bounty Hunter</span>
        <span>——将是这场革命的核心引擎。</span>
        <span>在无数链游归零、玩家流失、代币失焦的背景下，</span>
        <span>以全链PVP竞技+多代币联盟+永久价值凭证的模式，</span>
        <span>正在引爆整个Web3的新纪元。</span>
      </div>

      <div class="w-full flex flex-col items-center py-6">
        <img src="./images/not-game-image.png" alt="" class="w-70 max-w-[70vw] h-auto"></img>
      </div>

      <div
        class="w-80 max-w-[80vw] text-xs flex flex-col items-center border border-white rounded-3xl py-6 px-4 text-white">
        <span>在这里，</span>
        <span>每一场对局都能产生真实收益，</span>
        <span>每一次失败都能成为未来的积累。</span>
        <span>赢家带走收益，输家获得100%赔偿—永不空手而归。</span>
      </div>

      <div class="w-full flex flex-col items-center pt-6 pb-2 text-base text-white font-bold">
        <span>为什么选择加入Bounty Hunter？</span>
      </div>

      <div class="flex flex-col w-80 max-w-[80vw] text-xs text-white pt-4">
        <span>1.全球首创「代币共生机制」</span>
        <span>您的代币可成为玩家的门票币种，玩家使用您的代币进行游戏，</span>
        <span>所有支付、结算与分配都将实时映射您的代币生态。</span>
        <span>这意味着：</span>
        <span>您的代币将直接进入上千场每日对战的核心循环；</span>
        <span>玩家持有、支付、复用您的代币；</span>
        <span>项目流动性与用户活跃度持续提升；</span>
        <span>您的品牌成为BountyHunter主战场上的“标准”。</span>
      </div>

      <div class="flex flex-col w-80 max-w-[80vw] text-xs text-white pt-4">
        <span>2.即刻流量 × 全场景曝光</span>
        <span>入驻BountyHunter后，您的品牌于代币标识将出现在：</span>
        <span>游戏主视觉区；</span>
        <span>官方网页、社群、赛事、排行榜及视频内容中。</span>
        <span>这是一次24小时×全场景×全球曝光的超级广告位。</span>
      </div>

      <div class="flex flex-col w-80 max-w-[80vw] text-xs text-white pt-4">
        <span>3.收益共享 × 无限叠加</span>
        <span>每一场使用您代币参与的对局，您将持续获得生态分成、长期流量回流。</span>
        <span>积分排名靠前的合作方未来将获得：</span>
        <span>官方赛事独家冠名权</span>
        <span>特殊NFT皮肤合作优先权</span>
        <span>平台生态基金奖励与资源扶持</span>
      </div>

      <div class="flex flex-col w-80 max-w-[80vw] text-xs text-white pt-4">
        <span>4.BountyHunter的“通证魔法”</span>
        <span>积分凭证将成为未来正式代币发行时的兑换基础</span>
        <span>所有早期参与者、合作方，都将成为未来生态通证的最早受益者。</span>
      </div>

      <div class="flex flex-col w-80 max-w-[80vw] text-xs text-white pt-4">
        <span>5.稀缺红利 × 名额唯一</span>
        <span>首批仅开放10个全球合作方名额。</span>
        <span>这是一次真正的超前席位机会：</span>
        <span>首批合作方的代币将成为生态的“历史起点”，</span>
        <span>被铭刻进BountyHunter的合约、社区与文化之中。</span>
        <span>当平台扩张至多链时，您的代币将始终位列最早、最核心、最被关注的十席之一。</span>
      </div>

      <div class="w-full flex flex-col items-center py-6  text-base text-white font-bold">
        <span>入驻权益概览</span>
      </div>

      <div class="w-80 max-w-[80vw] text-xs">
        <table class="clean-table">
          <thead>
            <tr>
              <th class="left-col">权益类型</th>
              <th>内容描述</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="left-col">专属身份</td>
              <td>您的代币成为游戏内可用门票币种，直接进入生态循环</td>
            </tr>
            <tr>
              <td class="left-col">收益分成</td>
              <td>每场对局中获得7%生态分成</td>
            </tr>
            <tr>
              <td class="left-col">品牌曝光</td>
              <td>品牌展示于游戏中、官网、排行榜、社群、活动物料</td>
            </tr>
            <tr>
              <td class="left-col">积分系统</td>
              <td>排名靠前的合作方未来将获得更多生态基金奖励与资源支持</td>
            </tr>
            <tr>
              <td class="left-col">战略合作</td>
              <td>官方提供定制化市场活动、内容联动与社区推广支持</td>
            </tr>
            <tr>
              <td class="left-col">稀缺地位</td>
              <td>全球仅10个首批名额，永久铭刻在生态合约记录中</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="w-full flex items-stretch justify-center pt-8">
        <div
          class="flex flex-col items-center w-45 max-w-[45vw] border border-white rounded-2xl py-10 px-4 relative text-[8px] text-white">
          <div
            class="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 border border-white rounded-xl text-base py-1 px-6 text-nowrap bg-[#0e0024]">
            入驻条件</div>
          <span>入驻费用:3000U/名额</span>
          <span>全球仅限前10位联盟合作伙伴</span>
          <span>申请审核制，先到先得</span>
        </div>

        <div
          class="flex flex-col items-center w-45 max-w-[45vw] ml-4 border border-white rounded-2xl py-8 px-1 relative text-[8px] text-white">
          <div
            class="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 border border-white rounded-xl text-base py-1 px-3 text-nowrap bg-[#0e0024]">
            为什么是现在?</div>
          <span>GameFi的下一个爆点</span>
          <span>不在「玩法」而在「机制」。</span>
          <span>Bounty Hunter已经验证了三重闭环逻辑:</span>
          <span>即时收益 × 永久凭证 × 全链联盟。</span>
          <span>这是一个能把流量、代币、用户、品牌</span>
          <span>全部凝聚在同一生态引擎里的系统</span>
        </div>
      </div>

      <div class="w-full flex flex-col items-center py-6  text-base text-white font-bold">
        <span>现在入驻，您获得的不是一个合作位</span>
        <span>而是一张通往未来Web3价值体系的头等舱船票</span>
      </div>

      <div
        class="w-80 max-w-[80vw] text-xs flex flex-col items-center border border-white rounded-3xl pt-4 pb-6 px-4 text-white">
        <img src="./images/invite-title-image.png" alt="" class="w-65 max-w-[65vw] h-auto">
        <span>全球仅10名席位•不容错过</span>
        <span>加入Bounty Hunter，不止是合作</span>
        <span>而是共同点燃整个链游宇宙的燃料</span>
      </div>

      <div class="w-full flex items-center justify-center pt-8">
        <img src="./images/x-qr-code.png" alt="" class="w-25 max-w-[25vw] h-auto">
        <img src="./images/tg-qr-code.png" alt="" class="w-25 max-w-[25vw] h-auto ml-12">
      </div>

      <div class="w-full flex items-center justify-center py-8">
        <img src="./images/bottom-logo.png" alt="" class="w-15 max-w-[15vw] h-auto">
      </div>
    </div>



  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toHome = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.clean-table {
  width: 100%;
  border-collapse: collapse;
  /* 让边框合并成整齐的 1px */
  color: #fff;
  /* 白色字体 */
  text-align: center;
  /* 表头和整列都居中 */
  border: 1px solid rgba(255, 255, 255, 1);
  /* 外边框 */
}

.clean-table th,
.clean-table td {
  padding: 12px 8px;
  border: 1px solid rgba(255, 255, 255, 1);
  /* 内边框 */
}

.clean-table .left-col {
  white-space: nowrap;
  /* 不允许换行 */
  width: 1%;
  /* 触发 auto-fit，让内容决定宽度 */
  text-align: center;
}

/* 右列：允许换行，占满剩余空间 */
.clean-table td:not(.left-col),
.clean-table th:not(.left-col) {
  white-space: normal;
  text-align: left;
  /* 可按需改 */
}
</style>