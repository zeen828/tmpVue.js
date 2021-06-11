<template>
  <header class="component-html-header">
    <CarouselHome/>
    <ComponentLogin/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">{{ $t('menu.home.name') }}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'BulletinLists' }">{{ $t('menu.bulletin.name') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Hall' }">{{ $t('menu.hall.name') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'FundsLists' }">{{ $t('menu.funds.name') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Test' }">{{ $t('test.title') }}</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" :placeholder="$t('menu.search.name')" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ $t('menu.search.name') }}</button>
        </form>
        <ComponentLang/>
      </div>
    </nav>
  </header>
</template>

<script>
// Bootstrap 4 表頭
import CarouselHome from '@/components/carousel/Home.vue'
import ComponentLogin from '@/components/html/B4Login.vue'
import ComponentLang from '@/components/html/B4Lang.vue'
export default {
  name: 'Component-Html-Header',
  components: {
    CarouselHome,
    ComponentLogin,
    ComponentLang
  },
  mixins: {},
  props: {},
  inheritAttrs: {},
  directives: {},
  filters: {},
  methods: {
    ready () {
      // console.log('ready')
    }
  },
  computed: {
    website: {
      get () {
        return this.$store.getters.getWebsite
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
