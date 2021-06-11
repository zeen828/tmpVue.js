import Api from '@/api/bet/base'

export default {
  getRule (gmeId) {
    console.log('API調用: api.bet.bet.js > getRule()')
    return Api().get('/games/lottery/' + gmeId + '/bet/rule/list', { params: { rows: 1000, page: 1 } })
  },
  getBetting (gmeId, formData) {
    console.log('API調用: api.bet.game.js > getDraw()')
    // 陣列組合往前移資料處理做
    // const formData = new FormData()
    // formData.append('rule_id[]', rule)
    // formData.append('rule_id[]', rule)
    // formData.append('value[]', value)
    // formData.append('value[]', value)
    // formData.append('amount[]', amount)
    // formData.append('amount[]', amount)
    console.log('提交資料: ', formData)
    return Api().post('/games/lottery/' + gmeId + '/bet/orders', formData)
  }
}
