<template>
    <div class="wtf">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark2"><h1>注册一个JB账号</h1></div></el-col>
        </el-row>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  label-position="left" class="demo-ruleForm">
            <el-form-item label="账户名称" prop="name" status-icon="el-icon-check">
                <el-input v-model="ruleForm.name" ></el-input>
            </el-form-item>

            <el-form-item label="姓名" prop="name2">
                <el-input v-model="ruleForm.name2"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="sex">
                <el-select v-model="ruleForm.region" placeholder="请选择性别">
                    <el-option label="男" value="male"></el-option>
                    <el-option label="女" value="female"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="出生日期" required>
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 80%;"></el-date-picker>
                    </el-form-item>
            </el-form-item>

            <el-form-item label="手机号码" prop="phonenumber">
                <el-input v-model="ruleForm.number" :maxlength="11" :pattern="phoneNumberPattern"></el-input>
            </el-form-item>

            <el-form-item label="短信验证码" prop="verify">
                <el-input v-model="ruleForm.name3" :pattern="emailPattern"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
             </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="ruleForm.name4"></el-input>
            </el-form-item>

            <el-form-item label="想收到优惠信息吗？" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="想"></el-radio>
                <el-radio label="去你妈的"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" icon="el-icon-plus">注册</el-button>
                <el-button @click="tiao()" icon="el-icon-close">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          number:'',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          phoneNumberPattern: '^1[3|4|5|7|8][0-9]{9}$',
          emailPattern: '^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]',
          pass: '',
          checkPass: '',
        },
        rules: {
          name: [
            { required: true, message: '账户名称不能为空', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name2: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择活动性别', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          phonenumber: [
            { required: true, message: '请输入电话号码', trigger: 'blur' }
          ],
          verify: [
            { required: true, message: '请输入短信验证码', trigger: 'blur' }
          ],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱账号', trigger: 'blur' },
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      tiao()
      {
        this.$router.push({path:'/login'})
      }
    }
  }
</script>

<style>
.wtf{
    width:50%;
    margin:0 auto;
}
</style>
