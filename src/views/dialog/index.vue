<template>
  <div class="dialog">
    <dialog-form
      ref="dialogForm"
      :dialogForm="dialogForm"
      :dialogFormRules="dialogFormRules"
      @resetForm="resetForm"
      @createDialog="createDialog"
    ></dialog-form>
    <drag-dialog
      :dialogTitle="dialogTitle"
      :reminderVisible="reminderVisible"
      @closeReminder="closeReminder"
      @confirmReminder="confirmReminder"
    >
      <template v-slot:reminderTitle>{{reminder.reminderTitle}}</template>
      <template v-slot:reminderContent>{{reminder.reminderContent}}</template>
      <template v-slot:reminderFooter>{{reminder.reminderFooter}}</template>
    </drag-dialog>
  </div>
</template>

<script>
import DialogForm from './components/dialogForm.vue'
import DragDialog from '@/components/DragDialog/index.vue'

export default {
  data() {
    return {
      /* dialogForm的prop */
      dialogForm: {
        dialogTitle: null,
        reminderTitle: null,
        reminderContent: null,
        reminderFooter: null
      },
      dialogFormRules: {
        dialogTitle: [
          { required: true, message: '请填写弹窗标题', trigger: 'blur' }
        ],
        reminderContent: [
          { required: true, message: '请填写正文内容', trigger: 'blur' }
        ]
      },
      /* dragDialog的prop */
      dialogTitle: null,
      reminder: {
        reminderTitle: null,
        reminderContent: null,
        reminderFooter: null
      },
      reminderVisible: false
    }
  },
  components: {
    DragDialog,
    DialogForm
  },
  methods: {
    // 关闭弹窗
    closeReminder() {
      this.reminderVisible = false
    },
    // 弹窗的确认
    confirmReminder() {
      this.reminderVisible = false
    },
    // 重置表单
    resetForm() {
      this.dialogForm = {
        dialogTitle: null,
        reminderTitle: null,
        reminderContent: null,
        reminderFooter: null
      }
      this.$refs['dialogForm'].resetDailogForm()
    },
    // 生成弹窗
    createDialog(formData) {
      this.reminderVisible = true
      this.dialogTitle = formData.dialogTitle
      this.reminder = { ...formData }
    }
  }
}
</script>

<style>

</style>
