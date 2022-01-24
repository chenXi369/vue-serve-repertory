<template>
  <el-form
    :model="dialogForm"
    :rules="dialogFormRules"
    ref="innerDialogForm"
    size="small"
    label-width="100px"
  >
    <el-form-item label="dialog 标题" prop="dialogTitle">
      <el-input v-model="dialogForm.dialogTitle"></el-input>
    </el-form-item>
    <el-form-item label="正文头部" prop="reminderTitle">
      <el-input v-model="dialogForm.reminderTitle"></el-input>
    </el-form-item>
    <el-form-item label="正文内容" prop="reminderContent">
      <el-input v-model="dialogForm.reminderContent"></el-input>
    </el-form-item>
    <el-form-item label="正文尾部" prop="reminderFooter">
      <el-input v-model="dialogForm.reminderFooter"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm()">重置</el-button>
      <el-button type="primary" @click="submitForm('innerDialogForm')"
        >立即创建</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    dialogForm: {
      type: Object,
      default: () => {}
    },
    dialogFormRules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    resetForm() {
      this.$emit('resetForm')
    },
    // 清空校验
    resetDailogForm() {
      this.$refs['innerDialogForm'].clearValidate()
    },
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$emit('createDialog', this.dialogForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
</style>
