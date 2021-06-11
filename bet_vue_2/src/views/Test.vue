<template>
  <div class="test">
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-primary" @click="modalOpen">{{ $t('test.button.modal.open') }}</button>
        <button type="button" class="btn btn-outline-primary" @click="modalClose">{{ $t('test.button.modal.close') }}</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-secondary" @click="toastOpen">{{ $t('test.button.toast.open') }}</button>
        <button type="button" class="btn btn-outline-secondary" @click="toastClose">{{ $t('test.button.toast.close') }}</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-success" @click="apiOpen">API增加</button>
        <button type="button" class="btn btn-outline-danger" @click="apiClose">API減少</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-light">Info</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-info" @click="userRead">讀取會員資料</button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-outline-dark" @click="logout">{{ $t('user.logout') }}</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {{ $t('test.menu.global') }} #1
                </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                  website：{{ website }}<br/>
                  modalStatus：{{ modalStatus }}<br/>
                  modalTitle：{{ modalTitle }}<br/>
                  modalBody：{{ modalBody }}<br/>
                  toastStatus：{{ toastStatus }}<br/>
                  toastTitle：{{ toastTitle }}<br/>
                  toastBody：{{ toastBody }}<br/>
                  api：{{ api }}<br/>
                  lang：{{ lang }}<br/>
                  debug：{{ debug }}<br/>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {{ $t('test.menu.fintech') }} #2
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                fintechSignature：{{ fintechSignature }}<br/>
                fintechAccessToken：{{ fintechAccessToken }}<br/>
                fintechLogin：{{ fintechLogin }}<br/>
                fintechDebug：{{ fintechDebug }}<br/>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {{ $t('test.menu.bet') }} #3
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                betSignature：{{ betSignature }}<br/>
                betAccessToken：{{ betAccessToken }}<br/>
                betLogin：{{ betLogin }}<br/>
                betDebug：{{ betDebug }}<br/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">

      </div>
    </div>
  </div>
</template>

<script>
// Bootstrap 4 多國語系
export default {
  name: 'Test',
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
    modalOpen () {
      this.$store.commit('setModalStatus', true)
    },
    modalClose () {
      this.$store.commit('setModalStatus', false)
    },
    toastOpen () {
      this.$store.commit('setToastStatus', true)
    },
    toastClose () {
      this.$store.commit('setToastStatus', false)
    },
    apiOpen () {
      this.$store.commit('apiCall')
    },
    apiClose () {
      this.$store.commit('apiOver')
    },
    userRead () {
      this.$store.dispatch('bet/getUserRead')
    },
    logout () {
      // console.log('logout')
      window.localStorage.removeItem('fintechAccessToken')
      window.localStorage.removeItem('fintechUserLogin')
      window.localStorage.removeItem('fintechUserSignature')
      window.localStorage.removeItem('betAccessToken')
      window.localStorage.removeItem('betUserLogin')
      // 平台
      this.$store.commit('fintech/setAccessToken', '')
      this.$store.commit('fintech/setLogin', '')
      this.$store.commit('fintech/setSignature', false)
      // 彩卷
      this.$store.commit('bet/setAccessToken', '')
      this.$store.commit('bet/setLogin', '')
      this.$store.commit('bet/setSignature', false)
    }
  },
  computed: {
    website: {
      get () {
        return this.$store.getters.getWebsite
      }
    },
    modalStatus: {
      get () {
        return this.$store.getters.getModalStatus
      }
    },
    modalTitle: {
      get () {
        return this.$store.getters.getModalTitle
      }
    },
    modalBody: {
      get () {
        return this.$store.getters.getModalBody
      }
    },
    toastStatus: {
      get () {
        return this.$store.getters.getToastStatus
      }
    },
    toastTitle: {
      get () {
        return this.$store.getters.getToastTitle
      }
    },
    toastBody: {
      get () {
        return this.$store.getters.getToastBody
      }
    },
    api: {
      get () {
        return this.$store.getters.getLoading
      }
    },
    lang: {
      get () {
        return this.$store.getters.getLang
      }
    },
    debug: {
      get () {
        return this.$store.getters.getDebug
      }
    },
    // 平台
    fintechSignature: {
      get () {
        return this.$store.getters['fintech/getSignature']
      }
    },
    fintechAccessToken: {
      get () {
        return this.$store.getters['fintech/getAccessToken']
      }
    },
    fintechLogin: {
      get () {
        return this.$store.getters['fintech/getLogin']
      }
    },
    fintechDebug: {
      get () {
        return this.$store.getters['fintech/getDebug']
      }
    },
    // 彩卷
    betSignature: {
      get () {
        return this.$store.getters['bet/getSignature']
      }
    },
    betAccessToken: {
      get () {
        return this.$store.getters['bet/getAccessToken']
      }
    },
    betLogin: {
      get () {
        return this.$store.getters['bet/getLogin']
      }
    },
    betDebug: {
      get () {
        return this.$store.getters['bet/getDebug']
      }
    }
  },
  watch: {},
  data () {
    return {}
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
