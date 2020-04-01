<template>
  <section class="login-container">
    <Tabs value="name1">
      <!-- 手机号+验证码登录 -->
      <TabPane label="免密码登录" name="name1">
        <span class="input_label">账号</span>
        <br />
        <Input v-model="userNumber" size="large" type="number" prefix="ios-phone-portrait" placeholder="请输入手机号"
          class="input" />
        <br />
        <span class="input_label">验证码</span>
        <Button class="btn_getVerCode" shape="circle" size="small" type="info" :disabled="showGetVerCode">获取验证码</Button>
        <Input v-model="verCode" size="large" type="number" prefix="ios-text" placeholder="请输入验证码" class="input" />
        <br />
        <Button class="btn_login" type="primary">登录/注册</Button>
      </TabPane>
      <!-- 手机号+密码登录 -->
      <TabPane label="密码登录" name="name2">
        <span class="input_label">账号</span>
        <br />
        <Input v-model="userNumber" size="large" type="number" prefix="ios-phone-portrait" placeholder="请输入手机号"
          class="input" />
        <br />
        <span class="input_label">密码</span>
        <Input v-model="userPsd" size="large" type="password" password placeholder="请输入密码" class="input" />
        <br />
        <Button class="btn_fogetPwd" type="text">忘记密码?</Button>
        <Button class="btn_login" type="primary" long @click="userLogin">登录</Button>
      </TabPane>
    </Tabs>
    <span class="msg">
      未注册手机验证后自动登录，注册即代表同意
      <a>《恒天在线考试系统协议》</a>
      <a>《隐私保护指引》</a>
    </span>
  </section>
</template>

<script>
import { _userLogin } from "../api/index";
export default {
  name: "",
  data() {
    return {
      showGetVerCode: false,
      userNumber: "",
      verCode: "",
      userPsd: ""
    };
  },
  methods: {
    userLogin(userNumber, userPsd) {
      let data = {
        userNumber: this.userNumber,
        userPsd: this.userPsd
      };
      console.log(data)
      _userLogin(data).then(res=>{
        console.log(res)
        if(res.code === 200){
          console.log(res)
          console.log("login sucess")
        } else {
          console.log("login fail")
        }
      });
    }
  },
  components: {}
};
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 90px;
  right: 60px;
  background-color: #fff;
  width: 280px;
  height: 360px;
}
.msg {
  display: block;
  width: 230px;
  margin: auto;
  text-align: left;
  font-size: 13px;
}
.input {
  width: 260px;
  margin: auto 10px;
}
.input_label {
  float: left;
  margin: 14px;
}
.btn_getVerCode {
  display: inline-block;
  margin-top: 9px;
  margin-left: -120px;
  font-size: 11px;
}
.btn_login {
  display: block;
  margin: 25px auto 8px;
}
.btn_fogetPwd {
  display: block;
  width: 70px;
  height: 20px;
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  margin-left: 190px;
  margin-top: 5px;
}
</style>