export default {
  namespaced: true,
  // 用來資料共享資料儲存
  state: {
    // 開始
    start: false,
    // 停止
    stop: false,
    // 汽車
    car: {
      car1: { st: 1, images: require('@/assets/images/car/car1.png') },
      car2: { st: 2, images: require('@/assets/images/car/car2.png') },
      car3: { st: 3, images: require('@/assets/images/car/car3.png') },
      car4: { st: 4, images: require('@/assets/images/car/car4.png') },
      car5: { st: 5, images: require('@/assets/images/car/car5.png') },
      car6: { st: 6, images: require('@/assets/images/car/car6.png') },
      car7: { st: 7, images: require('@/assets/images/car/car7.png') },
      car8: { st: 8, images: require('@/assets/images/car/car8.png') },
      car9: { st: 9, images: require('@/assets/images/car/car9.png') },
      car10: { st: 10, images: require('@/assets/images/car/car10.png') }
    },
    // 寬(像數)
    widthPx: '0px',
    // 高(像數)
    heightPx: '0px',
    // 寬
    width: 0,
    // 高
    height: 0,
    // 速度
    speed: 40,
    // 距離
    distance: 10000,
    debug: false
  },
  // 用來註冊改變資料狀態
  mutations: {
    setStart (state, val) {
      state.start = val
    },
    setStop (state, val) {
      state.stop = val
    },
    setCar (state, val) {
      state.car = val
    },
    setCar1St (state, val) {
      state.car.car1.st = val
    },
    setCar2St (state, val) {
      state.car.car2.st = val
    },
    setCar3St (state, val) {
      state.car.car3.st = val
    },
    setCar4St (state, val) {
      state.car.car4.st = val
    },
    setCar5St (state, val) {
      state.car.car5.st = val
    },
    setCar6St (state, val) {
      state.car.car6.st = val
    },
    setCar7St (state, val) {
      state.car.car7.st = val
    },
    setCar8St (state, val) {
      state.car.car8.st = val
    },
    setCar9St (state, val) {
      state.car.car9.st = val
    },
    setCar10St (state, val) {
      state.car.car10.st = val
    },
    setWidthPx (state, val) {
      state.widthPx = val
    },
    setHeightPx (state, val) {
      state.heightPx = val
    },
    setWidth (state, val) {
      state.width = val
    },
    setHeight (state, val) {
      state.height = val
    },
    setSpeed (state, val) {
      state.speed = val
    },
    setDistance (state, val) {
      state.distance = val
    },
    setDebug (state, val) {
      state.debug = val
    }
  },
  // 用來對共享資料進行過濾操作
  getters: {
    getSstart (state, val) {
      return state.start
    },
    getStop (state) {
      return state.stop
    },
    getCar (state) {
      return state.car
    },
    getWidthPx (state) {
      return state.widthPx
    },
    getHeightPx (state) {
      return state.heightPx
    },
    getWidth (state) {
      return state.width
    },
    getHeight (state) {
      return state.height
    },
    getSpeed (state) {
      return state.speed
    },
    getDistance (state) {
      return state.distance
    },
    getDebug (state) {
      return state.debug
    }
  },
  // 解決非同步改變共享資料
  actions: {
    ready (context) {
      console.log('Vues-store使用: model(storeBetGameBet).action.ready()')
    },
    // 重置
    setReset (context) {
      context.commit('setStart', false)
      context.commit('setStop', false)
      context.commit('setSpeed', 40)
      context.commit('setDistance', 10000)
    },
    // 設定畫布
    setCanvas (context, { width, height }) {
      // 紀錄畫布寬高
      context.commit('setWidthPx', width)
      context.commit('setHeightPx', height)
      // 寬高轉換成數值，xp去掉改型態
      context.commit('setWidth', parseInt(width.replace('xp', '')))
      context.commit('setHeight', parseInt(height.replace('xp', '')))
    }
  }
}
