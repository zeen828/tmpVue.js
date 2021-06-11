<template>
  <div class="info">
    <h2>{{ $t('page.index', {name: "Bet Game Info"}) }}</h2>
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-rule" md-label="規則" :to="{name: 'BetGameRule',params: {gmeId: gmeId}}"></md-tab>
      <md-tab id="tab-draw" md-label="開獎" :to="{name: 'BetGameDraw',params: {gmeId: gmeId}}"></md-tab>
      <md-tab id="tab-bet" md-label="下注" :to="{name: 'BetGameBet',params: {gmeId: gmeId}}"></md-tab>
      <md-tab id="tab-record" md-label="紀錄" :to="{name: 'BetGameRecord',params: {gmeId: gmeId}}"></md-tab>
      <md-tab id="tab-test" md-label="Test"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
  computed: {
    gmeId: {
      get () {
        return this.$route.params.gmeId
      }
    }
  }
}
</script>
