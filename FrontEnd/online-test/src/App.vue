<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <HeaderTop title="恒天在线考试系统">
      <div class="header_login" slot="right">
        <a class="login" @click="goToLogin">登录</a>|<a class="regisert" @click="goToRegister">注册</a>
      </div>
    </HeaderTop>
    <router-view class="Router"></router-view>
  </div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop.vue";
export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      
    };
  },
  methods: {
    goToLogin() {
      this.$router.replace("/login").catch(err => {
        err;
      });
    },
    goToRegister() {
      this.$router.replace("/register").catch(err => {
        err;
      });
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: url("../public/img/home_bg.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  position: fixed;
  width: 100%;
}
.login, .register {
  cursor: pointer;
  display: inline-block;
  margin: auto 2px;
}
</style>
