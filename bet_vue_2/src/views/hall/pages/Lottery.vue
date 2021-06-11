<template>
  <div class="hall-pages-lottery shadow">
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
              <li class="nav-item" @click="queryPoint()">
                查詢點數
              </li>
              <li class="nav-item" @click="dockingPoint()">
                點數轉點
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="point-model" class="modal fade">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Hall-Pages-Lottery',
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
    },
    queryPoint () {
      console.log('queryPoint')
    },
    dockingPoint () {
      console.log('dockingPoint')
      this.modelStart()
    },
    modelStart () {
      // console.log('啟動Model')
      $('#point-model').modal('show')
    },
    modelClose () {
      // console.log('關閉Model')
      $('#point-model').modal('hide')
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
