<template>
  <div class="record">
    <h2>{{ $t('page.index', {name: "Bet Game Record"}) }}</h2>
    <md-card v-for="(val, index) in gameRecord" :key="index">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">第 {{val.period}} 期</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div v-show="val.value">
          <strong>{{ val.rule }}:{{ val.value }}</strong>
        </div>
      </md-card-content>
      <md-card-expand>
        <div v-if="val.win_user == '2'" class="bg-success">
          <strong>中獎</strong>
        </div>
        <div v-else-if="val.win_user == '1'" class="bg-danger">
          <strong>未中獎</strong>
        </div>
        <div v-else-if="val.win_user == '0'" class="bg-secondary">
          <strong>未開獎</strong>
        </div>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'BetGameRecord',
  computed: {
    gmeId: {
      get () {
        return this.$route.params.gmeId
      }
    },
    gameRecord: {
      get () {
        return this.$store.getters['storeBetGame/getRecord']
      },
      set (val) {
        this.$store.commit('storeBetGame/setRecord', val)
      }
    }
  },
  methods: {
    ready () {
      var that = this
      that.$store.dispatch('storeBetGame/getGmeRecord', that.gmeId)
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
    console.log('bet/game/pages/Record.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>
