import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: 'DShanMCU-Mio(澪)',
    children: [
      {
        text: 'Arduino学习',
        link: '/zh/DShanMCU-Mio/Arduino/chapter1-1.md',
      },
      {
        text: 'ESP-IDF学习',
        link: '/zh/DShanMCU-Mio/ESP-IDF/chapter1-1.md',
      },
      {
        text: 'MicroPython学习',
        link: '/zh/DShanMCU-Mio/MicroPython/chapter1-1.md',
      },
    ],
  },
  {
    text: '开源掌机',
    children: [
      {
        text: 'Retro-Yao-Mio(爻-澪)',
        link: '/zh/Retro-Yao-Mio/chapter1-1.md',
      },
    ],
    
    
  },
  {
    text: `ESP32系列`,
    children: [
      {
        text: 'DShanMCU-Yat(逸)开发板',
        link: 'https://item.taobao.com/item.htm?id=683875901407',
      },
      {
        text: 'DShanMCU-Mio(澪)开发板',
        link: 'https://item.taobao.com/item.htm?id=683875901407',
      },
      {
        text: 'Retro-Yao-Mio(爻-澪)开源掌机',
        link: 'https://item.taobao.com/item.htm?id=694835665452',
      },
    ],
  },
  {
    text: `关于我们`,
    children: [
      {
        text: '淘宝店铺',
        link: 'https://100ask.taobao.com',
      },
      {
        text: '在线学习平台',
        link: 'https://www.100ask.net',
      },
      {
        text: '答疑交流社区',
        link: 'https://forums.100ask.net',
      },
      {
        text: '哔哩哔哩',
        link: 'https://space.bilibili.com/275908810',
      },
    ],
  },
  
]
