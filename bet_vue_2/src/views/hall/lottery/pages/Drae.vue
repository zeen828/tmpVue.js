<template>
  <div class="hall-lottery-pages-drae shadow">
    <div class="card-group row">
      <Card v-for="(item, index) in list" :key="index" project="car" :title="item.game" :period="item.period" :at="item.draw_at" :draw="item.general_draw" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/lottery/Card.vue'
export default {
  name: 'Hall-Lottery-Pages-Drae',
  components: {
    Card
  },
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
      // 取得開獎清單
      this.$store.dispatch('lottery/draw', this.gameId)
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
        return this.$store.getters['lottery/getDrawList']
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
