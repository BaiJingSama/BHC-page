<template>
  <div class="w-full pt-20">
    <div class="px-12">
      <div class="text-[#AB60FF] text-3xl font-bold tracking-[.05em] english-title">{{
        $t('notice.title') }}</div>
      <div class="text-[#9f99a7] text-[10px] pt-4 english-title">{{ $t('notice.intro') }}</div>
    </div>

    <div class="w-full flex flex-col items-center pt-6 pb-20">
      <div v-for="(item, index) in noticeList" :key="index" @click="item.isActive = !item.isActive"
        class="w-85 max-w-[85vw] border border-[#9f99a7] rounded-xl py-4 px-8 bg-[#271a3a] text-white text-xs  mt-8">
        <div class="w-full flex items-center relative">
          <div class="w-4 h-4 rounded-md bg-[#ab60ff] absolute -left-6 top-[50%] -translate-y-1/2"></div>
          <div class="text-sm">{{ item.title }}</div>
          <img src="./images/arrow-icon.png" alt=""
            class="w-6 max-w-[6vw] h-auto absolute -right-6 top-[50%] -translate-y-1/2" v-show="!item.isActive" />
          <img v-show="item.isActive" src="./images/arrow-active-icon.png" alt=""
            class="w-6 max-w-[6vw] h-auto absolute -right-6 top-[50%] -translate-y-1/2" />
        </div>

        <transition name="fade">
          <div class="w-full flex flex-col pt-6 pb-6 transition-all" v-if="item.isActive">
            <span v-for="(textItem, textIndex) in item.textList" :key="textIndex"
              :class="['py-1', textItem.class ? textItem.class.join() : '']">{{ textItem.text }}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const noticeList = ref([
  {
    title: 'Bounty Hunter 正式上线公告',
    isActive: true,
    textList: [
      { text: '尊敬的用户与合作伙伴：' },
      { text: '我们非常荣幸地宣布，Bounty Hunter —— 全球首个全链互通的 PVP GameFi 竞技平台，现已正式上线。' },
      { text: 'Bounty Hunter 是一款基于多链互通的去中心化 PVP 竞技平台。玩家可使用多种代币参与游戏对战，系统以智能合约自动结算胜负与收益。 平台引入「积分凭证」与「联盟机制」，确保收益公平、循环可持续。' },
      { text: '我们以「公平对战、真实收益、可持续经济」为核心理念，致力于为全球玩家和项目方构建一个长期健康、价值共生的链游生态。' },
      { text: '欢迎加入Bounty Hunter，一起探索链上竞技的无限可能。' },
      { text: '官方网站：' },
      { text: '官方社区：https://t.me/BHC_Gem' },
      { text: '官方社媒：@BHC_GameFi' },
      { text: 'Bounty Hunter 团队', class: ['self-end'] },
      { text: '2025年11月', class: ['self-end'] },
    ]
  },
  {
    title: 'Bounty Hunter 正式上架 PVP 模式公告',
    isActive: false,
    textList: [
      { text: '尊敬的玩家与合作伙伴：', class: [] },
      { text: '我们欣然宣布，Bounty Hunter 平台现已正式上线 PVP（Player vs Player）模式。作为全球首个全链互通的 GameFi 竞技平台，Bounty Hunter 致力于打造一个“公平竞技、真实收益、生态共生” 的链上对战体系。' },
      { text: 'PVP 模式是 Bounty Hunter 的核心玩法之一。玩家可使用所持代币进入对战房间，与来自全球的对手进行实时博弈。胜利者将获得收益回报，其他参与者亦可获得等值积分补偿，实现“参与即价值”。' },
      { text: '感谢全球社区与合作伙伴的支持与信任。 PVP 模式的上线，是 Bounty Hunter 迈向 GameFi 3.0 生态的重要里程碑。' },
      { text: '主要特性包括：' },
      { text: '• 即时匹配对战：系统自动匹配同级玩家，确保公平竞技体验；', class: ['ml-2'] },
      { text: '• 智能合约结算：胜负与收益通过链上合约自动执行，透明安全；', class: ['ml-2'] },
      { text: '• 积分凭证体系：每场对战均产出积分，可用于后续兑换、升级与治理；', class: ['ml-2'] },
      { text: '• 多代币支持：首批开放多链代币接入，未来将逐步扩展合作生态。', class: ['ml-2'] },
      { text: '上线时间： 2025年11月正式开放' },
      { text: '当前版本开放功能：' },
      { text: '1. 即时匹配 PVP 模式', class: ['ml-2'] },
      { text: '2. 玩家积分记录与排行榜功能', class: ['ml-2'] },
      { text: '3. 对战结果链上结算与奖励发放', class: ['ml-2'] },
      { text: '4. 基础界面优化与多语言支持', class: ['ml-2'] },
      { text: '我们期待每一位玩家都能在这里找到属于自己的荣耀与价值。' },
      { text: '官方网站：' },
      { text: '官方社区：https://t.me/BHC_Gem' },
      { text: '官方社媒：@BHC_GameFi' },
      { text: '官方社媒：@BHC_GameFi' },
      { text: 'Bounty Hunter 团队', class: ['self-end'] },
      { text: '2025年11月', class: ['self-end'] },
    ]
  },
  {
    title: 'Bounty Hunter 正式上架「极速模式」公告',
    isActive: false,
    textList: [
      { text: '尊敬的玩家与合作伙伴：', class: [] },
      { text: '我们很高兴地宣布，Bounty Hunter 平台现已正式上线「极速模式」。该模式作为核心竞技体系的重要补充，将为全球玩家带来更高效、更刺激的链上对战体验。' },
      { text: '极速模式是基于智能合约的即时结算玩法。玩家进入战场后，即刻匹配、即时出结果、即时结算，无需等待、无繁琐操作。' },
      { text: '本次「极速模式」版本已开放以下功能：' },
      { text: '1. 极速对战匹配系统', class: ['ml-2'] },
      { text: '2. 链上自动结算与即时发奖机制', class: ['ml-2'] },
      { text: '3. 玩家战绩与积分记录模块', class: ['ml-2'] },
      { text: '4. 多语言版本与UI性能优化', class: ['ml-2'] },
      { text: '感谢全球社区的支持与参与。我们将持续完善产品体验，与玩家共同打造一个公平、开放、可持续的链上竞技新纪元。' },
      { text: '官方网站：' },
      { text: '官方社区：https://t.me/BHC_Gem' },
      { text: '官方社媒：@BHC_GameFi' },
      { text: 'Bounty Hunter 团队', class: ['self-end'] },
      { text: '2025年11月', class: ['self-end'] },
    ]
  },
  {
    title: 'Bounty Hunter 下载方式公告',
    isActive: false,
    textList: [
      { text: '尊敬的玩家与合作伙伴：', class: [] },
      { text: '感谢您对 Bounty Hunter 的关注与支持。' },
      { text: '为方便全球用户体验链上竞技的乐趣，我们现正式公布 Bounty Hunter 平台的下载与访问方式。' },
      { text: '一、官方渠道' },
      { text: '为保障您的资产与账户安全，请务必通过以下官方渠道下载与访问：' },
      { text: '• 🌐 官方网站：https://bountyhunter.game', class: ['ml-2'] },
      { text: '⚠️ 请勿从任何非官方来源下载或登录，以防钓鱼网站、假冒应用等安全风险。官方团队不会以任何形式要求您提供私钥或助记词。' },
      { text: '二、钱包支持' },
      { text: 'Bounty Hunter 当前支持以下主流 Web3 钱包接入：' },
      { text: '• OKX Wallet', class: ['ml-2'] },
      { text: '• MetaMask', class: ['ml-2'] },
      { text: '• Bitget Wallet', class: ['ml-2'] },
      { text: '未来版本将持续拓展更多钱包生态与移动端免签体验。' },
      { text: '感谢全球社区的支持与参与。' },
      { text: '官方网站：' },
      { text: '官方社区：https://t.me/BHC_Gem' },
      { text: '官方社媒：@BHC_GameFi' },
      { text: 'Bounty Hunter 团队', class: ['self-end'] },
      { text: '2025年11月', class: ['self-end'] },
    ]
  },
])
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>