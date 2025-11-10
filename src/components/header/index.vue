<template>
  <div class="flex justify-between items-center px-8 py-6 absolute inset-x-0 top-0 z-2">
    <img src="./images/header-logo.png" alt="" class="shrink-0 w-72 max-w-[34vw] h-auto" />
    <div class="flex items-center gap-4">
      <el-dropdown trigger="click" effect="dark" :show-arrow="false">
        <button class="flex items-center bg-[#ab60ff] text-white rounded-full px-2 py-1 font-medium text-sm">
          <img src="./images/header-button-icon.png" alt="" class="mr-1 w-3 h-3" style="font-size:inherit;" />
          <span class="w-15 text-center">{{ language }}</span>
        </button>
        <template #dropdown>
          <el-dropdown-menu class="dropdown-menu">
            <el-dropdown-item :icon="Plus" @click="() => language = '简体中文'">简体中文</el-dropdown-item>
            <el-dropdown-item :icon="Plus" @click="() => language = 'English'">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <img src="./images/header-more-icon.png" alt="" class="w-4 h-4" @click="dialogVisible = true" />
    </div>
  </div>

  <el-dialog custom-class="more-dialog" :append-to-body="false" v-model="dialogVisible" fullscreen>
    <div class="w-full pt-10">
      <div @click="goPath(item.path)" v-for="(item, index) in menuList" :key="item.name" class="w-full text-white text-2xl font-bold px-6 py-4 border-[#322645] border-t-1" :class="[index === menuList.length - 1 ? 'border-b-1' : '']">{{ item.name }}</div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const language = ref('简体中文')

const dialogVisible = ref(false)

const menuList = [
  {
    name: '首页',
    path: '',
  },
  {
    name: '公告',
    path: '',
  },
  {
    name: '下载游戏',
    path: '/downGame',
  },
  {
    name: '游戏玩法',
    path: '/recommendGame',
  },
  {
    name: '积分规则',
    path: '/recommendIntegration',
  },
  {
    name: '联盟合作',
    path: '/recommendBh',
  },
  {
    name: '白皮书',
    path: '',
  },
  {
    name: '加入BH',
    path: '',
  },
]

const goPath = async (path: string) => {
  // 关闭对话框
  dialogVisible.value = false

  // 处理空路径，默认跳到首页
  const target = path && path.trim() ? path : '/'

  try {
    await router.push(target)
  } catch (e) {
    // 忽略重复导航等异常
    // console.warn('导航失败', e)
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #230a45 !important;
  padding: 0;
  border: none !important;

  ::v-deep .el-dropdown-menu__item {
    color: #fff !important;
    padding: 5px 12px;
  }
}

::v-deep .el-dialog {
  i svg {
    color: #fff;
  }
  background: #0e0024 !important;
}

.more-dialog{
  background: #0e0024 !important;
}
</style>