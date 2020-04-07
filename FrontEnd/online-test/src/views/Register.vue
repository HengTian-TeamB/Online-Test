<template>
  <div class="register">
    <Form class="form" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <h3>欢迎注册</h3>
      <p>已有帐号？<span @click="goToHome">登录</span></p>
      <FormItem label="手机号">
        <Input type="number" v-model=" formCustom.phone"></Input>
      </FormItem>
      <FormItem label="密码" prop="passwd">
        <Input type="password" v-model="formCustom.passwd"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck"></Input>
      </FormItem>
      <FormItem label="验证码">
        <Input class="input_getVerCode" type="password" v-model="formCustom.vercode"></Input>
        <Button class="btn_getVerCode" shape="circle" size="small" type="info" :disabled="showGetVerCode"
          @click="getVerCode('formCustom')">获取验证码</Button>
        <span class="time"><Time :time="verCodeTime" :interval="1" v-show="showGetVerCode" /></span>
      </FormItem>
      <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
    </Form>
  </div>
</template>
<script>
import { phoneNumReg } from "../utils/common";
import { _register, _vfPhone, _getInfo } from "../api/index";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入你的密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请在此输入你的密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      showGetVerCode: false,
      verCodeTime: "",
      formCustom: {
        phone: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 获取验证码
    getVerCode(name) {
      if (phoneNumReg(this, this.formCustom.phone)) {
        this.$refs[name].validate(valid => {
          if (valid) {
            let _vfPhoneParam = {
              phone: this.formCustom.phone
            };
            _vfPhone(_vfPhoneParam).then(res => {
              console.log("vfphone res:" + res.msg);
              if (res.status === 0) {
                // 未被注册
                let _getInfoParam = {
                  phone: this.formCustom.phone,
                };
                _getInfo(_getInfoParam).then(res => {
                  console.log("getInfo res:" + res.msg)
                  if (res.status === 0) {
                    // 获取验证码成功 改变前端界面
                    this.showGetVerCode = true;
                    this.verCodeTime = new Date();
                    setTimeout(() => {
                      this.showGetVerCode = false;
                    }, 30000);
                  }
                });
              } else {
                this.$Message.error(res.msg);
              }
            });
          } else {
            this.$Message.error("请输入完整信息!");
          }
        });
      }
    },
    // 注册
    handleSubmit(name) {
      if (phoneNumReg(this, this.formCustom.phone)) {
        this.$refs[name].validate(valid => {
          if (valid) {
            let data = {
              phone: this.formCustom.phone,
              password: this.formCustom.passwd,
              vfcode: this.formCustom.vercode
            };
            _register(data).then(res => {
              console.log(res);
              if (res.status === 0) {
                this.$Message.success(res.msg);
              } else {
                this.$Message.error(res.msg);
              }
            });
          } else {
            this.$Message.error("注册失败!");
          }
        });
      }
    },

    goToHome() {
      this.$router.replace("/");
    }
  }
};
</script>
<style >
.register {
  background: url("../../public/img/home_bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
.form {
  width: 500px;
  height: 370px;
  background: rgba(239, 238, 241, 0.8);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -175px;
  padding: 0 40px;
}
h3 {
  display: block;
  width: 160px;
  margin-left: -30px;
  font-size: 34px;
  color: #000;
  padding-bottom: 4px;
  font-weight: bold;
}
p {
  display: block;
  font-size: 14px;
  color: #4d4242;
  width: 160px;
  margin-left: -40px;
  margin-bottom: 8px;
}
p span {
  color: #2e58ff;
  cursor: pointer;
}
.input_getVerCode {
  float: left;
  width: 180px;
}
.btn_getVerCode {
  float: left;
  margin-left: 10px;
  margin-top: 4px;
  font-size: 11px;
}
.time {
  float: left;
  margin-top: 1px;
  margin-left: 10px;
  font-size: 11px;
  color: #8590a6;
}
</style>