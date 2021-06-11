<template>
  <div class="lottery-page-ferry shadow">
    <div class="card-group row">
      <Card v-for="(draw, index) in drawList" :key="index" project="ferry" :title="draw.game" :period="draw.period" :at="draw.draw_at" :draw="draw.general_draw" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/lottery/Card.vue'
export default {
  name: 'Lottery-Page-Ferry',
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
      this.$store.dispatch('lottery/draw')
    }
  },
  computed: {
    drawList: {
      get () {
        return this.$store.getters['lottery/getList']
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
