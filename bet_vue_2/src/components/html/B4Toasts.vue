<template>
  <div class="component-html-toasts">
  </div>
</template>

<script>
import $ from 'jquery'
// Bootstrap 4 提示
export default {
  name: 'Component-Html-B4Toasts',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
    },
    modelClose () {
      // console.log('關閉Model')
      this.toastStatus = false
    },
    modelStart () {
      // console.log('啟動Model')
      this.toastStatus = true
    }
  },
  computed: {
    toastStatus: {
      get () {
        return this.$store.getters.getToastStatus
      },
      set (val) {
        this.$store.commit('setToastStatus', val)
      }
    },
    toastTitle: {
      get () {
        return this.$store.getters.getToastTitle
      },
      set (val) {
        this.$store.commit('setToastTitle', val)
      }
    },
    toastBody: {
      get () {
        return this.$store.getters.getToastBody
      },
      set (val) {
        this.$store.commit('setToastBody', val)
      }
    }
  },
  watch: {
    toastStatus (newVal, oldVal) {
      switch (newVal) {
        case true:
        case 'true':
          $('.toast').toast('show')
          break
        default:
          $('.toast').toast('hide')
          break
      }
    }
  },
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
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
// .toast {
//   z-index: 999
// }
</style>
