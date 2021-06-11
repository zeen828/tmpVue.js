import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// i18n - 多國語系
import VueI18n from 'vue-i18n'// 引入 Vue I18n
import zh from './i18n/zh'// 存放中文語系檔
import en from './i18n/en'// 存放英文語系檔

// Vue Material - 樣板
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// i18n
Vue.use(VueI18n)

// 預設使用的語系
let locale = 'en'

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem('footmark-lang')) {
  locale = localStorage.getItem('footmark-lang')
  store.commit('setLang', locale)
} else {
  store.commit('setLang', locale)
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    zh: zh,
    en: en
  }
})

// Vue Material
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
