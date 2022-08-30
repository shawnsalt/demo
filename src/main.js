import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $axios from './serve/serve'

const app = createApp(App)
app.config.globalProperties.$ajax = $axios

app.use(store)
app.use(router)
app.mount('#app')
