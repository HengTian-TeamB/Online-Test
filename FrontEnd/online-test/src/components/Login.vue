<template>
  <section class="login-container">
    <Tabs value="name1">
      <TabPane label="免密码登录" name="name1">
        <Button type="primary">登录/注册</Button>
        <br>
        <span>未注册手机验证后自动登录，注册即代表同意 <a>《恒天在线考试系统协议》</a><a>《隐私保护指引》</a></span>
      </TabPane>
      <TabPane label="密码登录" name="name2">
        <span class="input-label">账号</span>
        </br>
        <Input v-model="user_number" size="large" prefix="ios-contact" placeholder="请输入手机号" class="input" />
        <br>
        <span class="input-label">密码</span>
        <Input v-model="user_psd" size="large" type="password" password placeholder="请输入密码" class="input" />
        </br>
      </TabPane>
    </Tabs>
    

  </section>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
    }
    },
    components:{
      
    }
  }
</script>

<style scoped>
.login-container {
    position: absolute;
    top: 90px;
    right: 60px;
    background-color: #fff;
    width: 280px;
    height: 460px;
}
.input {
  width: 260px;
  margin: auto 10px;
}
.input-label {
float: left;
margin: 14px;
}
</style>