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
            <el-dropdown-item :icon="Plus" @click="()=>language = '简体中文'">简体中文</el-dropdown-item>
            <el-dropdown-item :icon="Plus" @click="()=>language = 'English'">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <img src="./images/header-more-icon.png" alt="" class="w-4 h-4" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const language = ref('简体中文')
</script>

<style lang="scss" scoped>
.dropdown-menu{
  background-color: #230a45 !important;
  padding: 0;
  border: none !important;
  ::v-deep .el-dropdown-menu__item{
    color: #fff !important;
    padding: 5px 12px;
  }
}
</style>