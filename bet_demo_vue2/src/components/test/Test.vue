<template>
  <div class="test">
    <h1>我是測試</h1>
    <slot name='header'></slot>
    <slot name='content'></slot>
    <slot></slot>
    <slot name='footer'></slot>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>
