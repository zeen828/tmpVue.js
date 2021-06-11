<template>
  <div class="component-html-lang">
    <label v-for="(item, index) in optionsLang" v-bind:key="index">
      <input type="radio" v-model="$store.state.lang" :value="item.value" v-on:change="setLang(item.value)"> {{ item.text }}
    </label>
    <h1>{{ $t('title') }}</h1>
    <h2>{{ $t('description') }}</h2>
  </div>
</template>

<script>
// 多國語系
export default {
  name: 'Component-Html-Lang',
  data () {
    return {
      optionsLang: [
        { text: '中文', value: 'zh' },
        { text: 'English', value: 'en' }
      ]
    }
  },
  methods: {
    setLang (value) {
      this.$store.commit('setLang', value)
      this.$i18n.locale = value
      localStorage.setItem('website-lang', value)
    }
  }
}
</script>
