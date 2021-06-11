<template>
  <div class="login">
    <h2>{{ $t('page.index', {name: "Bet User Login"}) }}</h2>
    <HtmlHeader msg="我是Header" :list="list"/>
    <md-card class="loginCar md-elevation-24">
      <md-toolbar>
        <span class="md-title">{{ $t('button.login') }}</span>
      </md-toolbar>

      <md-list class="md-double-line" v-if="betUserAccessToken != ''">
        <md-list-item>
          <label>遊戲授權</label>
        </md-list-item>
      </md-list>
      <md-list class="md-double-line" v-else>
        <md-list-item>
          <label>遊戲未授權</label>
        </md-list-item>
      </md-list>
    </md-card>
  </div>
</template>

<script>
import HtmlHeader from '@/components/html/Header.vue'
import ajaxBetUser from '@/api/bet/user'

export default {
  name: 'BetUserLogin',
  components: {
    HtmlHeader
  },
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
    },
    fintechUserSignature: {
      get () {
        return this.$store.getters['storeFintechUser/getSignature']
      },
      set (val) {
        this.$store.commit('storeFintechUser/setSignature', val)
      }
    },
    betUserSignature: {
      get () {
        return this.$store.getters['storeBetUser/getSignature']
      },
      set (val) {
        this.$store.commit('storeBetUser/setSignature', val)
      }
    },
    betUserAccessToken: {
      get () {
        return this.$store.getters['storeBetUser/getAccessToken']
      },
      set (val) {
        this.$store.commit('storeBetUser/setAccessToken', val)
      }
    }
  },
  methods: {
    ready () {
      var that = this
      // 平台帳號註冊遊戲帳號
      // const formData = {
      //   account: that.account,
      //   password: that.password
      // }
      // that.$store.dispatch('storeBetUser/userAuthSignature', formData)
      // that.betUserAuthSignature()

      // 平台簽章登入遊戲帳號
      const formData = {
        signature: that.fintechUserSignature,
        debug: 8
      }
      that.$store.dispatch('storeBetUser/dockingUserAuthSignature', formData)
    },
    // 沒用了留存做紀錄
    betUserAuthSignature () {
      var that = this
      that.$store.commit('callApi')
      // if (that.betUserAccessToken !== '') {
      //   return
      // }
      // window.localStorage.setItem('access_token', that.$store.getters['storeBetClient/getAccessToken'])
      ajaxBetUser.getSignature(that.fintechUserUid, that.fintechUserAccessToken, '1234567').then(function (result) {
        that.$store.commit('overApi')
        // console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            that.betUserSignature = apiData.data.signature
            that.betUserAuth()
          }
        }
      })
    },
    // 沒用了留存做紀錄
    betUserAuth () {
      var that = this
      that.$store.commit('callApi')
      // if (that.betUserAccessToken !== '') {
      //   return
      // }
      // window.localStorage.setItem('access_token', that.$store.getters['storeBetClient/getAccessToken'])
      ajaxBetUser.getToken(that.betUserSignature).then(function (result) {
        // console.log(result)
        that.$store.commit('overApi')
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          // console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            window.localStorage.setItem('bet_user_access_token', apiData.data.access_token)
            that.betUserAccessToken = apiData.data.access_token
          }
        }
      })
    }
  },
  data () {
    return {
      list: [
        { title: 'bet.menu.gamelist', path: '/bet/game/list' },
        { title: 'test', path: '#' }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('bet/user/Login.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
