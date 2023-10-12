<template>
  <div>
     <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark1">
            <el-input v-model="input" placeholder="请输入账号"></el-input>
            <el-input v-model="input" placeholder="请输入密码"></el-input>
        </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark2"><el-link type="primary">忘记密码</el-link></div></el-col>
    </el-row>
    <el-row>
         <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button type="primary">登录</el-button>
            <router-link to="budong/qnmykj">
              <el-button type="primary" >注册</el-button>
            </router-link>
        </div>
      </el-col>
    </el-row> 
  </div>
</template>

<script>
export default {
  data() {
      return {
        input:""
      }
    },
methods:{
}
}

</script>

<style>
.bg-purple-dark1{
  width: 250px;
  margin: 0 auto 25px auto;
}
.bg-purple-dark2{
  margin: 0 0 25px 0;
}
</style>