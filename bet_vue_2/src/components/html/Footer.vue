<template>
  <footer class="component-html-footer">
    <div class="p-5 row justify-content-between">
      <div class="col">
        <span>{{ $t('footer.copyright', {year: "2021", name: "will"}) }}</span>
      </div>
      <div class="col">
        <span>Powered by {{ $t('website.author') }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
// Bootstrap 4 頁尾
export default {
  name: 'Component-Html-Footer',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
    }
  },
  computed: {
    website: {
      get () {
        return this.$store.getters.getWebsite
      }
    }
  },
  watch: {},
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
