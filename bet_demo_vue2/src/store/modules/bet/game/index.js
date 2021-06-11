import ajaxBetGame from '@/api/bet/game'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    list: [],
    rule: [],
    draw: [],
    record: [],
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setList (state, val) {
      state.list = val
    },
    setRule (state, val) {
      state.rule = val
    },
    setDraw (state, val) {
      state.draw = val
    },
    setRecord (state, val) {
      state.record = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getList (state) {
      return state.list
    },
    getRule (state) {
      return state.rule
    },
    getDraw (state) {
      return state.draw
    },
    getRecord (state) {
      return state.record
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      console.log('Vues-store使用: model(storeBetGame).action.ready()')
    },
    getGmeList (context) {
      console.log('Vues-store使用: model(storeBetGame).action.getGmeList()')
      console.log(context.getters.getList)
      ajaxBetGame.getList().then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setList', apiData.data)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    getGmeRule (context, gmeId) {
      console.log('Vues-store使用: model(storeBetGame).action.getGmeRule()')
      ajaxBetGame.getRule(gmeId).then(function (result) {
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setRule', apiData.data)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    getGmeDraw (context, gmeId) {
      console.log('Vues-store使用: model(storeBetGame).action.getGmeDraw()')
      ajaxBetGame.getDraw(gmeId).then(function (result) {
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setDraw', apiData.data)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    getGmeRecord (context, gmeId) {
      console.log('Vues-store使用: model(storeBetGame).action.getGmeRecord()')
      ajaxBetGame.getRecord(gmeId).then(function (result) {
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setRecord', apiData.data)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
