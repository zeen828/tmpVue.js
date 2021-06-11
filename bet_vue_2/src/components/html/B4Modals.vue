<template>
  <div id="system-model" class="component-html-modals modal fade" @click="modelClose">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">{{ modelTitle }}</h5>
          <button type="button" class="close" aria-label="Close" @click="modelClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ modelBody }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="modelClose">{{ $t('modal.close') }}</button>
          <button type="button" class="btn btn-primary" @click="modelClose">{{ $t('modal.determine') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
// Bootstrap 4 彈窗訊息
export default {
  name: 'Component-Html-B4Modals',
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
    modelStart () {
      // console.log('啟動Model')
      this.modelStatus = true
    },
    modelClose () {
      // console.log('關閉Model')
      this.modelStatus = false
    },
    // 檢查開關
    checkSwitch (val) {
      switch (val) {
        case true:
        case 'true':
          $('#system-model').modal('show')
          break
        default:
          $('#system-model').modal('hide')
          break
      }
    }
  },
  computed: {
    modelStatus: {
      get () {
        return this.$store.getters.getModalStatus
      },
      set (val) {
        this.$store.commit('setModalStatus', val)
      }
    },
    modelTitle: {
      get () {
        return this.$store.getters.getModalTitle
      },
      set (val) {
        this.$store.commit('setModalTitle', val)
      }
    },
    modelBody: {
      get () {
        return this.$store.getters.getModalBody
      },
      set (val) {
        this.$store.commit('setModalBody', val)
      }
    }
  },
  watch: {
    modelStatus (newVal, oldVal) {
      this.checkSwitch(newVal)
    }
  },
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
