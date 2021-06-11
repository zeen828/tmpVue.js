<template>
  <div class="user">
    <h2>{{ $t('page.index', {name: "Bet User"}) }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'BetUser'
}
</script>
