import Api from '@/api/bet/base'

export default {
  getToken () {
    // console.log('API調用: api.bet.client.js > getToken()')
    const formData = new FormData()
    formData.append('client_id', process.env.VUE_APP_BET_CLIENT_ID)
    formData.append('client_secret', process.env.VUE_APP_BET_CLIENT_SECRET)
    // formData.append('client_id', '1c95e58f8d804cf29b33b8d6f6e4e5b0')
    // formData.append('client_secret', '5aff1514aa7a6cb833071efdb774369a')
    return Api().post('/auth/token', formData)
    // return Api().post('http://localhost:8000/api/v1/auth/token', formData)
  },
  getService () {
    // console.log('API調用: api.bet.client.js > getService()')
    return Api().get('/auth/service')
  }
}
