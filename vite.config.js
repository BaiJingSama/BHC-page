import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig((mode) => {
  
  const env = loadEnv(mode, process.cwd())

  return {
    base: 'BHC-page',
    plugins: [vue(),tailwindcss(),],
    server: {
      host: '0.0.0.0', // 允许局域网访问
      proxy: {
        // 匹配所有以 /api 开头的请求
        '/api': {
          target: env.VITE_API_BASE_URL, // 读取环境变量
          changeOrigin: true, // 是否跨域
          rewrite: (path) => path.replace(/^\/api/, ''), // 去掉 /api 前缀
        },
      },
    },
  }
})
