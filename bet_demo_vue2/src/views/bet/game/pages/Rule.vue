<template>
  <div class="rule">
    <h2>{{ $t('page.index', {name: "Bet Game Rule"}) }}</h2>
    <md-card v-for="(val, index) in gameRule" :key="index">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{val.name}}</div>
          <div class="md-subhead">{{val.description}}</div>
        </md-card-header-text>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'BetGameRule',
  computed: {
    gmeId: {
      get () {
        return this.$route.params.gmeId
      }
    },
    gameRule: {
      get () {
        return this.$store.getters['storeBetGame/getRule']
      },
      set (val) {
        this.$store.commit('storeBetGame/setRule', val)
      }
    }
  },
  methods: {
    ready () {
      var that = this
      that.$store.dispatch('storeBetGame/getGmeRule', that.gmeId)
    }
  },
  data () {
    return {
      list: []
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('bet/game/pages/Rule.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
