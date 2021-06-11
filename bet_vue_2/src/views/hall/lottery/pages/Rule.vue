<template>
  <div class="hall-lottery-pages-rule">
    <table class="table table-striped table-responsive-md shadow">
      <thead>
        <tr class="d-flex">
          <th class="col-3" scope="col">玩法</th>
          <th class="col-9" scope="col">說明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index" class="d-flex">
          <th class="col-3">{{ item.name }}</th>
          <th class="col-9">{{ item.description }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Hall-Lottery-Pages-Rule',
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
      this.$store.dispatch('lottery/rule', this.gameId)
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
        return this.$store.getters['lottery/getRuleList']
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
