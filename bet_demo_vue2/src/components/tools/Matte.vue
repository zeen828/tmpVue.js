<template>
  <div class="matte" v-show="loading">
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
// 遮片(鎖定用)
// 使用vuex的狀態管理(src\store\index.js)
export default {
  name: 'Matte',
  computed: {
    loading () {
      return this.$store.getters.getToolMatte
    }
  }
}
</script>

<style lang="scss">
.matte {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 999;
}
</style>
