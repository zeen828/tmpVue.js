<template>
    <canvas id="scenesTrackEnd" class="canvas" ref="canvas" :width="widthXp" :height="heightXp">蘋果</canvas>
</template>

<script>
export default {
  name: 'scenesTrackEnd',
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
      that.canvas = document.getElementById('scenesTrackEnd')
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
      that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
      // 繪圖
      // that.drawing()
      if (that.width !== 0) {
        that.myLoop = setInterval(that.drawing, that.speed)
      }
    },
    // 繪圖
    drawing () {
      const that = this
      // 距離剩畫面一半才出現
      if (that.distance >= (that.width / 2)) {
        return
      }
      that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
      // 終點線
      let endX = that.x// 終點繪圖起點X座標
      let endY = 0// 終點繪圖起點Y座標
      const endCount = 20// 間距要執行次數
      const endS = that.height / endCount// 相差間距
      that.context.fillStyle = '#c0c0c0'
      // 畫格子
      that.context.beginPath()
      that.context.moveTo(endX, 0)
      for (let j = 1; j <= endCount; j++) {
        endY = j * endS
        that.context.lineTo(endX, endY)
        if (endX === that.x) {
          endX += endS * 2
        } else {
          endX -= endS * 2
        }
        that.context.lineTo(endX, endY)
      }
      if (endX === that.x) {
        that.context.lineTo(endX + endS, endY)
      } else {
        that.context.lineTo(endX - endS, endY)
      }
      that.context.lineTo(endX + endS, 0)
      that.context.lineTo(endX, 0)
      that.context.closePath()
      that.context.fill()
      // that.context.stroke()

      that.x += 10
      if (that.x >= (that.width / 2)) {
        that.x = (that.width / 2)
      }
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
