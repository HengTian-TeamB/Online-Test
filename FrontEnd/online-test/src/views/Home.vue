<template>
  <div class="home">
    <HeaderTop title="恒天在线考试系统">
      <div class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </div>
    </HeaderTop>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import Login from "@/components/Login.vue";
export default {
  name: "Home",
  components: {
    HeaderTop,
    Login
  }
};
</script>
<style scoped>
.home {
  background: url("../../public/img/home_bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
</style>
