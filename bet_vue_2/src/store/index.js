import Vue from 'vue'
import Vuex from 'vuex'

// module
import fintech from '@/store/modules/fintech/index.js'
import bet from '@/store/modules/bet/index.js'
import lottery from '@/store/modules/bet/lottery.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 網站設定
    website: {
      title: '超強',
      link: 'https://google.com/'
    },
    // 彈出(Modal)訊息
    modal: {
      status: false,
      title: '彈窗標題',
      body: '彈窗內容'
    },
    // 提示訊息
    toast: {
      status: false,
      title: '提示標題',
      body: '提示訊息'
    },
    // API設定
    apiCallCount: 0, // API呼叫計數器
    // 語系
    lang: null,
    debug: false
  },
  mutations: {
    setModalStatus (state, val) {
      state.modal.status = val
    },
    setModalTitle (state, val) {
      state.modal.title = val
    },
    setModalBody (state, val) {
      state.modal.body = val
    },
    setToastStatus (state, val) {
      state.toast.status = val
    },
    setToastTitle (state, val) {
      state.toast.title = val
    },
    setToastBody (state, val) {
      state.toast.body = val
    },
    apiCall (state) {
      // console.log('呼叫API')
      state.apiCallCount++
    },
    apiOver (state) {
      // console.log('結束API')
      state.apiCallCount--
    },
    setLang (state, val) {
      state.lang = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  getters: {
    getWebsite (state) {
      return state.website
    },
    getModalStatus (state) {
      return state.modal.status
    },
    getModalTitle (state) {
      return state.modal.title
    },
    getModalBody (state) {
      return state.modal.body
    },
    getToastStatus (state) {
      return state.toast.status
    },
    getToastTitle (state) {
      return state.toast.title
    },
    getToastBody (state) {
      return state.toast.body
    },
    getLoading (state) {
      // console.log('API運作檢查')
      if (state.apiCallCount <= 0) {
        return false
      } else {
        return true
      }
    },
    getLang (state) {
      return state.lang
    },
    getDebug (state) {
      return state.debug
    }
  },
  actions: {
    ready: function ({ commit, dispatch, rootState, state }) {
      // console.log('Vues.store.action.ready')
    },
    getClientToken: function (context) {
      // console.log('Vues.store.action.getClientToken')
      // 呼叫Store(Vuex)的Module處理一個動作。
      context.dispatch('fintech/loginClient')
      context.dispatch('bet/loginClient')
    }
  },
  modules: {
    fintech,
    bet,
    lottery
  }
})
