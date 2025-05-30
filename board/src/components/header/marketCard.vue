<template>
    <el-card style="width: 260px" :body-style="{ padding: '12px 16px' }">
  <!-- 第一行：图标 + 名称 + 状态 -->
  <div class="card-row header-row">
    <div class="left-content">
      <img 
        v-if="child.icon" 
        :src="child.icon" 
        class="item-icon"
        width="20"
        height="20"
      />
      <span class="item-label">{{ child.label }}</span>
    </div>
    <div :class="['status-badge', child.status]">
      {{ getStatusText(child.status) }}
    </div>
  </div>

  <!-- 第二行：数值 + 单位 + 涨跌幅 -->
  <div class="card-row value-row">
    <div class="left-content">
      <span class="value">{{ formatValue(child.value) }}</span>
      <span class="unit">{{ child.unit }}</span>
    </div>
    <div 
      v-if="child.changePercent !== undefined"
      :class="['change-percent', child.changePercent >= 0 ? 'up' : 'down']"
    >
      {{ formatPercent(child.changePercent) }}
    </div>
  </div>
</el-card>
</template>