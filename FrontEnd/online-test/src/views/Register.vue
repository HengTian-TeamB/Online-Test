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
      <FormItem>
        <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { phoneNumReg } from "../utils/common";
import { _registered } from "../api/index";

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
    handleSubmit(name) {
      if (phoneNumReg(this, this.formCustom.phone)) {
        this.$refs[name].validate(valid => {
          if (valid) {
            let data = {
              phone: this.formCustom.phone,
              password: this.formCustom.passwd
            };
            _registered(data).then(res => {
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
  height: 350px;
  background: rgba(239, 238, 241, 0.8);
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -175px;
  padding: 0 40px;
}
</style>