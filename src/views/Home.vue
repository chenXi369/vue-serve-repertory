<template>
  <div class="home">
    <drag-area></drag-area>
    <drag-dialog
      :dialogTitle="dialogTitle"
      :reminderTitle="reminderTitle"
      :reminderContent="reminderContent"
      :reminderFooter="reminderFooter"
      :reminderVisible="reminderVisible"
      @closeReminder="closeReminder"
      @confirmReminder="confirmReminder"
    ></drag-dialog>
  </div>
</template>

<script>
import DragArea from '@/components/DragArea/index.vue'
import DragDialog from '@/components/DragDialog/index.vue'
export default {
  data() {
    return {
      dialogTitle: '弹窗 dialog',
      reminderTitle: '标题',
      reminderContent: ['这是一段内容'],
      reminderFooter: '是否要做点什么？',
      reminderVisible: true
    }
  },
  components: {
    DragArea,
    DragDialog
  },
  methods: {
    closeReminder() {
      this.reminderVisible = false
    },
    confirmReminder() {
      this.reminderVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
