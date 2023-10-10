<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="value" @focus="open()"></el-input>

        <el-button @click="getByids">获取人员id</el-button>
      </el-col>
      <el-col :span="12">
        <el-select v-model="userIds" multiple placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.userId"
            :label="item.userName"
            :value="item.userId"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-dialog title="组织部门" :visible.sync="DialogVisible" center>
      <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        ref="tree"
        :default-expanded-keys="[1]"
        :props="defaultProps"
      >
      </el-tree>
        <div style="text-align:center">
           <el-button @click="getCheckedKeys">提交</el-button>
           <el-button @click="DialogVisible=false">取消</el-button>
        </div>
    </el-dialog>

    <!-- <a href="http://test-jnjgapi.lanlin.site/img/2021-06-03/a7d4509cc82a4fc9bee2ff6641e643dc.txt" download="asda.txt">点击下载</a> -->
    <span v-down="Url">(附件)</span>

    <el-button @click="getCeshi">测试啊</el-button>
  </div>
</template>

<script>
import demoApi from "@/api/demo/demo";
export default {
  data() {
    return {
      Url:"http://test-jnjgapi.lanlin.site/img/2021-06-03/a7d4509cc82a4fc9bee2ff6641e643dc.txt",
      data: [],
      options: [],
      userIds: "",
      DialogVisible: false,
      value:'',
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  created() {},
  methods: {
    getCheckedKeys() {
      var str = "";
      var deptNames = "";
      var deptList=[];
      var arr = this.$refs.tree.getCheckedKeys();
      var list=this.$refs.tree.getCheckedNodes();
      if(arr.length==0)
      {
        //  this.$message.error('请选择部门');
        this.DialogVisible = false;
         return false;
      }
      for(let a in list)
      {
        deptList.push(list[a].title);
      }
      str = arr.join(",");
      deptNames=deptList.join(",")
      let data = new FormData();
      data.ids = str;
      demoApi.selectAllUserByDepts(data).then((res) => {
        if (res.data.code == 200) {
          this.options = res.data.data.records;
          this.value=deptNames;
          this.DialogVisible = false;
        }
      });
    },
    getByids() {
      alert(this.userIds.join(","))
    },
    getCeshi()
    {
       let data = new FormData();
       data.cameraItem = '1455364824153329665';
      demoApi.iotCameraList(data).then((res) => {
              if (res.data.code == 200) {
               console.log(res.data.result);
              }
            });
    },
    open() {
      this.DialogVisible = true;
      demoApi.selectStructure().then((res) => {
        if (res.data.code == 200) {
          this.data = res.data.data.records;
        }
      });
    },
  },
};
</script>