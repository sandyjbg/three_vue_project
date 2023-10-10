<template>
    <div>
      <el-select clearable  v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-button type="success" @click="search">查询</el-button>
  <el-button type="info" @click="chong">重置</el-button>
    </div>
</template>

<script>
export default {
      data() {
      return {
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    created()
    {
        this.value='1'
    },
    methods:
    {
      search()
      {
          console.log(this.value);
          if(this.value=='')
          {
            this.value=0;
          }
      },
      chong()
      {
        let arr = this.options
        //输出value数组
        let arr2 = arr.map((item) => {
          return item.value
        })
        
        this.value="";
      }
    }
    
}
</script>

<style>

</style>