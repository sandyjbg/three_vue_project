<template>
<div>
    <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark">
    <h1>这是一个测试页面</h1>
    </div>
    </el-col>

    <el-row>
    <el-col :span="8">
    <div class="grid-content bg-purple">
        <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
            </el-input>

            <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree">
        </el-tree>
    </div>
</el-col>

  <el-col :span="16">
    <div class="grid-content bg-purple-light">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
            <el-table-column
            prop="sex"
            label="性别">
            </el-table-column>
        </el-table>
    </div>
</el-col>
</el-row>
</el-row>

<el-row>
  <el-col :span="24">
      <div class="grid-content asdf">
        <el-button type="primary" @click="tiao()" >跳转</el-button>
      </div>
  </el-col>
</el-row>
</div>


</template>

<script>
export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      tiao()
      {
        this.$router.push({path:'/input'})
      }
    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          sex:'变性人'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

<style>
 .bg-purple-dark{
    height: 60px;
    background-color: #fff;
 }
.bg-purple{
    height: 60px;
    /* 紫色 */
    background-color: #f0f;
}
.bg-purple-light{
    height: 60px;
    /* 黄色 */
    background-color: #ff0;
}
</style>