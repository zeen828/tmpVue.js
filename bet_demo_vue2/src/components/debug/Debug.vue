<template>
  <div class="debug">
    <h1>測試區</h1>
    <ul>
      <li>{{ debug_loading }}</li>
      <li>{{ debug_apiCountCount }}</li>
    </ul>
    <div>
      <md-button class="md-raised md-accent" v-on:click="clearToken">清除token</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Debug',
  components: {},
  props: {},
  computed: {
    debug_loading () {
      return this.$store.getters.getToolMatte
    },
    debug_apiCountCount () {
      return this.$store.state.toolLoadCount
    }
  },
  methods: {
    clearToken () {
      var that = this
      that.$store.commit('storeFintechClient/setAccessToken', null)
      that.$store.commit('storeFintechUser/setAccessToken', null)
      that.$store.commit('storeBetClient/setAccessToken', null)
      that.$store.commit('storeBetUser/setAccessToken', null)
      window.localStorage.removeItem('fintech_client_access_token')
      window.localStorage.removeItem('fintech_user_access_token')
      window.localStorage.removeItem('bet_client_access_token')
      window.localStorage.removeItem('bet_user_access_token')
    }
  },
  data () {
    return {
      debug: false
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
