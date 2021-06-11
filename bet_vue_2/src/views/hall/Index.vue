<template>
  <div class="hall-index row">
    <div class="col-md-3 col-lg-2 d-none d-sm-block">
      <ul class="list-group">
        <li class="list-group-item list-group-item-dark">{{ $t('menu.hall.name') }}</li>
        <router-link class="list-group-item list-group-item-secondary" :to="{ name: 'HallListLottery' }">{{ $t('menu.hall.lottery.name') }}</router-link>
        <router-link class="list-group-item list-group-item-secondary" :to="{ name: 'HallListFutures' }">{{ $t('menu.hall.futures.name') }}</router-link>
      </ul>
    </div>
    <div class="col-12 d-sm-none d-block">
      <ul class="list-inline d-flex justify-content-center">
        <li class="list-group-item list-group-item-dark">{{ $t('menu.hall.mini') }}</li>
        <router-link class="list-group-item list-group-item-secondary" :to="{ name: 'HallListLottery' }">{{ $t('menu.hall.lottery.mini') }}</router-link>
        <router-link class="list-group-item list-group-item-secondary" :to="{ name: 'HallListFutures' }">{{ $t('menu.hall.futures.mini') }}</router-link>
      </ul>
    </div>
    <div class="col-12 col-md-9 col-lg-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hall-Index',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // 平台會員signature對接彩票會員
      this.$store.dispatch('bet/dockingUser')
    }
  },
  computed: {},
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
