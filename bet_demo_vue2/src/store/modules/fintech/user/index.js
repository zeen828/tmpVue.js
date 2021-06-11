import ajaxFintechUser from '@/api/fintech/user'

export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    signature: '',
    accessToken: '',
    isLogin: false,
    uid: 0,
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
    setUid (state, val) {
      state.uid = val
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
    getUid (state) {
      return state.uid
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      console.log('Vues-store使用: model(storeFintechUser).action.ready()')
    },
    async newUserAuth (context, { account, password }) {
      try {
        if (window.localStorage.getItem('fintech_user_access_token') === null) {
          // 先登入
          const token = await ajaxFintechUser.getToken(account, password)
          // console.log(token)
          if (token.status === 200 && token.request.readyState === 4) {
            const apiData = token.data
            if (apiData !== null && apiData.success === true) {
              window.localStorage.setItem('fintech_user_access_token', apiData.data.access_token)
              window.localStorage.removeItem('fintech_client_access_token')
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
              // 執行根指令
              context.commit('storeFintechClient/setAccessToken', '', { root: true })
            }
          }
        }
        // 排隊查關於我
        await ajaxFintechUser.getThirdSignature().then(function (result) {
          // console.log(result)
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data
            if (apiData !== null && apiData.success === true) {
              // 執行本地指令
              const signature = apiData.data.link.split('?signature=')
              context.commit('setSignature', signature[1])
            }
          }
        }).catch(function (error) {
          console.log(error)
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    async userAuthRead (context, { account, password }) {
      try {
        if (window.localStorage.getItem('fintech_user_access_token') === null) {
          // 先登入
          const token = await ajaxFintechUser.getToken(account, password)
          // console.log(token)
          if (token.status === 200 && token.request.readyState === 4) {
            const apiData = token.data
            if (apiData !== null && apiData.success === true) {
              window.localStorage.setItem('fintech_user_access_token', apiData.data.access_token)
              window.localStorage.removeItem('fintech_client_access_token')
              // 執行本地指令
              context.commit('setAccessToken', apiData.data.access_token)
              // 執行根指令
              context.commit('storeFintechClient/setAccessToken', '', { root: true })
            }
          }
        }
        // 排隊查關於我
        await ajaxFintechUser.getRead().then(function (result) {
          // console.log(result)
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data
            if (apiData !== null && apiData.success === true) {
              // 執行本地指令
              context.commit('setUid', apiData.data.uid)
            }
          }
        }).catch(function (error) {
          console.log(error)
        })
        // 獲取signature
        await ajaxFintechUser.getSignature().then(function (result) {
          // console.log(result)
          if (result.status === 200 && result.request.readyState === 4) {
            const apiData = result.data
            if (apiData !== null && apiData.success === true) {
              // 執行本地指令
              console.log('獲取平台會員簽章', apiData.data.signature)
              context.commit('setSignature', apiData.data.signature)
            }
          }
        }).catch(function (error) {
          console.log(error)
        })
      } catch (error) {
        throw new Error(error)
      }
    },
    userAuth (context, { account, password }) {
      if (window.localStorage.getItem('fintech_user_access_token') !== null) {
        return
      }
      ajaxFintechUser.getToken(account, password).then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            window.localStorage.setItem('fintech_user_access_token', apiData.data.access_token)
            window.localStorage.removeItem('fintech_client_access_token')
            // 執行本地指令
            context.commit('setAccessToken', apiData.data.access_token)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    userRead (context) {
      if (window.localStorage.getItem('fintech_user_access_token') === null) {
        return
      }
      ajaxFintechUser.getRead().then(function (result) {
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // 執行本地指令
            context.commit('setUid', apiData.data.uid)
          }
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
