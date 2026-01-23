import { createI18n } from 'vue-i18n'
import zh from '../locales/zh.json'
import en from '../locales/en.json'

const messages= {
  zh: { ...zh },
  en: { ...en },
}

// 直接导入所有视图的语言文件
import homeZh from '../views/home/locales/zh.json'
import homeEn from '../views/home/locales/en.json'
import downGameZh from '../views/downGame/locales/zh.json'
import downGameEn from '../views/downGame/locales/en.json'
import recommendBhZh from '../views/recommendBh/locales/zh.json'
import recommendBhEn from '../views/recommendBh/locales/en.json'
import noticeZh from '../views/notice/locales/zh.json'
import noticeEn from '../views/notice/locales/en.json'

// 合并到messages对象，使用扩展运算符确保主语言文件的内容不被覆盖
messages.zh = {
  ...messages.zh,
  home: { ...homeZh },
  downGame: { ...downGameZh },
  recommendBh: { ...recommendBhZh },
  notice: { ...noticeZh }
}

messages.en = {
  ...messages.en,
  home: { ...homeEn },
  downGame: { ...downGameEn },
  recommendBh: { ...recommendBhEn },
  notice: { ...noticeEn }
}

const i18n = createI18n({
  legacy: true, // 使用兼容模式，支持$t()语法
  globalInjection: true,
  locale: localStorage.getItem('locale') || 'zh',
  fallbackLocale: 'en',
  messages,
})

// 添加调试信息
console.log('i18n配置:', {
  locale: i18n.global.locale,
  fallbackLocale: i18n.global.fallbackLocale,
  messages: {
    zh: Object.keys(messages.zh),
    en: Object.keys(messages.en)
  },
  homeMessagesZh: Object.keys(messages.zh.home || {}),
  homeMessagesEn: Object.keys(messages.en.home || {})
})

export default i18n
