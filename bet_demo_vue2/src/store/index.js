import Vue from 'vue'
import Vuex from 'vuex'

// module
import storeFintechClient from './modules/fintech/client'
import storeFintechUser from './modules/fintech/user'
import storeBetClient from './modules/bet/client'
import storeBetUser from './modules/bet/user'
import storeBetGame from './modules/bet/game'
import storeBetGameRacing from './modules/bet/game/racing'
import storeBetGameBet from './modules/bet/bet'

Vue.use(Vuex)

// commit 拿來呼叫 mutations，dispatch 拿來呼叫 actions
// actions 不能直接變動 state，只有 mutations 可以更動 state

export default new Vuex.Store({
  // 用來資料共享資料儲存
  state: {
    lang: null,
    // toolMatte: false,
    toolLoadCount: 0,
    toolDialog: false,
    toolDialogTitle: 'title',
    toolDialogMsg: 'msg',
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setLang (state, val) {
      state.lang = val
    },
    callApi (state) {
      // console.log('呼叫API')
      state.toolLoadCount++
    },
    overApi (state) {
      // console.log('結束API')
      state.toolLoadCount--
    },
    setToolDialog (state, val) {
      state.toolDialog = val
    },
    setToolDialogTitle (state, val) {
      state.toolDialogTitle = val
    },
    setToolDialogMsg (state, val) {
      state.toolDialogMsg = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getLang (state) {
      return state.lang
    },
    getToolMatte (state) {
      if (state.toolLoadCount === 0) {
        return false
      }
      return true
    },
    getToolLoadCount (state) {
      return state.toolLoadCount
    },
    getToolDialog (state) {
      return state.toolDialog
    },
    getToolDialogTitle (state) {
      return state.toolDialogTitle
    },
    getToolDialogMsg (state) {
      return state.toolDialogMsg
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready: function ({ commit, dispatch, rootState, state }) {
      console.log('Vues-store使用: action.ready')
    }
  },
  // store的子模組，為了開發大型專案，方便狀態管理而使用的
  modules: {
    storeFintechClient,
    storeFintechUser,
    storeBetClient,
    storeBetUser,
    storeBetGame,
    storeBetGameRacing,
    storeBetGameBet
  }
})
