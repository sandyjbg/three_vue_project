<template>
  <el-radio-group v-model="radio">
    <el-radio
      v-for="(item,index) in options"
      :key="item.value"
      :label="index"
      @change="radioChange"
    >
    {{item.label}}
    </el-radio>

    <el-input v-model="label" placeholder="请输入内容"></el-input> <el-button @click="search">查询</el-button>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "3",
          label: "黄金糕",
        },
        {
          value: "5",
          label: "双皮奶",
        },
        {
          value: "6",
          label: "蚵仔煎",
        },
        {
          value: "7",
          label: "龙须面",
        },
        {
          value: "8",
          label: "北京烤鸭",
        },
      ],
      radio:'',
      label:''
    };
  },
  methods:
  {
      search()
      {
          console.log(this.options[this.radio].value);
      },
      radioChange()
      {
          this.label=this.options[this.radio].label
      }
  }
};
</script>

<style>
</style>