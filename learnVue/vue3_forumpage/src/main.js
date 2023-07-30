//入口文件

//引入工厂函数createApp
import { createApp } from 'vue'
import App from './App.vue'

//创建实例对象，并挂载
// createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')

