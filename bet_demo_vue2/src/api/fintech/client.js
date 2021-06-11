// import Vuex from 'vuex'
// import Vue from 'vue'
import Store from '@/store/index.js'
import Api from '@/api/fintech/base'

export default {
  getToken () {
    console.log('API調用: api.fintech.client.js > getToken()')
    const formData = new FormData()
    formData.append('client_id', process.env.VUE_APP_CLIENT_ID)
    formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)
    return Api().post('/auth/token', formData)
  },
  getService () {
    console.log('API調用: api.fintech.client.js > getService()')
    return Api().get('/auth/service')
  },
  test () {
    console.log('API調用: api.fintech.client.js > test()')
    // console.log('Vue:', Vue)
    // console.log('Vuex:', Vuex)
    // console.log('Vuex.mapGetters:', Vuex.mapGetters.toolDialogMsg)
    console.log('Store:', Store.getters.getToolDialogMsg)
  }
}
