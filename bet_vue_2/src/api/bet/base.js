import Store from '@/store/index.js'
import axios from 'axios'
// import qs from 'qs'

export default () => {
  /**
   * axios實利
   */
  var ajaxBase = axios.create({
    // 判斷是否垮域,用來解決CORS
    withCredentials: false,
    baseURL: process.env.VUE_APP_BET_API_PROTOCOL + '://' + process.env.VUE_APP_BET_API_DOMAIN + '/' + process.env.VUE_APP_BET_API_VERSION,
    // 表頭
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Language': process.env.VUE_APP_LANGUAGE,
      'X-Timezone': process.env.VUE_APP_TIMEZONE
      // Authorization: 'Bearer ' + window.localStorage.getItem('access_token')
    },
    // 請求超時1000毫秒(1秒)
    // timeout: 5000,
    timeout: 50000,
    // onUploadProgress(progressEvt) {},
    // onDownloadProgress(progressEvt) {},
    // 資料發送至伺服器前，可作資料處理
    // 陣列中最後的函式必須返回字串、ArrayBuffer、Stream
    transformRequest: [
      function (data, headers) {
        return data
      }
    ]
    // 在進入 then / catch 前可作資料處理
    // transformResponse: [function(data) {return data;}]
  })

  // 攔截處理
  ajaxBase.interceptors.request.use(config => {
    // 呼叫前攔截
    Store.commit('apiCall', 'false', { root: true })
    // console.log('axios設定：', config)
    if (!config.data) {
      config.data = {}
    }
    switch (config.url) {
      case '/auth/token':
        // console.log('Token使用(bet): 無')
        config.headers.Authorization = ''
        break
      case '/docking/user/signature/login':
      case '/auth/user/login/member':
      case '/member/auth/login':
      case '/member/auth/signature/login':
        // console.log('Token使用(bet): bet client')
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('betAccessToken')
        break
      default:
        // console.log('Token使用(bet): bet user')
        config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('betAccessToken')
        break
    }
    // console.log('axios設定資料：', qs.stringify(config.data))
    return config
  }, error => {
    // 錯誤攔截
    Store.commit('apiOver', 'false', { root: true })
    // 處理請求錯誤
    // console.log('axios錯誤：', error)
    return Promise.reject(error)
  })

  // 回傳成功攔截處理
  ajaxBase.interceptors.response.use(response => {
    // 成功攔截
    Store.commit('apiOver', 'false', { root: true })
    // console.log('axios回傳：', response)
    // let res = respone.data; // 如果返回的結果是data.data的，嫌麻煩可以用這個，return res
    return response
  }, error => {
    // 錯誤攔截
    Store.commit('apiOver', 'false', { root: true })
    // 處理請求錯誤
    // console.log('axios錯誤：', error)
    return Promise.reject(error)
  })

  return ajaxBase
}
