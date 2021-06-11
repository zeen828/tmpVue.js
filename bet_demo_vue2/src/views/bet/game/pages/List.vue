<template>
  <div class="list">
    <h2>{{ $t('page.index', {name: "Bet Game List"}) }}</h2>
    <md-card v-for="(val, index) in gameList" :key="index">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{val.name}}</div>
          <div class="md-subhead">{{val.name}}</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-actions>
        <md-button :to="{name: 'BetGameRule',params: {gmeId: val.id}}">前往</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import ajaxBetGame from '@/api/bet/game'

export default {
  name: 'BetGameList',
  computed: {
    gameList: {
      get () {
        return this.$store.getters['storeBetGame/getList']
      },
      set (val) {
        this.$store.commit('storeBetGame/setList', val)
      }
    },
    gameRule: {
      get () {
        return this.$store.getters['storeBetGame/getRule']
      },
      set (val) {
        this.$store.commit('storeBetGame/setRule', val)
      }
    }
  },
  methods: {
    ready () {
      var that = this
      that.$store.dispatch('storeBetGame/getGmeList')
      // that.getGameList()
    },
    getGameList () {
      var that = this
      // if (that.betUserAccessToken !== '') {
      //   return
      // }
      // window.localStorage.setItem('access_token', that.$store.getters['storeBetUser/getAccessToken'])
      ajaxBetGame.getList().then(function (result) {
        console.log(result)
        if (result.status === 200 && result.request.readyState === 4) {
          const apiData = result.data
          console.log(apiData)
          if (apiData !== null && apiData.success === true) {
            // window.localStorage.setItem('bet_user_access_token', apiData.data.access_token)
            // that.betUserAccessToken = apiData.data.access_token
            that.gameList = apiData.data
          }
        }
      })
    }
  },
  data () {
    return {
      list: []
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('bet/game/List.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
