<template>
  <div class="dialog">
    <md-dialog-alert :md-active.sync="dialog" :md-title="title" :md-content="msg" />
  </div>
</template>

<script>
// 彈出提示
// 使用vuex的狀態管理(src\store\index.js)
export default {
  name: 'Dialog',
  computed: {
    dialog: {
      get () {
        return this.$store.getters.getToolDialog
      },
      set (val) {
        this.$store.commit('setToolDialog', val)
      }
    },
    title () {
      return this.$store.getters.getToolDialogTitle
    },
    msg () {
      return this.$store.getters.getToolDialogMsg
    }
  }
}
</script>
