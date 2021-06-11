<template>
  <canvas :id="'canvasRacingCar' + no" class="canvasRacingCar canvas" ref="canvas" :width="widthXp" :height="heightXp">汽車</canvas>
</template>

<script>
// 宣告引入
// import imgCar1 from '@/assets/images/car/car1.png'
export default {
  name: 'canvasRacingCar',
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
      that.canvas = document.getElementById('canvasRacingCar' + that.no)
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
      that.x = that.width
      that.y = (that.spacing * that.no) - (that.spacing / 10) - that.spacing
      that.competeStatus = false
      that.competeCount = 30
      that.competeTypr = 10
      that.endStatus = false
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
    drawing () {
      const that = this
      that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
      const img = new Image()
      // img.src = require('@/assets/images/car/car' + that.no + '.png')
      // 統一資料由vuex管理
      switch (that.no) {
        case 1:
          img.src = that.car.car1.images
          that.st = that.car.car1.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 2:
          img.src = that.car.car2.images
          that.st = that.car.car2.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 3:
          img.src = that.car.car3.images
          that.st = that.car.car3.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 4:
          img.src = that.car.car4.images
          that.st = that.car.car4.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 5:
          img.src = that.car.car5.images
          that.st = that.car.car5.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 6:
          img.src = that.car.car6.images
          that.st = that.car.car6.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 7:
          img.src = that.car.car7.images
          that.st = that.car.car7.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 8:
          img.src = that.car.car8.images
          that.st = that.car.car8.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 9:
          img.src = that.car.car9.images
          that.st = that.car.car9.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
        case 10:
          img.src = that.car.car10.images
          that.st = that.car.car10.st
          that.context.drawImage(img, that.x, that.y, 80, 30)
          break
      }
      that.context.drawImage(img, that.x, that.y, that.height / 10 * 3, (that.height / 10) - (that.height / 10 / 10))
      // 移動
      const wt = that.width / 4
      // const wtt = [(wt * 3) - wt] / 3
      if (that.competeStatus === false) {
        // 先跑到總距離(vuex內的distance)一半
        if (that.x >= wt * 2) {
          // 移動
          that.x -= 10
        } else {
          // 過半開始較勁
          that.competeStatus = true
        }
      }
      // 較勁
      if (that.competeStatus === true && that.endStatus === false) {
        // 較勁邏輯
        if (that.competeCount === 30 || that.competeTypr === 10) {
          that.competeTypr = Math.floor(Math.random() * 5)
        }
        // (0不變,1前進到一半,2前進到底,3後退一半,4後退到底,10未賦予動作)
        switch (that.competeTypr) {
          case 1:
            if (that.x >= wt * 1.5) {
              that.x -= 10
            }
            break
          case 2:
            if (that.x >= wt) {
              that.x -= 10
            }
            break
          case 3:
            if (that.x <= wt * 2.5) {
              that.x += 5
            }
            break
          case 4:
            if (that.x <= wt * 3) {
              that.x += 5
            }
            break
        }
        that.competeCount--
        if (that.competeCount === 0) {
          that.competeCount = 30
        }
      }
      // 衝終點
      if (that.endStatus === true) {
        // 倒退到他的排名位置
        const xxx = wt * [0.5 + (0.2 * that.st)]
        if (that.x >= xxx) {
          that.x -= 10
        }
        if (that.x <= xxx) {
          that.x += 10
        }
        console.log('車子', that.no, that.x, that.y, '目標', xxx)
      }
      if (that.x <= 20) {
        // 停止迴圈
        clearInterval(that.myLoop)
        that.stop = true
      }
    }
  },
  props: [
    // 車號
    'no'
  ],
  computed: {
    // 開始
    start: {
      get () {
        return this.$store.getters['storeBetGameRacing/getSstart']
      },
      set (val) {
        this.$store.commit('storeBetGameRacing/setStart', val)
      }
    },
    // 停止
    stop: {
      get () {
        return this.$store.getters['storeBetGameRacing/getStop']
      },
      set (val) {
        this.$store.commit('storeBetGameRacing/setStop', val)
      }
    },
    car: {
      get () {
        return this.$store.getters['storeBetGameRacing/getCar']
      }
    },
    // 寬度(像數)
    widthXp: {
      get () {
        return this.$store.getters['storeBetGameRacing/getWidthPx']
      }
    },
    // 高度(像數)
    heightXp: {
      get () {
        return this.$store.getters['storeBetGameRacing/getHeightPx']
      }
    },
    // 寬度
    width: {
      get () {
        return this.$store.getters['storeBetGameRacing/getWidth']
      }
    },
    // 高度
    height: {
      get () {
        return this.$store.getters['storeBetGameRacing/getHeight']
      }
    },
    // 速度
    speed: {
      get () {
        return this.$store.getters['storeBetGameRacing/getSpeed']
      }
    },
    // 距離
    distance: {
      get () {
        return this.$store.getters['storeBetGameRacing/getDistance']
      }
    }
  },
  watch: {
    // 監聽開始
    start (newVal, oldVal) {
      if (newVal === true) {
        this.player()
      } else {
        console.log('')
        this.format()
      }
    },
    // 監聽停止狀態停止所有動畫
    stop (newVal, oldVal) {
      if (newVal === true) {
        clearInterval(this.myLoop)
      }
    },
    // 監聽距離準備衝終點
    distance (newVal, oldVal) {
      if (newVal <= 1200) {
        this.endStatus = true
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
      // 名次
      st: 0,
      // 較勁狀態
      competeStatus: false,
      // 較勁倒數
      competeCount: 30,
      // 較勁動作(0不變,1前進到一半,2前進到底,3後退一半,4後退到底,10未賦予動作)
      competeTypr: 10,
      // 衝終點
      endStatus: false,
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
