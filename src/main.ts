import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import router, { setupRouter } from './router'
import { setupElement } from './libs/element'

const app = createApp(App)
setupStore(app)
setupRouter(app)
setupElement(app)
app.mount('#app')
