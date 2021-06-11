import ajaxBetGame from '@/api/bet/game.js'
import ajaxBetBet from '@/api/bet/bet.js'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    gameList: null,
    ruleList: null,
    drawList: null,
    betRuleList: null,
    recordList: null,
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setGameList (state, val) {
      state.gameList = val
    },
    setRuleList (state, val) {
      state.ruleList = val
    },
    setDrawList (state, val) {
      state.drawList = val
    },
    setBetRuleList (state, val) {
      state.betRuleList = val
    },
    setRecordList (state, val) {
      state.recordList = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getGameList (state) {
      return state.gameList
    },
    getRuleList (state) {
      return state.ruleList
    },
    getDrawList (state) {
      return state.drawList
    },
    getBetRuleList (state) {
      return state.betRuleList
    },
    getRecordList (state) {
      return state.recordList
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.ready()')
    },
    // 彩票遊戲清單
    async game (context, gameId) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.game()')
      try {
        const ret = await ajaxBetGame.getList(gameId)
        // console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setGameList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 遊戲規則
    async rule (context, gameId) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.rule()')
      try {
        const ret = await ajaxBetGame.getRule(gameId)
        // console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setRuleList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 開獎紀錄
    async draw (context, gameId) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.draw()')
      try {
        const ret = await ajaxBetGame.getDraw(gameId)
        // console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setDrawList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 投注紀錄
    async record (context, gameId) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.record()')
      try {
        const ret = await ajaxBetGame.getRecord(gameId)
        // console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setRecordList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 投注規則
    async betRule (context, gameId) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.betRule()')
      try {
        const ret = await ajaxBetBet.getRule(gameId)
        // console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setBetRuleList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 遊戲投注(多筆)
    async betting (context, { gameId, formData }) {
      // console.log('Vues-store使用: model(bet.lottery.js).action.record()')
      console.log('gameId', gameId)
      console.log('formData', formData)
      try {
        const ret = await ajaxBetBet.getBetting(gameId, formData)
        console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            context.commit('setRecordList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
