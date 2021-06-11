<template>
  <div class="hall-lottery-index row">
    <div class="col-md-3 col-lg-2 d-none d-sm-block">
      <ul class="list-group">
        <li class="list-group-item list-group-item-dark">{{ $t('menu.hall.name') }}</li>
        <li class="list-group-item list-group-item-secondary">{{ $t('menu.hall.lottery.name') }}</li>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryRuleList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.rule.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryDrawList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.draw.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryBet', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.bet.name') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryRecordList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.record.name') }}</router-link>
        <li class="list-group-item list-group-item-secondary">{{ $t('menu.hall.futures.name') }}</li>
      </ul>
    </div>
    <div class="col-12 d-sm-none d-block">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item list-group-item-secondary p-10">{{ $t('menu.hall.lottery.mini') }}</li>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryRuleList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.rule.mini') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryDrawList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.draw.mini') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryBet', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.bet.mini') }}</router-link>
        <router-link class="list-group-item" :to="{ name: 'HallLotteryRecordList', params: { gameId: gameId } }">{{ $t('menu.hall.lottery.record.mini') }}</router-link>
      </ul>
    </div>
    <div class="col-12 col-md-9 col-lg-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hall-Lottery-Index',
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
    gameId: {
      get () {
        return this.$route.params.gameId
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
