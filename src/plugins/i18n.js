import { createI18n } from 'vue-i18n'
import zh from '../locales/zh.json'
import en from '../locales/en.json'

// 基础消息（全局）
const messages = {
  zh: { ...zh },
  en: { ...en },
}

// 自动加载每个 views 下的模块化 locales（按文件夹作为 namespace）
// 例如: src/views/home/locales/zh.json -> namespace = home, locale = zh
const modules = import.meta.glob('../views/**/locales/*.json', { eager: true })
for (const path in modules) {
  const mod = modules[path]
  // 模块可能以 default 导出也可能直接导出对象
  const data = mod && (mod.default ?? mod)
  if (!data) continue

  // 从路径提取 locale 和 namespace
  // path 示例: "../views/home/locales/zh.json"
  const parts = path.split('/')
  const filename = parts[parts.length - 1] // zh.json
  const locale = filename.replace(/\.json$/i, '')
  const namespace = parts[parts.length - 3] // home

  // 支持两种文件结构：{ "home": { ... } } 或直接 { ... }
  const nsData = data[namespace] ?? data

  messages[locale] = messages[locale] || {}
  messages[locale][namespace] = {
    ...(messages[locale][namespace] || {}),
    ...nsData,
  }
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  globalInjection: true, // 可在模板中直接使用 $t
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
})

export default i18n
