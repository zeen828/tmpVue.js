<template>
    <canvas id="scenesTrackBackground" class="canvas" ref="canvas" :width="widthXp" :height="heightXp">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesTrackBackground',
  methods: {
    ready () {
      const that = this
      // 畫布宣告
      that.initCanvas()
      that.format()
    },
    // 畫布宣告
    initCanvas () {
      const that = this
      // 定位目標DOM
      that.canvas = document.getElementById('scenesTrackBackground')
      // 渲染
      if (that.canvas.getContext) {
        that.context = that.canvas.getContext('2d')
      } else {
        console.log('瀏覽器不支援畫布(canvas)')
        alert('瀏覽器不支援畫布(canvas)')
      }
    },
    // 初始化
    format () {
      const that = this
      that.spacing = that.height / 10
      that.x = 0
      that.y = 0
      clearInterval(that.myLoop)
    },
    // 播放動畫
    player () {
      const that = this
      // that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
      // 繪圖
      // that.drawing()
      if (that.width !== 0) {
        that.myLoop = setInterval(that.drawing, that.speed)
      }
    },
    // 繪圖
    drawing () {
      const that = this
      that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
      // 黑底
      that.context.fillStyle = 'rgb(0, 0, 0)'
      // 設定一個填滿顏色的矩形(原點出發X橫向位置,原點出發Y垂直位置,寬,高)
      that.context.fillRect(0, 0, that.width, that.height)
      // 白虛線(迴圈9條)
      const h = that.height / 10
      that.context.setLineDash([30, 5])
      for (let i = 1; i < 10; i++) {
        that.context.beginPath()
        // that.context.strokeStyle = 'rgb(255, 255, 255)'
        that.context.strokeStyle = '#c0c0c0'
        that.context.lineWidth = 2
        that.context.moveTo(-50 + that.x, h * i)
        that.context.lineTo(that.width + that.x + 100, h * i)
        that.context.stroke()
      }
      // 移動視覺
      if (that.x === 5) {
        that.x = 15
      } else if (that.x === 15) {
        that.x = 25
      } else {
        that.x = 5
      }
      that.distance -= that.x
    }
  },
  computed: {
    start: {
      get () {
        return this.$store.getters['storeBetGameRacing/getSstart']
      }
    },
    stop: {
      get () {
        return this.$store.getters['storeBetGameRacing/getStop']
      },
      set (val) {
        this.$store.commit('storeBetGameRacing/setStop', val)
      }
    },
    widthXp: {
      get () {
        return this.$store.getters['storeBetGameRacing/getWidthPx']
      }
    },
    heightXp: {
      get () {
        return this.$store.getters['storeBetGameRacing/getHeightPx']
      }
    },
    width: {
      get () {
        return this.$store.getters['storeBetGameRacing/getWidth']
      }
    },
    height: {
      get () {
        return this.$store.getters['storeBetGameRacing/getHeight']
      }
    },
    speed: {
      get () {
        return this.$store.getters['storeBetGameRacing/getSpeed']
      }
    },
    distance: {
      get () {
        return this.$store.getters['storeBetGameRacing/getDistance']
      },
      set (val) {
        this.$store.commit('storeBetGameRacing/setDistance', val)
      }
    }
  },
  watch: {
    start (newVal, oldVal) {
      if (newVal === true) {
        this.player()
      } else {
        console.log('')
        this.format()
      }
    },
    stop (newVal, oldVal) {
      if (newVal === true) {
        clearInterval(this.myLoop)
      }
    },
    distance (newVal, oldVal) {
      if (newVal <= 0) {
        this.stop = true
      }
    }
  },
  data () {
    return {
      // 畫布
      canvas: this.$refs.canvas,
      context: null,
      // 畫筆位置
      x: 0,
      y: 0,
      // 間距
      spacing: 0,
      // 迴圈
      myLoop: null,
      config: {}
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {
    // this.ready()
  },
  beforeUpdate () {},
  updated () {
    this.ready()
  },
  beforeDestroy () {
    clearInterval(this.myLoop)
  },
  destroyed () {}
}
</script>
