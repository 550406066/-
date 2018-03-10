<template>
  <div class="login">
    <img src="../assets/minions.jpg" alt="">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
      <el-form-item prop="name" >
        <el-input v-model="ruleForm.name" placeholder="手机号或邮箱" class="input_name"></el-input>
      </el-form-item>
      <el-form-item  prop="password" >
        <el-input v-model="ruleForm.password" placeholder="密码" class="input_password"></el-input>
      </el-form-item>
    </el-form>

    <el-alert title="用户名和密码随便输入" type="success" close-text="知道了">
    </el-alert>
    <el-button type="warning"  @click="seeMe">查看作者</el-button>
  <el-button type="danger"  @click="submitForm('ruleForm')"> 登陆</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "欢迎使用后端模板",
      ruleForm: {
        name: "",
        password: "",
     
      },
      rules: {
          name: [
            { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
      
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]

  }
    };
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.$router.push('form')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      seeMe() {
        window.location.href ="https://github.com/550406066"
      }
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login {
  margin: 10%;
  padding: 1.2rem;
  border: 1px solid #ecb45f;
  box-shadow: #ea991e 4px 3px;
}
.input_name,
.input_password {
  margin: 0.3rem;
}
</style>
