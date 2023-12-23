<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="name" @focus="open()"></el-input>

        <el-button @click="getByids">22</el-button>
        <el-input v-model="defaultProps.children"></el-input>
        <el-input v-model="name"></el-input>
        <el-button @click="changeName"></el-button>
      </el-col>
      <el-col :span="12">
        <el-select v-model="userIds" multiple placeholder="请选择">
          <el-option v-for="item in options1" :key="item.userId" :label="item.userName" :value="item.userId">
          </el-option>
        </el-select>

        <el-select v-model="userIds" multiple placeholder="水果">
          <el-option v-for="item in options2" :key="item.userId" :label="item.pName" :value="item.userId">
          </el-option>
        </el-select>

        <el-select v-model="userIds" multiple placeholder="关大维的大屁股">
          <el-option v-for="item in options3" :key="item.userId" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-dialog title="组织部门" :visible.sync="DialogVisible" center>
      <el-tree :data="data" show-checkbox node-key="id" ref="tree" :default-expanded-keys="[1]" :props="defaultProps">
      </el-tree>
      <div style="text-align:center">
        <el-button @click="getCheckedKeys">提交</el-button>
        <el-button @click="DialogVisible = false">取消</el-button>
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
      Url: "http://test-jnjgapi.lanlin.site/img/2021-06-03/a7d4509cc82a4fc9bee2ff6641e643dc.txt",
      data: [1, 2, 3, 4, 5],
      options1: [{ userId: "香蕉", userName: "关大维的" }, { userId: "苹果", userName: "关大维吃鸡巴" }, { userId: "西红柿", userName: "关大维被爆菊" }],
      options2: [{ pName: "苹果", userId: "1" }, { pName: "香蕉", userId: "2" }, { pName: "西红柿", userId: "3" }, { pName: "苹果", userId: "4" }],
      options3: [{ name: "土豆丝", id: "1" }, { name: "鱼香茄子", id: "2" }, { name: "西红柿炒蛋", id: "3" }, { name: "糖醋里脊", id: "4" }, { name: "鱼香茄子", id: "5" }],
      date: 2023 - 12 - 23,
      userIds: "",
      num: null,
      DialogVisible: false,
      value: '',
      name: '杨芯媞',
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  created() {
    this.changeName();
    this.plusdeletename();
    this.homework2();
    console.log(this.data)
  },
  methods: {
    changeName() {
      this.defaultProps.children = "关鸡巴",
        this.options1[2].userName = "关阴茎",
        this.options2[2].pName = "柠檬"
    },
    plusdeletename() {
      let a = { pName: "西瓜", userId: "5" }
      this.options2.push(a);

      let list = this.options2;
      for (let i = 0; i < list.length; i++) {
        if (list[i].pName === '苹果') {
          list[i].pName = "草莓"
        } else if (list[i].pName === '柠檬') {
          list[i].pName = "桃子"
        } else {
          list[i].pName = "竹子"
        }
      }
    },
    homework2() {
      let c = 0;
      let jb = this.options3;
        for(let c=0; c<jb.length; c++){
          if(jb[c].name === '鱼香茄子'){
            jb[c].name='红烧茄子'
            return;
          }
          if(jb[c].name == '西红柿炒蛋'){
            this.options3.splice(c,1)
          }
          if(jb[c].name == '土豆丝'){
            this.name="杨凯婕"
        }
      }
      this.name="关大维"
        // switch (jb[c].name) {
        //   case '鱼香茄子':{
        //     jb[c].name='红烧茄子'
        //     break;
        //   }
        //   case '土豆丝':{
        //     this.name="杨凯婕"
        //     break;
        //   }
         
        //   default:
        //   jb[c].name='橘子'
        //     break;
        // }
      

      // for(let c=jb.length ; c <= 0; c--){
      //     if(jb[c].name === '鱼香茄子'){
      //       jb[c].name='红烧茄子'
      //     }
      //     if(jb[c].name == '西红柿炒蛋'){
      //       this.options3.splice(c,1)
      //     }
      //     if(jb[c].name == '土豆丝'){
      //       this.name="杨凯婕"
      //   }
      // }
      // while (c < jb.length) {
      //   if (jb[c].name === '鱼香茄子') {
      //     jb[c].name = '红烧茄子'
      //   }
      //   if (jb[c].name == '西红柿炒蛋') {
      //     this.options3.splice(c, 1)
      //   }
      //   if (jb[c].name == '土豆丝') {
      //     this.name = "杨凯婕"
      //   }
      //   c++;
      // }

      // do {
      //   c++;
      // } while (c < jb.length) {
      //   if (jb[c].name === '鱼香茄子') {
      //     jb[c].name = '红烧茄子'
      //   }
      //   if (jb[c].name == '西红柿炒蛋') {
      //     this.options3.splice(c, 1)
      //   }
      //   if (jb[c].name == '土豆丝') {
      //     this.name = "杨凯婕"
      //   }
      //   c++;
      // }
    },

    getCheckedKeys() {
      var str = "";
      var deptNames = "";
      var deptList = [];
      var arr = this.$refs.tree.getCheckedKeys();
      var list = this.$refs.tree.getCheckedNodes();
      if (arr.length == 0) {
        //  this.$message.error('请选择部门');`
        this.DialogVisible = false;
        return false;
      }
      for (let a in list) {
        deptList.push(list[a].title);
      }
      str = arr.join(",");
      deptNames = deptList.join(",")
      let data = new FormData();
      data.ids = str;
      demoApi.selectAllUserByDepts(data).then((res) => {
        if (res.data.code == 200) {
          this.options = res.data.data.records;
          this.value = deptNames;
          this.DialogVisible = false;
        }
      });
    },
    getByids() {
      alert(this.userIds.join(","))
    },
    getCeshi() {
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