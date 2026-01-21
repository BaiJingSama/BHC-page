<template>
  <div class="w-full pt-20 overflow-x-hidden">
    <div class="px-12">
      <div class="text-[#AB60FF] text-3xl font-bold tracking-[0.05em]">玩法一：</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em] py-2">零成本體驗場</div>
    </div>

    <div class="w-full flex flex-col items-center mt-10">
      <div class="flex flex-col rounded-3xl px-6 py-8 w-82 max-w-[82vw] text-[#d3ced9] text-xs glass relative">
        <img src="./images/pvp-image.png" alt="" class="w-50 max-w-[50vw] h-auto absolute -top-5 -right-25">
        <span class="py-0.5 left-icon">參與條件：獵人通行證</span>
        <span class="py-0.5 left-icon">每日上限：每張通行證最多 3 場/日</span>
        <span class="py-0.5 left-icon">不需投入資金</span>
        <span class="py-0.5 left-icon">用於培養 DAO 判斷與參與習慣</span>

        <span class="text-[#AB60FF] font-bold pb-0.5 pt-4">BOOST 積分獎勵</span>
        <span class="py-0.5">以積分算力挖礦方式產出 $BHC</span>
      </div>
    </div>

    <div class="px-12 pt-16">
      <div class="text-[#AB60FF] text-3xl font-bold tracking-[0.05em]">玩法二：</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em] pt-2">PVP模式</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em] pt-2">雙獵之戰</div>
    </div>

    <div class="w-full flex flex-col items-center mt-10">
      <div class="flex flex-col rounded-3xl px-6 py-8 w-82 max-w-[82vw] text-[#d3ced9] text-xs glass relative">
        <img src="./images/topspeed-image.png" alt="" class="w-45 max-w-[45vw] h-auto absolute -top-10 -right-25">
        <span class="py-0.5 left-icon">參與條件：持有獵人角色 NFT</span>
        <span class="py-0.5 left-icon">每日上限：無限制</span>
        <span class="py-0.5 left-icon">資金門檻：10-500 $MOVA</span>

        <span class="text-[#AB60FF] font-bold pb-0.5 pt-4">遊戲競技獎勵（每局）</span>
        <span class="py-0.5 left-icon">勝出者：80% 獎池 + BOOST 積分</span>
        <span class="py-0.5 left-icon">未勝出者：BOOST 積分</span>
        <span class="py-0.5 left-icon">國庫 → 20% 獎池</span>
        <span class="py-0.5">(15% 每日持續匯入LP | 5% 注入動態獎池)</span>
      </div>
    </div>

    <div class="px-12 pt-16">
      <div class="text-[#AB60FF] text-3xl font-bold tracking-[0.05em]">玩法三：</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em] pt-2">遊戲化預測市場</div>
      <div class="text-[#d3ced9] text-3xl font-bold tracking-[0.05em] pt-2">(未來開放)</div>
    </div>

    <div class="w-full flex flex-col items-center mt-10 mb-20">
      <div class="flex flex-col rounded-3xl px-6 py-8 w-82 max-w-[82vw] text-[#d3ced9] text-xs glass relative">
        <img src="./images/game3.png" alt="" class="w-45 max-w-[45vw] h-auto absolute -top-10 -right-20">
        <span class="py-0.5 left-icon">圍繞可驗證事件與數據結果</span>
        <span class="py-0.5 left-icon">預測標的可來自：</span>
        <span class="py-0.5">遊戲內事件</span>
        <span class="py-0.5">DAO 提案結果</span>
        <span class="py-0.5">鏈上或現實世界可驗證數據</span>

        <span class="text-[#AB60FF] font-bold pb-0.5 pt-4">特點：</span>
        <span class="py-0.5 left-icon">預測本身即是一種 DAO 治理行為</span>
        <span class="py-0.5 left-icon">結果將直接影響 DAO 資源分配方向</span>
      </div>
    </div>

    <!-- <div class="px-12 pt-10 flex flex-col items-end">
      <div class="text-white text-3xl font-bold tracking-[0.05em]">极速模式</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em] py-2">一场与时间赛跑</div>
      <div class="text-white text-3xl font-bold tracking-[0.05em]">的收益狂潮</div>

      <div class="text-[#9f99a7] text-xs py-4 pb-8">在赏金猎人的世界里，速度即力量，精准即财富</div>
    </div>

    <div class="w-full flex flex-col items-center pb-10">
      <div class="flex flex-col items-end rounded-3xl px-6 py-8 max-w-[80vw] text-[#d3ced9] text-xs glass relative">
        <img src="./images/topspeed-image.png" alt="" class="w-35 max-w-[35vw] h-auto absolute -top-40 -left-15">
        <span class="leading-6">倒计时启动，30秒生死时刻</span>
        <span class="leading-6">你投下门票，系统开始计时</span>
        <span class="leading-6">越早兑现，越稳妥</span>
        <span class="leading-6">越晚兑现，风险越高，但回报可能高达100倍</span>
        <span class="leading-6">荧幕上的倍数从 1x 缓缓跳动上升</span>
        <span class="leading-6">1.5x、2x、5x、10x...每一秒都让收益倍增</span>
        <span class="leading-6">也让危险更近，如果你等待过久</span>
        <span class="leading-6">系统可能随机崩溃———你的门票将化为灰烬</span>
        <span class="leading-6">胜利者（成功兑现）</span>
        <span class="leading-6">获得当局总奖池（门票 X 倍数）的90%</span>
        <span class="leading-6">失败者（兑现失败或崩溃）</span>
        <span class="leading-6">按门票当前价值100%等值返回积分凭证</span>
        <span class="leading-6">生态基金：获得总奖池的 3%</span>
        <span class="leading-6">邀请奖励：获得总奖池的 7%</span>
      </div>
    </div> -->
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
.glass {
  background: rgba(255, 255, 255, 0.02);
  /* 完全透明 */
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);

  border-radius: 16px;
  // border: 1px solid rgba(255,255,255,0.25);    /* 高光边框，让轮廓更像玻璃 */   
}

.left-icon {
  position: relative;
  padding-left: 8px;
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #AB60FF;
    top: 50%;
    left: -4px;
    transform: translateY(-50%);
  }
}
</style>