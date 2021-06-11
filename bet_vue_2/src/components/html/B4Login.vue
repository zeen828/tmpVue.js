<template>
  <div class="component-html-login container-fluid fixed-top">
    <div class="d-flex flex-row-reverse">
      <div v-if="!login" class="p-2 bg-danger">
        <form class="form-inline mb-0">
          <div class="form-group mx-sm-3 mb-0">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="text" class="form-control" v-model="account" />
          </div>
          <div class="form-group mx-sm-3 mb-0">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button type="button" class="btn btn-primary mb-2" @click="submit">登入</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// Bootstrap 4 登入
export default {
  name: 'Component-Html-B4Login',
  components: {},
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
    },
    submit () {
      // console.log('submit')
      const formData = {
        account: this.account,
        password: this.password
      }
      // 平台帳號&密碼登入會員
      this.$store.dispatch('fintech/loginUser', formData)
    }
  },
  computed: {
    login: {
      get () {
        return this.$store.getters['fintech/getLogin']
      },
      set (val) {
        this.$store.commit('fintech/setLogin', val)
      }
    }
  },
  watch: {},
  data () {
    return {
      account: 'will@taki.tw',
      password: '12345678'
    }
  },
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    this.ready()
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="scss">
.component-html-login div div {
  border-bottom-left-radius: 20px;
}
</style>
