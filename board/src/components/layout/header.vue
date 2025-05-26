<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
// import { reactive, ref } from 'vue'
const SearchVisible = ref(false)
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    
    
  >
    <el-menu-item index="0">
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
    
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>


<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-active-color) !important;
  outline: none !important;
  border-bottom: 2px solid #1890ff; /* 可选：添加底部边框 */
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}

.navbar-wrapper {
padding:0px 25px;
background: #d1b3b3;
}

.header-container {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
}

.logo-container {
    display: flex;
    align-items: center;
    height: var(--header-height);
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.algolia-search-box {
        min-width: 176.3px;
    }
</style>
