import ajaxBetClient from '@/api/bet/client.js'
import ajaxBetUser from '@/api/bet/user.js'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    signature: '',
    accessToken: '',
    login: false,
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setSignature (state, val) {
      state.signature = val
    },
    setAccessToken (state, val) {
      state.accessToken = val
    },
    setLogin (state, val) {
      state.login = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getSignature (state) {
      return state.signature
    },
    getAccessToken (state) {
      return state.accessToken
    },
    getLogin (state) {
      return state.login
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      // console.log('Vues-store使用: model(bet.index.js).action.ready()')
    },
    async loginClient (context) {
      // console.log('Vues-store使用: model(bet.index.js).action.client()')
      try {
        if (window.localStorage.getItem('betAccessToken') === null) {
          // 使用axios整理後的API。
          const ret = await ajaxBetClient.getToken()
          // console.log('[彩票Client]-登入-API回傳', ret)
          if (ret.status === 200 && ret.request.readyState === 4) {
            const apiData = ret.data
            if (apiData !== null && apiData.success === true) {
              // console.log('資料正確處理')
              // 寫localStorage
              window.localStorage.setItem('betAccessToken', apiData.data.access_token)
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async dockingUser (context) {
      // console.log('Vues-store使用: model(fintech.index.js).action.user()')
      try {
        if (window.localStorage.getItem('fintechUserSignature') != null && window.localStorage.getItem('betUserLogin') === null) {
          // const signature = context.rootGetters['fintech/getSignature']
          const signature = window.localStorage.getItem('fintechUserSignature')
          // console.log('平台對接簽章', signature)
          const ret = await ajaxBetUser.getDockingToken(signature)
          // console.log('[彩票User]-登入-API回傳', ret)
          if (ret.status === 200 && ret.request.readyState === 4) {
            const apiData = ret.data
            if (apiData !== null && apiData.success === true) {
              // console.log('第一API-資料正確處理')
              // 去除平台signature
              window.localStorage.removeItem('fintechUserSignature')
              // console.log('測試', context)
              context.commit('fintech/setSignature', '', { root: true })
              // 寫localStorage
              window.localStorage.setItem('betAccessToken', apiData.data.access_token)
              window.localStorage.setItem('betUserLogin', true)
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
              context.commit('setLogin', true)
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    // 讀取
    async getUserRead (context) {
      console.log('Vues-store使用: model(bet.index.js).action.getUserRead()')
      try {
        const ret = await ajaxBetUser.getRead()
        console.log('API回傳', ret)
        if (ret.status === 200 && ret.request.readyState === 4) {
          const apiData = ret.data
          if (apiData !== null && apiData.success === true) {
            // console.log('第一API-資料正確處理')
            // 執行本地指令
            // context.commit('setRecordList', apiData.data)
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
