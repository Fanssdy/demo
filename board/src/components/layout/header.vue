<script setup lang="ts">
import { Search,User,Menu } from '@element-plus/icons-vue'


import type { ElMenuItem } from 'element-plus';

import { ref } from 'vue'

const firstMenuItem = ref<InstanceType<typeof ElMenuItem> | null>(null);
const SearchVisible = ref(false)
const activeIndex = ref('/market')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSubMenuClick = () => {
      if (firstMenuItem.value) {
        firstMenuItem.value.$el.click(); // 触发菜单项的点击事件
      }
    };

</script>
<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router="true"
  >
    <el-menu-item index="/">
      <img
        style="width: 100px"
        src="@/assets/logo.svg"
        alt="logo"
        width="28" height="28"
      />
    </el-menu-item>
    <el-menu-item >
        <el-button class="searchbutton" @click="SearchVisible = true" plain size="large" :icon="Search" round>
        搜索
        </el-button>
    </el-menu-item>
    
    <el-menu-item index="/market">市场</el-menu-item>

    <el-sub-menu popper-class="el-sub-demo" index="/">
      <template #title @click="handleSubMenuClick">
        <span @click="handleSubMenuClick">Workspace</span>
    </template>
      <el-menu-item index="/2" ref="firstMenuItem" v-show="false">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/3">
      <el-icon :size="20" color="#409efc"><User /></el-icon>
    </el-menu-item>
    <el-menu-item index="/4">
      <el-icon :size="20" color="#409efc"><Menu /></el-icon>
    </el-menu-item>
  </el-menu>
  
  <!--搜索弹出框 -->
  <el-dialog v-model="SearchVisible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">搜索框</h4>
      </div>
    </template>
    尽情期待
  </el-dialog>
</template>


<style>
.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title,
.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title.is-active{
    border-bottom: none !important;
    text-decoration: none;
}
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
    border-bottom: none !important;
    color: var(--el-menu-text-color);
    height: 100%;
}
.el-sub-menu .el-sub-menu__icon-arrow{
    display: none;
}
</style>

<style scoped>

.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}
.el-menu--horizontal > .el-menu-item:nth-last-child(2){
    margin-left: auto;
}
.el-menu--horizontal>.el-menu-item,
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: none !important;
    text-decoration: none;
}


.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-active-color) !important;

}

.searchbutton{
    text-align: left; 
    justify-content: flex-start;
    width: 200px;
}
</style>
