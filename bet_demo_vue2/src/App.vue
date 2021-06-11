<template>
  <div id="app">
    <HtmlHeader msg="我是Header"/>
    <router-view/>
    <HtmlFooter msg="我是Footer"/>
    <HtmlTools/>
    <HtmlDebug/>
  </div>
</template>

<script>
import HtmlHeader from '@/components/html/Header.vue'
import HtmlFooter from '@/components/html/Footer.vue'
import HtmlTools from '@/components/tools/Index.vue'
import HtmlDebug from '@/components/debug/Debug.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HtmlHeader,
    HtmlFooter,
    HtmlTools,
    HtmlDebug
  },
  computed: {},
  methods: {
    ready () {
      this.callApi()
    },
    callApi () {
      var that = this
      // 同時執行
      axios.all([
        that.$store.dispatch('storeFintechClient/clientAuth'),
        that.$store.dispatch('storeBetClient/clientAuth')
      ]).then(axios.spread((one, two) => {
        // console.table('第一個 回傳結果:', one)
        // console.table('第二個 回傳結果:', two)
      })).catch((err) => {
        console.error(err)
      })
    }
  },
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    // console.log('App.vue > mounted ()')
    // console.log('查看vuex:', this.$store)
    // console.log('查看環境設定檔:', process.env)
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
</style>
