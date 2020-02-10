<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <!-- 账户名 -->
    <el-form-item class="form-item" prop="username">
      <el-input v-model="form.username" placeholder="用户名手机"></el-input>
    </el-form-item>
    <!-- 验证码 -->
    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <!-- 用户名 -->
    <el-form-item class="form-item" prop="nickname">
      <el-input v-model="form.nickname" placeholder="你的名字"></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item class="form-item" prop="password">
      <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
    </el-form-item>
    <!-- 确认密码 -->
    <el-form-item class="form-item" prop="isPassword">
      <el-input v-model="form.isPassword" placeholder="确认密码" type="password"></el-input>
    </el-form-item>
    <!-- 提交按钮 -->
    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    //   密码的自定义验证
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.isPassword !== "") {
          this.$refs.form.validateField("isPassword");
        }
        callback();
      }
    };
    // 确认密码的自定义验证
    var validateIsPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 验证账户名的自定义验证
    var validateUsername = (rule,value,callback) => {
        if(value === ''){
            callback(new Error("请输入账户名"));
        }else if(/^[1]\d{10}$/.test(value)){
            callback()     
        } else {
          callback(new Error("输入的账户名不合法!"));
        }
    }
    return {
      // 表单数据
      form: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        isPassword: ""
      },
      // 表单规则
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        nickname: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        captcha: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        isPassword: [{ validator: validateIsPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {
        // this.$axios({
        //     url : '/captchas',
        //     method : 'post',
        //     data :{
        //         tel : this.form.username
        //     }
        // }).then(res =>{
        //     console.log(res)
        // })
        this.$store.dispatch('user/captcha',this.form.username).then(res =>{
            this.$message.success(`模拟验证码为  ${res.data.code}`)
        })
    },

    // 注册
    handleRegSubmit() {
      this.$refs.form.validate((valid) => {
          if (valid) {
              const {isPassword,...data} = this.form;
            //  this.$axios({
            //      url : '/accounts/register',
            //      method : 'post',
            //      data
            //  }).then(res =>{
            //     //  console.log(res)
            //     this.$store.commit('user/getData',res.data)
            //  })
            this.$store.dispatch('user/register',data).then( ()=>{
                this.$message.success('注册并登录完成!')
                this.$router.push('/')
            })
          } else {
            this.$message.warning('温馨提示，注册验证失败！')
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>