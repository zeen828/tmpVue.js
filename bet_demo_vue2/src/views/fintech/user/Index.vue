<template>
  <div class="user">
    <h2>{{ $t('page.index', {name: "Fintech User"}) }}</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'FintechUser'
}
</script>
