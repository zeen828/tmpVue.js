<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <md-menu md-size="small" v-for="(val, index) in list" :key="index">
      <md-button md-menu-trigger :to="val.path">{{$t(val.title)}}</md-button>
    </md-menu>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    list: {
      type: Array,
      default: function () {
        return [
          { title: 'menu.home', path: '/' },
          { title: 'menu.fintech', path: '/fintech/user/login' },
          { title: 'menu.bet', path: '/bet/user/login' },
          { title: 'bet.menu.gamelist', path: '/bet/game/list' },
          { title: 'test', path: '/bet/game' }
        ]
      }
    }
  }
}
</script>
