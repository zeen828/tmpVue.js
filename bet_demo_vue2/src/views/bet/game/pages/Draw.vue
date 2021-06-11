<template>
  <div class="rule">
    <h2>{{ $t('page.index', {name: "Bet Game Draw"}) }}</h2>
    <div v-show="statusb" class="canvas-wrapper" ref="stage">
      <ScenesBackground/>
      <ScenesEnd/>
      <RacingCar :no="1" :st="10" :width="width" :height="height" />
      <RacingCar :no="2" :st="9" :width="width" :height="height" />
      <RacingCar :no="3" :st="8" :width="width" :height="height" />
      <RacingCar :no="4" :st="7" :width="width" :height="height" />
      <RacingCar :no="5" :st="6" :width="width" :height="height" />
      <RacingCar :no="6" :st="5" :width="width" :height="height" />
      <RacingCar :no="7" :st="4" :width="width" :height="height" />
      <RacingCar :no="8" :st="3" :width="width" :height="height" />
      <RacingCar :no="9" :st="2" :width="width" :height="height" />
      <RacingCar :no="10" :st="1" :width="width" :height="height" />
    </div>
    <md-card v-for="(val, index) in gameDraw" :key="index">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">第 {{val.period}} 期</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div v-show="val.general_draw">
          <strong>一般號:</strong>
          {{val.general_draw}}
        </div>
        <div v-show="val.special_draw">
          <strong>特別號:</strong>
          {{val.special_draw}}
        </div>
      </md-card-content>
      <md-card-expand>
        <div v-show="val.draw_rate">
          <strong>中獎率:</strong>
          {{val.draw_rate}}
          <div @click="test(val.general_draw)">看動畫</div>
        </div>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import ScenesBackground from '@/components/racing/scenes/track/Background.vue'
import ScenesEnd from '@/components/racing/scenes/track/End.vue'
import RacingCar from '@/components/racing/Car.vue'
export default {
  name: 'BetGameRule',
  components: {
    ScenesBackground,
    ScenesEnd,
    RacingCar
  },
  methods: {
    ready () {
      var that = this
      that.$store.dispatch('storeBetGame/getGmeDraw', that.gmeId)
      // 擷取舞台的大小
      that.width = window.getComputedStyle(that.$refs.stage).width
      that.height = window.getComputedStyle(that.$refs.stage).height
      // 設定畫布
      const formData = {
        width: that.width,
        height: that.height
      }
      that.$store.dispatch('storeBetGameRacing/setCanvas', formData)
      console.log('北京賽車', that.width, that.height)
    },
    test (no) {
      const that = this
      if (that.status === false) {
        that.status = true
        that.start = true
        // 切字
        const noArr = no.split(',')
        console.log(noArr)
        noArr.forEach(function (item, index, array) {
          console.log(item, index, array)
          switch (item) {
            case '01':
              that.$store.commit('storeBetGameRacing/setCar1St', index + 1)
              break
            case '02':
              that.$store.commit('storeBetGameRacing/setCar2St', index + 1)
              break
            case '03':
              that.$store.commit('storeBetGameRacing/setCar3St', index + 1)
              break
            case '04':
              that.$store.commit('storeBetGameRacing/setCar4St', index + 1)
              break
            case '05':
              that.$store.commit('storeBetGameRacing/setCar5St', index + 1)
              break
            case '06':
              that.$store.commit('storeBetGameRacing/setCar6St', index + 1)
              break
            case '07':
              that.$store.commit('storeBetGameRacing/setCar7St', index + 1)
              break
            case '08':
              that.$store.commit('storeBetGameRacing/setCar8St', index + 1)
              break
            case '09':
              that.$store.commit('storeBetGameRacing/setCar9St', index + 1)
              break
            case '10':
              that.$store.commit('storeBetGameRacing/setCar10St', index + 1)
              break
          }
        })
      } else {
        that.status = false
        that.$store.dispatch('storeBetGameRacing/setReset')
      }
    }
  },
  computed: {
    gmeId: {
      get () {
        return this.$route.params.gmeId
      }
    },
    gameDraw: {
      get () {
        return this.$store.getters['storeBetGame/getDraw']
      },
      set (val) {
        this.$store.commit('storeBetGame/setDraw', val)
      }
    },
    // 開始
    start: {
      get () {
        return this.$store.getters['storeBetGameRacing/getSstart']
      },
      set (val) {
        this.$store.commit('storeBetGameRacing/setStart', val)
      }
    }
  },
  data () {
    return {
      list: [],
      status: false,
      statusb: true,
      width: 0,
      height: 0
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    console.log('bet/game/pages/Draw.vue > mounted ()')
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss">
.canvas-wrapper {
  position: relative;
  width: 800px;
  height: 400px;
  border: 1px solid black;
  margin:0px auto;
}
.canvas {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
