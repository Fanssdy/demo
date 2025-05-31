<script setup lang="ts">
import type { MarketCardItem } from '@/types/menu.ts'
import { ref, onMounted } from 'vue'
import defaultIcon from '@/assets/default-market-icon.svg'
const props = defineProps<{
  data: MarketCardItem
}>()

const iconSrc = ref('')
onMounted(() => {
  iconSrc.value = props.data.icon || defaultIcon
})

const getStatusConfig = (status?: string) => {
  const config = {
    trading: { text: '交易中', color: 'success' },
    closed: { text: '休市', color: 'info' },
    halted: { text: '停牌', color: 'warning' }
  }
  return config[status as keyof typeof config] || { text: '', color: '' }
}

const formatValue = (val?: number) => {
  return val?.toLocaleString() || '--'
}

const formatPercent = (percent?: number) => {
  if (percent === undefined) return ''
  return `${percent >= 0 ? '+' : ''}${percent.toFixed(2)}%`
}
</script>

<template>
  <el-card class="market-card">
    <!-- 第一行：图标 + 名称 + 状态 -->
    <div class="card-row header-row">
      <div class="left-content">
        <img 
          v-if="data.icon" 
          :src="data.icon" 
          class="item-icon"
          width="20"
          height="20"
          @error="iconSrc = defaultIcon"
        />
        <!-- 图标加载失败时使用默认图标 -->
        <span class="item-label">{{ data.label }}</span>
      </div>
      <el-tag 
        v-if="data.status"
        :type="getStatusConfig(data.status).color"
        size="small"
        effect="light"
      >
        {{ getStatusConfig(data.status).text }}
      </el-tag>
    </div>

    <!-- 第二行：数值 + 单位 + 涨跌幅 -->
    <div class="card-row value-row">
      <div class="left-content">
        <span class="value">{{ formatValue(data.value) }}</span>
        <span class="unit">{{ data.unit || '' }}</span>
      </div>
      <span 
        v-if="data.changePercent !== undefined"
        :class="['change-percent', data.changePercent >= 0 ? 'up' : 'down']"
      >
        {{ formatPercent(data.changePercent) }}
      </span>
    </div>
  </el-card>
</template>

<style scoped>
/* 卡片容器基础样式 */
.market-card {
  width: 260px;                  /* 固定卡片宽度 */
  --el-card-padding: 3px 8px;  /* 覆盖Element Plus默认内边距 */
}

/* 通用行布局样式 */
.card-row {
  display: flex;                 /* 启用Flex布局 */
  justify-content: space-between; /* 内容两端对齐 */
  align-items: center;           /* 垂直居中 */
}

/* 首行特定样式 */
.header-row {
  margin-bottom: -5px;            /* 与第二行的间距 */
}

/* 左侧内容容器样式 */
.left-content {
  display: flex;                 /* 启用Flex布局 */
  align-items: center;           /* 子元素垂直居中 */
  gap: 8px;                      /* 子元素之间的间距 */
}

/* 图标样式 */
.item-icon {
  border-radius: 10px;            /* 轻微圆角 */
}

/* 标签文字样式 */
.item-label {
  font-weight: 500;              /* 中等加粗 */
  font-size: 14px;               /* 标准字号 */
}

/* 主数值样式 */
.value {
  font-size: 18px;               /* 较大字号 */
  font-weight: 600;              /* 加粗显示 */
}

/* 单位符号样式 */
.unit {
  font-size: 14px;               /* 小于主数值的字号 */
  color: var(--el-text-color-secondary); /* 使用Element Plus的次要文本色 */
  margin-left: 4px;              /* 与主数值的间距 */
}

/* 涨跌幅通用样式 */
.change-percent {
  font-size: 14px;               /* 标准字号 */
  font-weight: 500;              /* 中等加粗 */
  
  /* 上涨状态样式 */
  &.up {
    color: var(--el-color-success); /* 使用Element Plus的成功色（绿色） */
  }
  
  /* 下跌状态样式 */
  &.down {
    color: var(--el-color-danger);  /* 使用Element Plus的危险色（红色） */
  }
}
</style>