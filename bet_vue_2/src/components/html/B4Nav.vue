<template>
  <nav class="component-html-nav shadow" aria-label="breadcrumb">
    <ol class="breadcrumb w-auto">
      <li v-for="(breadcrumb, index) in breadcrumbList" :key="index" class="breadcrumb-item">
        <router-link :to="{ name: breadcrumb.toName }">{{ $t(breadcrumb.i18n) }}</router-link>
      </li>
      <li class="breadcrumb-item active">{{ $t(nowPage) }}</li>
    </ol>
  </nav>
</template>

<script>
// Bootstrap 4 導引麵包屑
export default {
  name: 'Component-Html-B4Nav',
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
    updateList () {
      // 當下頁面
      this.nowPage = this.$route.meta.i18n
      // 麵包屑資料
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },
  computed: {},
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  data () {
    return {
      nowPage: '',
      breadcrumbList: []
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.ready()
    this.updateList()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
