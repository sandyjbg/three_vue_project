<template>
    <div>
     <el-row v-if ="flag">
         <el-col :span="24"><div class="grid-content bg-purple-dark"><h1 class="abc">关大维是一个醋精</h1> </div></el-col>
     </el-row>
        <!-- h1 -->

     <div class="block" v-if="flag">
         <span class="demonstration">这是什么鬼</span>
         <el-carousel height="150px">
         <el-carousel-item v-for="e in rrr" :key="e" :src="e">
         <h3 class="small" >{{ uuu }}</h3>
         </el-carousel-item>
         </el-carousel>
     </div>
        <!-- 走马灯 -->

        <el-radio v-model="radio" label="1" v-for="e in sss" :key="e" :src="e" v-if="wtf">{{ uuu }}</el-radio>
        <el-radio v-model="radio" label="2" v-for="e in sss" :key="e" :src="e" v-if="wtf">{{ qqq }}</el-radio>
        <!-- 单选 -->

        <el-input-number v-if="flag" v-model="num" @change="handleChange" :min="1" :max="100" label="描述文字" ></el-input-number>
        <!-- 计数器 -->

        <el-checkbox-group v-model="checkList" v-for="g in sss" :key="m" >
        <el-checkbox label="复选框 A">{{ uuu }}</el-checkbox>
        <el-checkbox label="复选框 B">{{ www }}</el-checkbox>
        <el-checkbox label="复选框 C">{{ qqq }}</el-checkbox>
        </el-checkbox-group>
        <!-- 复选 -->

        <el-input v-model="input" placeholder="请输入内容" v-for="e in rrr" :key="e" :src="e"></el-input>
        <!-- 输入框 -->

        <el-switch v-model="value" active-color="#13ce66" inactive-color="#AEECF9" v-for="e in rrr" :key="e" :src="e"></el-switch>
        <!-- 开关 -->

        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
         <el-table-column prop="date" label="日期" width="180"></el-table-column>
         <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
        <!-- 表格 -->
  
      </div> 

</template>

<script>
 export default {
  
    data() {
      return {
        rrr: [
          1,2,3,4,5,6,7
        ],
        sss:[
          2,2,2,2,2,2
        ],
        radio: '1',
        num: 1,
        uuu:'打赏',
        www:'你一根',
        qqq:'鸡巴',
        flag : true,
        wtf: false,
        value: true,
        checkList: ['选中且禁用','复选框 A'],
        input: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
   
}
  
</script>

<style>
  .bg-purple-dark {
    background-color: #99a9bf;
    height: 60px;
  }
  .abc{
    color:#FFFFFF;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>