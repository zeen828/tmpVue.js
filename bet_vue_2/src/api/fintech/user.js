import Api from '@/api/fintech/base'

export default {
  getToken (account, password) {
    // console.log('API調用: api.fintech.user.js > getToken()')
    const formData = new FormData()
    formData.append('account', account)
    formData.append('password', password)
    return Api().post('/auth/user/login/member', formData)
  },
  getSignature () {
    // console.log('API調用: api.fintech.user.js > getSignature()')
    const formData = new FormData()
    return Api().post('/auth/user/signature', formData)
  },
  getRead () {
    // console.log('API調用: api.fintech.user.js > getRead()')
    return Api().get('/member/auth/me')
  },
  getThirdSignature () {
    // console.log('API調用: api.fintech.user.js > getThirdSignature()')
    const formData = new FormData()
    formData.append('type', 'bet')
    return Api().post('/business/auth/link', formData)
  }
}
