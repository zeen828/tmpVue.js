<template>
  <div class="lang">
    <label v-for="(item, index) in optionsLang" v-bind:key="index">
      <input type="radio" v-model="$store.state.lang" :value="item.value" v-on:change="setLang(item.value)"> {{ item.text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Lang',
  methods: {
    setLang (value) {
      this.$store.commit('setLang', value)
      this.$i18n.locale = value
      localStorage.setItem('footmark-lang', value)
    }
  },
  data () {
    return {
      optionsLang: [
        { text: '中文', value: 'zh' },
        { text: 'English', value: 'en' }
      ]
    }
  }
}
</script>
