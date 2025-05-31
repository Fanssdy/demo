// src/types/menu.ts
export interface MarketCardItem {
  index: string
  label: string
  icon?: string
  status?: 'trading' | 'closed' | 'halted' // 状态
  value?: number      // 数值
  unit?: string       // 单位（如¥、$等）
  changePercent?: number // 涨跌幅（正负值）
}

export interface MenuItem {
  index: string
  icon: string
  label: string
  children?: MarketCardItem[]
}