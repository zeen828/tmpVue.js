<template>
  <div class="hall-lottery-pages-record">
    <table class="table table-striped table-responsive-md shadow">
      <thead>
        <tr class="d-flex">
          <th class="col" scope="col">時間</th>
          <th class="col" scope="col">遊戲</th>
          <th class="col" scope="col">期數</th>
          <th class="col" scope="col">項目</th>
          <th class="col" scope="col">投注</th>
          <th class="col" scope="col">金額</th>
          <th class="col" scope="col">輸贏</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index" class="d-flex">
          <th class="col">{{ item.created_at }}</th>
          <th class="col">{{ item.game }}</th>
          <th class="col">{{ item.period }}</th>
          <th class="col">{{ item.rule }}</th>
          <th class="col">{{ item.value }}</th>
          <th class="col">{{ item.amount }}</th>
          <th class="col">{{ item.win_user == 0? '未開獎' : '已開獎' }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Hall-Lottery-Pages-Record',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // 取得遊戲規則
      this.$store.dispatch('lottery/record', this.gameId)
    }
  },
  computed: {
    gameId: {
      get () {
        return this.$route.params.gameId
      }
    },
    list: {
      get () {
        return this.$store.getters['lottery/getRecordList']
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
