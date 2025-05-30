import type { MenuItem } from '../types/menu'

const menuItems: MenuItem[] = [
  {
    index: '/market/a',
    icon: new URL('@/assets/sse-composite--big.svg', import.meta.url).href,
    label: 'A股',
    children: [
      { index: '/market/a/sh', label: '上证综指' },
      { index: '/market/a/sz', label: '深圳成指' },
      { index: '/market/a/300', label: '沪深300' }
    ]
  },
  {
    index: '/market/h',
    icon: new URL('@/assets/hangsheng.png', import.meta.url).href,
    label: '港股',
    children: [
      { index: '2-4-1', label: 'item one' },
      { index: '2-4-2', label: 'item two' },
      { index: '2-4-3', label: 'item three' }
    ]
  },
  {
    index: '/market/n',
    icon: new URL('@/assets/NASDAQ.png', import.meta.url).href,
    label: '美股',
    children: [
      { index: '2-4-1', label: 'item one' },
      { index: '2-4-2', label: 'item two' },
      { index: '2-4-3', label: 'item three' }
    ]
  }
]

export default menuItems