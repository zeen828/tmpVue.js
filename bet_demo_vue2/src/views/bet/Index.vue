<template>
  <div class="bet">
    <h2>{{ $t('page.index', {name: "Bet"}) }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Bet'
}
</script>
