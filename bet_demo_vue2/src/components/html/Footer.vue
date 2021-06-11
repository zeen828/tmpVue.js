<template>
  <footer class="footer">
    <h1>{{ msg }}</h1>
    <HtmlLang/>
  </footer>
</template>

<script>
import HtmlLang from '@/components/html/Lang.vue'

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  components: {
    HtmlLang
  }
}
</script>
