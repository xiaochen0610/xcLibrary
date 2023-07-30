import './assets/main.css'
//引入工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//创建应用实例对象，类似vm，但比vm轻盈
const app = createApp(App)

app.use(router)
//挂载
app.mount('#app')
