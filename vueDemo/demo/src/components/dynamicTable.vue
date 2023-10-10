<template>
  <div id="dynamicTable">

    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="org" label="组织" width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.show">
            <el-input v-model="scope.row.org"></el-input>
          </template>
          <template v-else>
            <span>{{ scope.row.org }}</span>
          </template>
        </template>

      </el-table-column>
      <el-table-column prop="mobile" label="号码" width="120">
          <template slot-scope="scope">
          <template v-if="scope.row.show">
            <el-input v-model="scope.row.mobile"></el-input>
          </template>
          <template v-else>
            <span>{{ scope.row.mobile }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
          <template slot-scope="scope">
          <template v-if="scope.row.show">
            <el-input v-model="scope.row.name"></el-input>
          </template>
          <template v-else>
            <span>{{ scope.row.name }}</span>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="上传附件" width="120">
        <template #default="scope">
            <el-upload
            class="upload-demo"
            action="/system/sysFile/uploadImg"
            :headers="headers"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="(file,fileList)=>{ return handleAvatarSuccess(file,scope.row.fileList,scope.row.fileIds)}"
            multiple
            :file-list="scope.row.fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <i class="el-icon-circle-plus-outline" @click="addRow(scope.$index, tableData)"></i>
          <i class="el-icon-remove-outline" @click="deleteRow(scope.$index, tableData)"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="tijiao()" type="primary" plain>提交</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addRow(index, rows) {
      let obj={show:true,org: "",mobile: "",name: "",fileIds:"",fileList:[]}
      this.tableData.push(obj);
    },
    tijiao() {
      console.log(this.tableData);
    },
    //关于附件
    handleRemove(file, fileList) {
      this.fileIds = [];
      fileList.forEach((file) => {
        this.fileIds.push(file.id);
      });
      let vals = this.fileIds.join(",");
      console.log(vals)
    },
    handlePreview(file) {
        console.log(file);
        window.open(file.response.data.url)
    },
    // uploadSuccess(response, file, fileList) {
    //   // file.id = response.data.id;
    //   this.fileIds.push(response.data.id);
    //   let vals = this.fileIds.join(",");
    //   console.log(vals)
    // },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleAvatarSuccess(response,fileList,fileIds){
      console.log('fffffff'+fileIds)
      console.log('43651564321132'+fileList)
      if(fileIds!='')
      {
          fileList=fileIds.split(',');
           console.log('*********************'+fileList)
      }
      else
      {
        fileList=[]
      }
      console.log(fileList)
      fileList.push(response.data.id)
      fileIds=fileList.join(',')
      console.log(fileIds)
    }
  },
  data() {
    return {
      headers:{
          'accessToken':'90e1f0101e2644af0391e2ba93ec0c98',
        },
      tableData: [
        { org: "123",mobile: "146516514",name: "张三",fileIds:"12345",fileList:[]},
      ],
      fileIds:[],
      flag: true,
    };
  },
};
</script>

<style  scoped>
</style>
