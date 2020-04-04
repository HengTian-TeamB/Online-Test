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
        <Button class="btn_getVerCode" shape="circle" size="small" type="info" :disabled="showGetVerCode"
          @click="getVerCode">获取验证码</Button>
        <span class="time"><Time :time="verCodeTime" :interval="1" v-show="showGetVerCode" /></span>
        <Input v-model="in_verCode" size="large" type="number" prefix="ios-text" placeholder="请输入验证码" class="input" />
        <br />
        <Button class="btn_login" type="primary" @click="loginVerCode">登录/注册</Button>
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
        <div class="btnBox">
          <Button class="btn_fogetPwd" type="text">忘记密码?</Button>
          <Button class="btn_register" type="text" @click="goToRegister">没有账号</Button>
        </div>
        <Button class="btn_login" type="primary" long @click="userLogin">登录</Button>
      </TabPane>
    </Tabs>
    <span class="msg">
      未注册手机验证后自动登录，注册即代表同意
      <a>《恒天在线考试系统协议》</a>
      <a>《隐私保护指引》</a>
    </span>
    <!-- 提示框 -->
  </section>
</template>

<script>
import { _userLogin, _registered } from "../api/index";
import { infoSend } from "../api/infoClient";
import { phoneNumReg } from "../utils/common"
export default {
  name: "",
  data() {
    return {
      showGetVerCode: false,
      verCodeTime: "",
      userNumber: "",
      real_verCode: "",
      in_verCode: "",
      userPsd: ""
    };
  },
  methods: {
    // 转到注册界面
    goToRegister() {
      this.$router.replace("/register");
    },
    // 手机号+密码的用户登录
    userLogin(userNumber, userPsd) {
      //手机号正则校验
      if (phoneNumReg(this, this.userNumber)) {
        let data = {
          phone: this.userNumber,
          password: this.userPsd
        };
        // 登录
        _userLogin(data).then(res => {
          console.log(res);
          if (res.status === 0) {
            this.$Message.success(res.msg)
          } else {
            this.$Message.error(res.msg)
          }
        });
      }
    },
    // 获取验证码
    getVerCode() {
      if (phoneNumReg(this, this.userNumber)) {
        this.showGetVerCode = true;
        this.verCodeTime = new Date();
        setTimeout(() => {
          this.showGetVerCode = false;
        }, 30000);
        // let data = {
        //   phoneNumber: this.userNumber
        // };
        // _registered(data).then(res => {
        //   console.log("getCV"+res)
        //   this.real_verCode = res
        // });
        this.real_verCode = infoSend(this.userNumber);
        console.log("this.real_verCode", this.real_verCode);
      }
    },
    //免密码登录
    loginVerCode() {
      if (this.real_verCode === this.in_verCode) {
        //账号不存在
        this.$router.replace("/register");
        console.log("登录成功！");
      }
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
  height: 380px;
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
  float: left;
  margin-top: 12px;
  margin-left: -2px;
  font-size: 11px;
}
.time {
  float: left;
  margin-top: 15px;
  margin-left: 9px;
  font-size: 11px;
  color: #8590a6;
}
.btn_login {
  display: block;
  margin: 25px auto 8px;
}
.btnBox {
  overflow: hidden;
}
.btn_fogetPwd {
  float: left;
  width: 70px;
  height: 20px;
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  margin-left: 190px;
  margin-top: 5px;
}
.btn_register {
  float: left;
  width: 70px;
  height: 20px;
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  margin-left: 2px;
  margin-top: -20px;
}
</style>