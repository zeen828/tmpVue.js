<template>
  <div class="hall-pages-futures shadow">
    <div class="card-group row">

      <div v-for="(item, index) in gameList" :key="index" class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
          <img class="card-img-top" :src="img" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
          <div class="card-footer">
            <ul class="nav nav-pills nav-fill">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'HallLotteryRuleList', params: { gameId: item.id } }">{{ $t('menu.hall.lottery.rule.name') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'HallLotteryDrawList', params: { gameId: item.id } }">{{ $t('menu.hall.lottery.draw.name') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'HallLotteryBet', params: { gameId: item.id } }">{{ $t('menu.hall.lottery.bet.name') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'HallLotteryRecordList', params: { gameId: item.id } }">{{ $t('menu.hall.lottery.record.name') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'LotteryLists' }">查詢點數</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'LotteryLists' }">點數轉點</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Hall-Pages-Futures',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // 取得遊戲清單
      this.$store.dispatch('lottery/game')
      // 取得遊戲規則
      // this.$store.dispatch('lottery/rule')
      // 取得開獎紀錄
      // this.$store.dispatch('lottery/draw')
      // 取得投注紀錄
      // this.$store.dispatch('lottery/record')
    }
  },
  computed: {
    gameList: {
      get () {
        return this.$store.getters['lottery/getGameList']
      }
    }
  },
  watch: {},
  data () {
    return {
      img: require('@/assets/hall/icon/lottery.png')
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
