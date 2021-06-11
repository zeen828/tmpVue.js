<template>
  <div class="lottery-index row">
    <div class="col-md-3 col-lg-2 d-none d-sm-block">
      <ul class="list-group">
        <li class="list-group-item active">{{ $t('menu.lottery.name') }}</li>
        <router-link class="list-group-item" :to="{ name: 'LotteryCar' }">{{ $t('menu.lottery.car.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'LotteryFerry' }">{{ $t('menu.lottery.ferry.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'LotteryHorse' }">{{ $t('menu.lottery.horse.name') }}</router-link>
      </ul>
    </div>
    <div class="col-12 d-sm-none d-block">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item active">{{ $t('menu.lottery.name') }}</li>
        <router-link class="list-group-item" :to="{ name: 'LotteryCar' }">{{ $t('menu.lottery.car.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'LotteryFerry' }">{{ $t('menu.lottery.ferry.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'LotteryHorse' }">{{ $t('menu.lottery.horse.name') }}</router-link>
      </ul>
    </div>
    <div class="col-12 col-md-9 col-lg-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lottery-Index',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
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
