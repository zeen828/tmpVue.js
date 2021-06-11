<template>
  <div class="funds-index">
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <router-link class="nav-link" id="pills-car-tab" data-toggle="pill" href="#pills-car" role="tab" aria-controls="pills-car" aria-selected="true" :to="{ name: 'FundsCar' }">{{ $t('menu.funds.car.name') }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="pills-ferry-tab" data-toggle="pill" href="#pills-ferry" role="tab" aria-controls="pills-ferry" aria-selected="false" :to="{ name: 'FundsFerry' }">{{ $t('menu.funds.ferry.name') }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" id="pills-horse-tab" data-toggle="pill" href="#pills-horse" role="tab" aria-controls="pills-horse" aria-selected="false" :to="{ name: 'FundsHorse' }">{{ $t('menu.funds.horse.name') }}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Funds-Index',
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
