import ajaxFintechClient from '@/api/fintech/client.js'
import ajaxFintechUser from '@/api/fintech/user.js'

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
      // console.log('Vues-store使用: model(fintech.index.js).action.ready()')
    },
    async loginClient (context) {
      // console.log('Vues-store使用: model(fintech.index.js).action.client()')
      try {
        if (window.localStorage.getItem('fintechAccessToken') === null) {
          // 使用axios整理後的API。
          const ret = await ajaxFintechClient.getToken()
          // console.log('[平台Client]-登入-API回傳', ret)
          if (ret.status === 200 && ret.request.readyState === 4) {
            const apiData = ret.data
            if (apiData !== null && apiData.success === true) {
              // console.log('資料正確處理')
              // 寫localStorage
              window.localStorage.setItem('fintechAccessToken', apiData.data.access_token)
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async loginUser (context, { account, password }) {
      // console.log('Vues-store使用: model(fintech.index.js).action.user()')
      try {
        if (window.localStorage.getItem('fintechUserLogin') === null) {
          // 使用axios整理後的API。
          const ret = await ajaxFintechUser.getToken(account, password)
          // console.log('[平台User]-登入-API回傳', ret)
          if (ret.status === 200 && ret.request.readyState === 4) {
            const apiData = ret.data
            if (apiData !== null && apiData.success === true) {
              // console.log('第一API-資料正確處理')
              // 寫localStorage
              window.localStorage.setItem('fintechAccessToken', apiData.data.access_token)
              window.localStorage.setItem('fintechUserLogin', true)
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
              context.commit('setLogin', true)
            }
          }
          // 排隊執行
          const user = await ajaxFintechUser.getThirdSignature()
          // console.log('[平台User]-簽章-API回傳', user)
          if (user.status === 200 && user.request.readyState === 4) {
            const apiData = user.data
            if (apiData !== null && apiData.success === true) {
              // console.log('第二API-資料正確處理')
              const signature = apiData.data.link.split('?signature=')
              // 寫localStorage
              window.localStorage.setItem('fintechUserSignature', signature[1])
              // 執行本地指令
              context.commit('setSignature', signature[1])
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async userSignature (context, { account, password }) {

    }
  }
}
