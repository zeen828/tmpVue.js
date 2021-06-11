import ajaxBetGameBet from '@/api/bet/bet'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    rule: [],
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setRule (state, val) {
      state.rule = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getRule (state) {
      return state.rule
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      console.log('Vues-store使用: model(storeBetGameBet).action.ready()')
    },
    getGmeRule (context, gmeId) {
      ajaxBetGameBet.getRule(gmeId).then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setRule', apiData.data)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
