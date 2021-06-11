<template>
  <div class="component-html-lang btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ $t('menu.language.name') }}
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" v-for="(item, index) in optionsLang" v-bind:key="index" v-on:click="setLang(item.value)" href="#">{{ item.text }}</a>
    </div>
  </div>
</template>

<script>
// Bootstrap 4 多國語系
export default {
  name: 'Component-Html-B4Lang',
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
    setLang (value) {
      this.$store.commit('setLang', value)
      this.$i18n.locale = value
      localStorage.setItem('website-lang', value)
    }
  },
  computed: {},
  watch: {},
  data () {
    return {
      optionsLang: [
        { text: '中文', value: 'zh' },
        { text: 'English', value: 'en' }
      ]
    }
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
