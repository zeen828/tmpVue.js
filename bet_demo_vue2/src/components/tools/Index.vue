<template>
  <div class="tools">
    <ToolsMatte/>
    <ToolsDialog/>
  </div>
</template>

<script>
import ToolsMatte from '@/components/tools/Matte.vue'
import ToolsDialog from '@/components/tools/Dialog.vue'
export default {
  name: 'Tools',
  components: {
    ToolsMatte,
    ToolsDialog
  }
}
</script>
