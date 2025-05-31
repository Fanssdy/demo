<script setup lang="ts">
import { Search,User,Menu } from '@element-plus/icons-vue'
import type { ElMenuItem } from 'element-plus';
import { ref ,watch } from 'vue'
import { useRoute } from 'vue-router'
import Menuitem from '@/components/header/MarketMenuItem.vue'
import menuItems from '@/data/menuItems'

const route = useRoute()
const firstMenuItem = ref<InstanceType<typeof ElMenuItem> | null>(null);
const SearchVisible = ref(false)
const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSubMenuClick = () => {
  if (firstMenuItem.value) {
     firstMenuItem.value.$el.click(); // 触发菜单项的点击事件
    
  }
};
//保证只激活一项
watch(() => route.path, (newPath) => {
  activeIndex.value = newPath.split('/').pop() || newPath;
}, { immediate: true })


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
        src="../../assets/logo.svg"
        alt="logo"
        width="28" height="28"
      />
    </el-menu-item>
    <el-menu-item >
        <el-button class="searchbutton" @click="SearchVisible = true" plain size="large" :icon="Search" round>
        搜索
        </el-button>
    </el-menu-item>
    
    <el-sub-menu popper-class="el-sub-demo" index="/market">
      <template #title >
        <span @click="handleSubMenuClick">市场</span>
      </template>
      <el-menu-item index="/market" ref="firstMenuItem" >
        <img
        class="circle_style"
        src="@/assets/globe.svg"
        alt="logo"
        width="16" height="16"
        />
        行情
      </el-menu-item>
      <Menuitem
        v-for="item in menuItems"
        :key="item.index"
        :index="item.index"
        :icon="item.icon"
        :label="item.label"
        :children="item.children || []"
      />  
    </el-sub-menu>
    <el-menu-item index="/stock">个股</el-menu-item>
    <el-menu-item index="/fund">ETF</el-menu-item>
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
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
    border-bottom: none !important;
    color: var(--el-menu-text-color);
    height: 100%;
}
</style>
<style scoped>
/* 调整箭头 */
:deep(.el-sub-menu .el-sub-menu__icon-arrow){
    display: none;
    width: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
}
/* 调整大小 */
:deep(.el-sub-menu .el-sub-menu__title) {
  padding-right: 20px !important;
}
/* 调整布局 */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}
.el-menu--horizontal > .el-menu-item:nth-last-child(2){
    margin-left: auto;
}
/* 删除底部横线 */
.el-menu--horizontal>.el-menu-item,
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: none !important;
    text-decoration: none;
}

/* 调整停留聚焦背景 */
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-text-color);

}
.circle_style{
  border-radius: 50%;
  margin-right: 8px
}
.searchbutton{
    text-align: left; 
    justify-content: flex-start;
    width: 200px;
}
</style>
