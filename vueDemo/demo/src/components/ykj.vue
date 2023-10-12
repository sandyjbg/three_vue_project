<template>
    <div class="wtf"> 
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"><h1>注册你的JB账号</h1></div></el-col>
        </el-row>
        <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="上传头像">
                <el-col :span="12">
                    <div class="sub-title"></div>
                    <div class="demo-basic--circle"></div>
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                 </el-col>
            </el-form-item>
            
            <el-form-item label="用户名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="性别">
                 <el-select v-model="form.region" placeholder="请选择性别">
                    <el-option label="男" value="male"></el-option>
                    <el-option label="女" value="female"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="生日">
                <el-col :span="24">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 50%;"></el-date-picker>
                </el-col>
             </el-form-item>

             <el-form-item label="手机号码">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="短信验证码">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="电子邮箱">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="想收到优惠促销信息吗？">
                <el-radio-group v-model="form.resource">
                <el-radio label="好啊"></el-radio>
                <el-radio label="去你妈的"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">注册</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        sizeList: ["large", "medium", "small"]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
.wtf{
    width:500px;
    margin: 0 auto;
}
</style>