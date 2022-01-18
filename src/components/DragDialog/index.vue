<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="reminderVisible"
    width="550px"
    top="30vh"
    :close-on-click-modal="false"
    :before-close="handleCloseReminder"
    v-drag
  >
    <section style="padding: 0 20px">
      <p class="reminderTitle">{{ reminderTitle }}</p>
      <p
        class="reminderContent"
        v-for="(item, index) in reminderContent"
        :key="index"
      >
        {{ item }}
      </p>
      <p class="reminderFooter">{{ reminderFooter }}</p>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button
        plain
        type="primary"
        size="small"
        @click="confirmReminder"
        >确 认</el-button
      >
      <el-button
        plain
        size="small"
        @click="cancelReminder"
        >取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    reminderVisible: {
      type: Boolean,
      default: false
    },
    reminderTitle: {
      type: String,
      default: ''
    },
    reminderFooter: {
      type: String,
      default: ''
    },
    reminderContent: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    // 确认
    confirmReminder() {
      this.$emit('confirmReminder')
    },
    cancelReminder() {
      this.$emit('closeReminder')
    },
    handleCloseReminder() {
      this.$emit('closeReminder')
    }
  }
}
</script>

<style scoped>
.reminderTitle {
  padding-bottom: 16px;
}
.reminderFooter {
  padding-top: 16px;
}
</style>
