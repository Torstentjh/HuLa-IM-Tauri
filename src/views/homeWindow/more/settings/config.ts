import { type } from '@tauri-apps/plugin-os'
import { MacOsKeyEnum, WinKeyEnum } from '@/enums'

const key = computed(() => {
  return `${type() === 'windows' ? WinKeyEnum.ctrl : MacOsKeyEnum['⌘']}`
})
/** 侧边栏选项 */
const sideOptions = ref<OPT.L.SettingSide[]>([
  {
    url: '/general',
    label: '通用',
    icon: 'setting-config'
  },
  {
    url: '/loginSetting',
    label: '登录设置',
    icon: 'settings'
  }
])

/** 发送按钮快捷键的选项 */
const sendOptions = [
  {
    label: '按 Enter 键发送消息',
    value: 'Enter'
  },
  {
    label: `按 ${key.value} + Enter 键发送消息`,
    value: `${key.value}+Enter`
  }
]

/** 字体 */
const fontOptions = [
  {
    label: '阿里妈妈刀隶体',
    value: 'AliDaoLiTi'
  },
  {
    label: '阿里妈妈方圆体',
    value: 'AliFangYuan'
  },
  {
    label: '阿里妈妈东方大楷',
    value: 'AliDongFangDaKai'
  }
]
export { sideOptions, sendOptions, fontOptions }
