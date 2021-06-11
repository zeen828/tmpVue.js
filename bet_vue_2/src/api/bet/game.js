import Api from '@/api/bet/base'

export default {
  getList () {
    // console.log('API調用: api.bet.game.js > getList()')
    return Api().get('/games/lottery/query/game/list', { params: { rows: 15, page: 1 } })
  },
  getRule (gmeId) {
    // console.log('API調用: api.bet.game.js > getRule()')
    return Api().get('/games/lottery/' + gmeId + '/query/introduction', { params: { rows: 1000, page: 1 } })
  },
  getDraw (gmeId) {
    // console.log('API調用: api.bet.game.js > getDraw()')
    return Api().get('/games/lottery/' + gmeId + '/query/history', { params: { rows: 20, page: 1 } })
  },
  getRecord (gmeId) {
    // console.log('API調用: api.bet.game.js > getHHHH()')
    return Api().get('/games/lottery/' + gmeId + '/query/record', { params: { rows: 15, page: 1 } })
  }
}
