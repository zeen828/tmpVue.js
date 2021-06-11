<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">登入</router-link>
  </div>
  <div id="app">
    {{ message }}
  </div>
  <router-view/>
</template>

<script>
const { createApp, ref } = Vue;

const vm = createApp({
  setup () {
    const message = ref('Hello Vue 3.0!');
    return {
      message
    }
  }
});

// mount
vm.mount('#app');

// export default {
//   setup () {
//     // data
//     const count = value(0)
//     //const debug = false
//     // computed
//     const plusOne = computed(() => count.value + 1)
//     // method
//     const increment = () => { count.value++ }
//     // watch
//     watch(() => count.value * 2, v => console.log(v))
//     // lifecycle
//     onMounted(() => console.log('mounted!'))

//     // 暴露给模版或渲染函数
//     return { debug }
//   },
//   name: 'App',
//   mounted () {
//     console.log('APP.vue >> mounted()')
//   }
// }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
