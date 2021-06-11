<template>
  <div id="system-model-loading" class="component-html-modals modal">
    <div class="spinner-border text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// Bootstrap 4 等待讀取
export default {
  name: 'Component-Html-B4Loading',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      $('#system-model-loading').modal({ backdrop: 'static', keyboard: false })
      // 檢查
      this.checkSwitch(this.loading)
    },
    // 檢查開關
    checkSwitch (val) {
      switch (val) {
        case true:
        case 'true':
          $('#system-model-loading').modal('show')
          break
        default:
          $('#system-model-loading').modal('hide')
          break
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  watch: {
    loading (newVal, oldVal) {
      this.checkSwitch(newVal)
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
#system-model-loading .spinner-border {
  position: relative;
  top: 35vh;
  width: 15vw;
  height: 15vw;
}
</style>
