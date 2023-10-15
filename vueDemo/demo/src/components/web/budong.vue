<template>
  <div>
    <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"><h1>这是一个JB头</h1></div></el-col>
    </el-row>
    <el-row>
      <router-view/>
    </el-row>

  </div>
</template>

<script>
export default {
    data() {
      return {
        fits: ['fill'],
        url: 'https://s2.loli.net/2023/10/13/ImCJMBLn2fVYXGW.jpg'
      }
    }
}
</script>

<style>
.bg-purple{
  background-color: bisque;
  float: left;
  height:1000px;
  box-shadow: 2px 0px 0px 0px gray;
}
.bg-purple2{
  background-color: bisque;
  float: right;
  height:1000px;
  box-shadow: 0px 0px 0px 2px gray;
}
body{
  background-color:burlywood;
}
.bg-purple-dark{
  background-repeat: repeat-x;
  color:white;
}
</style>
