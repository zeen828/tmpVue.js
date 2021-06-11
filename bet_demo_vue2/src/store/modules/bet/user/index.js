import ajaxBetUser from '@/api/bet/user'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    signature: '',
    accessToken: '',
    isLogin: false,
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
      console.log('Vues-store使用: model(storeBetUser).action.ready()')
    },
    async dockingUserAuthSignature (context) {
      console.log('Vues-store使用: model(storeBetUser).action.dockingUserAuthSignature()')
      try {
        console.log(window.localStorage.getItem('bet_user_access_token'))
        if (window.localStorage.getItem('bet_user_access_token') === null) {
          // 平台簽章
          const signature = context.rootGetters['storeFintechUser/getSignature']
          console.log('平台會員簽章', signature)
          console.log('API主體', ajaxBetUser)
          const token = await ajaxBetUser.getDockingToken(signature)
          console.log('對接平台會員token', token)
          if (token.status === 200 && token.request.readyState === 4) {
            const apiData = token.data
            if (apiData !== null && apiData.success === true) {
              window.localStorage.setItem('bet_user_access_token', apiData.data.access_token)
              window.localStorage.removeItem('bet_client_access_token')
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
              // 執行根指令
              context.commit('storeBetClient/setAccessToken', '', { root: true })
            }
          }
        }
      } catch (error) {
        throw new Error(error)
      }
    },
    async userAuthSignature (context) {
      console.log('Vues-store使用: model(storeBetUser).action.userAuthSignature()')
      try {
        console.log(window.localStorage.getItem('bet_user_access_token'))
        if (window.localStorage.getItem('bet_user_access_token') === null) {
          console.log('先登入')
          // 先登入
          const account = context.rootGetters['storeFintechUser/getUid']
          const oauthToken = context.rootGetters['storeFintechUser/getAccessToken']
          const uid = ''
          const token = await ajaxBetUser.getSignature(account, oauthToken, uid)
          console.log(token)
          if (token.status === 200 && token.request.readyState === 4) {
            const apiData = token.data
            if (apiData !== null && apiData.success === true) {
              // 執行本地指令
              context.commit('setSignature', apiData.data.signature)
            }
          }
          console.log('排隊查關於我')
          // 排隊查關於我
          const signature = context.rootGetters['storeBetUser/getSignature']
          await ajaxBetUser.getToken(signature).then(function (result) {
            console.log(result)
            if (result.status === 200 && result.request.readyState === 4) {
              const apiData = result.data
              // console.log(apiData)
              if (apiData !== null && apiData.success === true) {
                window.localStorage.setItem('bet_user_access_token', apiData.data.access_token)
                window.localStorage.removeItem('bet_client_access_token')
                // 執行本地指令
                context.commit('setAccessToken', apiData.data.access_token)
                // 執行本地指令
                context.commit('setSignature', '')
                // 執行根指令
                context.commit('storeBetClient/setAccessToken', '', { root: true })
              }
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
        console.log('結束')
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
