import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { formateDate } from './utils/time'

const app = createApp(App)
// app.config.globalProperties.$router = router
app.config.globalProperties.$filter = {
    formateDate(date){
        return formateDate(date);
    }
}
app.use(store).use(router).mount('#app')
