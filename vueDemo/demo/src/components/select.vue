<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '海都w老'
        }, {
          value: '选项2',
          label: '烤鸭'
        }, {
          value: '选项3',
          label: '烤肉'
        }, {
          value: '选项4',
          label: '屎'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>

<style>

</style>