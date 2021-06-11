<template>
  <div id="app" class="container-fluid">
    <ComponentToasts/>
    <ComponentModals/>
    <!-- <ComponentUser/> -->
    <HtmlHeader/>
    <ComponentNav/>
    <router-view/>
    <HtmlFooter />
    <ComponentLoading/>
  </div>
</template>

<script>
import HtmlHeader from '@/components/html/Header.vue'
import HtmlFooter from '@/components/html/Footer.vue'
// import ComponentUser from '@/components/html/B4User.vue'
import ComponentNav from '@/components/html/B4Nav.vue'
import ComponentToasts from '@/components/html/B4Toasts.vue'
import ComponentModals from '@/components/html/B4Modals.vue'
import ComponentLoading from '@/components/html/B4Loading.vue'

export default {
  name: 'App',
  components: {
    HtmlHeader,
    HtmlFooter,
    // ComponentUser,
    ComponentNav,
    ComponentToasts,
    ComponentModals,
    ComponentLoading
  },
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // const debugA = this.$store.getters['fintech/getDebug']
      // console.log('fintech/getDebug', debugA)
      // const debugB = this.$store.getters['bet/getDebug']
      // console.log('bet/getDebug', debugB)
    },
    localStorage () {
      // 平台
      // AccessToken
      if (window.localStorage.getItem('fintechAccessToken') === null) {
        // this.$store.commit('fintech/setAccessToken', false)
      } else {
        this.$store.commit('fintech/setAccessToken', window.localStorage.getItem('fintechAccessToken'))
      }
      // 登入顯示
      if (window.localStorage.getItem('fintechUserLogin') === null) {
        this.$store.commit('fintech/setLogin', false)
      } else {
        this.$store.commit('fintech/setLogin', true)
      }
      // 對接簽章
      if (window.localStorage.getItem('fintechUserSignature') === null) {
        // this.$store.commit('fintech/setSignature', false)
      } else {
        this.$store.commit('fintech/setSignature', window.localStorage.getItem('fintechUserSignature'))
      }
      // 彩票
      // AccessToken
      if (window.localStorage.getItem('betAccessToken') === null) {
        // this.$store.commit('bet/setAccessToken', false)
      } else {
        this.$store.commit('bet/setAccessToken', window.localStorage.getItem('betAccessToken'))
      }
      // 登入顯示
      if (window.localStorage.getItem('betUserLogin') === null) {
        this.$store.commit('bet/setLogin', false)
      } else {
        this.$store.commit('bet/setLogin', true)
      }
    }
  },
  computed: {},
  watch: {},
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
  beforeMount () {
    // localStorage紀錄處理
    this.localStorage()
    // 呼叫Store(Vuex)處理一個動作。平台&遊戲ClientToken。
    this.$store.dispatch('getClientToken')
  },
  mounted () {
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  /*隱藏滾輪*/
  display: none;
}
</style>
