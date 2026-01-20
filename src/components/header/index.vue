<template>
  <div class="flex justify-between items-center px-4 sm:px-8 h-16 fixed inset-x-0 top-0 z-50 bg-transparent">
    <img src="./images/header-logo.png" alt="" class="shrink-0 w-72 max-w-[34vw] h-auto" />
    <div class="flex items-center gap-4">
      <el-dropdown trigger="click" effect="dark" :show-arrow="false">
        <button class="flex items-center bg-[#ab60ff] text-white rounded-full px-2 py-1 font-medium text-sm">
          <img src="./images/header-button-icon.png" alt="" class="mr-1 w-3 h-3" style="font-size:inherit;" />
          <span class="w-15 text-center">{{ language }}</span>
        </button>
        <template #dropdown>
          <el-dropdown-menu class="dropdown-menu">
            <el-dropdown-item :icon="Plus" @click="() => switchLang('zh', '简体中文')">简体中文</el-dropdown-item>
            <el-dropdown-item :icon="Plus" @click="() => switchLang('en', 'English')">English</el-dropdown-item>
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
// 导入 i18n 实例以切换全局语言
import i18n from '../../plugins/i18n'

const router = useRouter()
const language = ref('简体中文')

const dialogVisible = ref(false)

// 切换全局语言：langCode 使用 'zh' / 'en'
const switchLang = (langCode: string, label: string) => {
  language.value = label
  try {
    // i18n.global.locale 在 composition API 模式下通常是一个 Ref
    // 为兼容性使用 any 处理赋值
    try {
      ;(i18n.global.locale as any).value = langCode
    } catch (e) {
      ;(i18n.global as any).locale = langCode
    }
  } catch (e) {
    // 忽略切换失败，不阻塞 UI
    console.warn('切换语言失败', e)
  }
}

const menuList = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '公告',
    path: '/notice',
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
  // 确定本地路由表中有path
  const routes = router.getRoutes()
  
  // console.log(routes)
  if (!routes.find((route) => route.path === path)) {
    return
  }

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