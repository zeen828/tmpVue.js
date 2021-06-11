<template>
  <div class="login">
    <h2>{{ $t('page.index', {name: "Fintech User Login"}) }}</h2>
    <md-card class="loginCar md-elevation-24" v-if="fintechUserAccessToken == ''">
      <md-toolbar>
        <span class="md-title">{{ $t('button.login') }}</span>
      </md-toolbar>
      <md-list class="md-double-line">
        <md-list-item>
          <md-field>
            <label>{{ $t('user.account') }}</label>
            <md-input v-model="account"></md-input>
          </md-field>
        </md-list-item>
        <md-list-item>
          <md-field>
            <label>{{ $t('user.password') }}</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </md-list-item>
        <md-list-item>
          <md-button class="md-raised md-primary" v-on:click="submit">{{ $t('button.login') }}</md-button>
        </md-list-item>
      </md-list>
    </md-card>
    <md-card class="loginCar md-elevation-24" v-else>
      <md-toolbar>
        <span class="md-title">{{ $t('button.login') }}</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-list-item>
          <label>{{ $t('user.uid') }}</label>
          {{ fintechUserUid }}
        </md-list-item>
      </md-list>
    </md-card>
  </div>
</template>

<script>
import ajaxFintechUser from '@/api/fintech/user'

export default {
  name: 'FintechUserLogin',
  computed: {
    fintechUserAccessToken: {
      get () {
        return this.$store.getters['storeFintechUser/getAccessToken']
      },
      set (val) {
        this.$store.commit('storeFintechUser/setAccessToken', val)
      }
    },
    fintechUserUid: {
      get () {
        return this.$store.getters['storeFintechUser/getUid']
      },
      set (val) {
        this.$store.commit('storeFintechUser/setUid', val)
      }
    }
  },
  methods: {
    submit () {
      var that = this
      const formData = {
        account: that.account,
        password: that.password
      }
      // that.$store.dispatch('storeFintechUser/userAuthRead', formData)
      that.$store.dispatch('storeFintechUser/newUserAuth', formData)
    },
    // 排隊執行測試(測試用沒用了)
    async test () {
      var that = this
      try {
        // window.localStorage.setItem('access_token', that.$store.getters['storeFintechClient/getAccessToken'])
        console.log(that.$store.getters['storeFintechClient/getAccessToken'])
        const token = await ajaxFintechUser.getToken(that.account, that.password)
        console.table('getToken:', token)
        // window.localStorage.setItem('access_token', token.data.data.access_token)
        const read = await ajaxFintechUser.getRead()
        console.table('getRead:', read)
        // const { data } = get // 資料在 data 屬性
        // console.dir(get) // 回傳類似 RequestObject
        // console.table(data)
      } catch (error) {
        throw new Error(error)
      }
    },
    // 沒用了留存做紀錄
    fintechUserAuth () {
      var that = this
      that.$store.commit('callApi')
      // if (that.fintechUserAccessToken !== '') {
      //   return
      // }
      // window.localStorage.setItem('access_token', that.$store.getters['storeFintechClient/getAccessToken'])
      ajaxFintechUser.getToken(that.account, that.password).then(function (result) {
        that.$store.commit('overApi')
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            window.localStorage.setItem('fintech_user_access_token', apiData.data.access_token)
            that.fintechUserAccessToken = apiData.data.access_token
            that.fintechUserRead()
          }
        }
      })
    },
    // 沒用了留存做紀錄
    fintechUserRead () {
      var that = this
      that.$store.commit('callApi')
      // if (that.fintechUserAccessToken === '') {
      //   return
      // }
      // window.localStorage.setItem('access_token', that.$store.getters['storeFintechUser/getAccessToken'])
      ajaxFintechUser.getRead().then(function (result) {
        that.$store.commit('overApi')
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            that.fintechUserUid = apiData.data.uid
          }
        }
      })
    }
  },
  data () {
    return {
      account: 'will@taki.tw',
      password: '12345678'
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    // console.log('fintech/user/Login.vue > mounted ()')
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss">
.loginCar {
  width: 320px;
  max-width: 100%;
  margin: 0px auto;
}
</style>
