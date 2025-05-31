<script setup lang="ts">
import type {MarketCardItem} from '@/types/menu'
import MarketCard from '@/components/header/marketCard.vue'
defineProps<{
  index: string
  icon: string
  label: string
  children?: MarketCardItem[]  // 使用接口定义children结构
}>()
</script>

<template>
  <!-- 有子菜单的情况 -->
  <el-sub-menu v-if="children?.length" :index="index">
    <template #title>
      <div class="menu-item-content">
        <img
        class="circle_style"
        :src="icon"
        alt="logo"
        width="16" 
        height="16"
        />
        <span class="menu-label">{{label}}</span>
        
      </div>
    </template>
    <el-menu-item 
      v-for="child in children" 
      :key="child.index" 
      :index="child.index"
      class="custom-menu-item"
    >
    
      <MarketCard :data="child" />
    </el-menu-item>
  </el-sub-menu>
  
  <!-- 没有子菜单的情况 -->
  <el-menu-item v-else :index="index">
    <img
      class="circle_style"
      :src="icon"
      alt="logo"
      width="16" 
      height="16"
    />
    {{ label }}
  </el-menu-item>
</template>

<style scoped>
.circle_style {
  border-radius: 50%;
  margin-right: 8px;
}
/* .right-arrow { 
  margin-left: auto;
  color: var(--el-text-color-secondary);
  font-size: 5px;
} */
.menu-item-content {
  display: flex;
  align-items: center;
  width: 100%;
}
:deep(.custom-menu-item) {
  height: auto !important;
  padding: 0 !important;
  margin: 4px 4px; /* 添加间距 */
}

</style>