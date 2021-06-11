<template>
  <div class="game">
    <h2>{{ $t('page.index', {name: "Bet Game"}) }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BetGame'
}
</script>
