import Api from '@/api/bet/base'

export default {
  getDockingToken (signature) {
    // console.log('API調用: api.bet.user.js > getToken()')
    const formData = new FormData()
    formData.append('signature', signature)
    // formData.append('debug', 8)
    return Api().post('/third/service/user/signature/login', formData)
    // return Api().post('/docking/user/signature/login', formData)
  },
  getSignature (account, oauthToken, uid) {
    // console.log('API調用: api.bet.user.js > getSignature()')
    const formData = new FormData()
    formData.append('account', account)
    formData.append('oauth_token', oauthToken)
    if (uid.length !== 0) {
      formData.append('uid', uid)
    }
    return Api().post('/member/auth/login', formData)
  },
  getToken (signature) {
    // console.log('API調用: api.bet.user.js > getToken()')
    const formData = new FormData()
    formData.append('signature', signature)
    return Api().post('/member/auth/signature/login', formData)
  },
  getRead () {
    // console.log('API調用: api.bet.user.js > getRead()')
    return Api().get('/member/auth/me')
  }
}
