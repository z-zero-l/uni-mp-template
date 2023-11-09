import { createSSRApp } from 'vue'
import pinia from './stores'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  // 引入pinia状态管理
  app.use(pinia)
  return {
    app
  }
}

// 引入windiCSS
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
