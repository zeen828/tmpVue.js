import ajaxFintechClient from '@/api/fintech/client'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    signature: '',
    accessToken: '',
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
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      console.log('Vues-store使用: model(storeFintechClient).action.ready()')
    },
    clientAuth (context) {
      // console.log(window.localStorage.getItem('fintech_client_access_token'))
      // if (window.localStorage.getItem('fintech_client_access_token') !== null) {
      //   return
      // }
      ajaxFintechClient.getToken().then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          if (apiData !== null && apiData.success === true) {
            window.localStorage.setItem('fintech_client_access_token', apiData.data.access_token)
            // 執行本地指令
            context.commit('setAccessToken', apiData.data.access_token)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    service (context) {
      console.log('vuex service')
    }
  }
}
