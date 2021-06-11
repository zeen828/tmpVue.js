<template>
  <div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="component-lottery-card card">
      <div class="card-header">
        <h5 class="card-title">{{ period }}期</h5>
      </div>
      <div class="row no-gutters">
        <div class="text-center col-md-3">
          <img class="rounded img-thumbnail" :src="item.imgSrc" alt="Card image cap">
        </div>
        <div class="col-md-9">
          <p class="card-text">開獎時間</p>
          <p class="card-text">{{ at }}</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="card-body">
          <p class="card-text text-center w-100">{{ draw }}</p>
        </div>
      </div>
      <div class="card-footer">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link" href="#">走勢</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">投注</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 彩票清單卡片
export default {
  name: 'Component-Lottery-Card',
  props: [
    'project',
    'period',
    'title',
    'at',
    'draw'
  ],
  methods: {
    ready () {
      if (this.data[this.project] !== undefined) {
        this.item = this.data[this.project]
      }
    }
  },
  data () {
    return {
      item: {
        i18n: '',
        imgSrc: ''
      },
      data: {
        car: {
          i18n: 'menu.lottery.car.name',
          imgSrc: require('@/assets/lottery/icon/icon_racing_car.png')
        },
        ferry: {
          i18n: 'menu.lottery.ferry.name',
          imgSrc: require('@/assets/lottery/icon/icon_racing_boat.png')
        },
        horse: {
          i18n: 'menu.lottery.horse.name',
          imgSrc: require('@/assets/lottery/icon/icon_racing_horse.png')
        }
      }
    }
  },
  beforeCreate () {},
  created () {
  },
  beforeMount () {},
  mounted () {
    this.ready()
  },
  beforeUpdate () {},
  updated () {
    // this.ready()
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>
