<template>
  <div class="home">
    <drag-area></drag-area>
    <drag-dialog></drag-dialog>
  </div>
</template>

<script>
import DragArea from '@/components/DragArea/index.vue'
import DragDialog from '@/components/DragDialog/index.vue'
export default {
  data() {
    return {}
  },
  components: {
    DragArea,
    DragDialog
  }
}
</script>

<style lang="scss" scoped>

</style>
