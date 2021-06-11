<template>
  <div class="fintech">
    <h2>{{ $t('page.index', {name: "Fintech"}) }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Fintech'
}
</script>
