<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <HeaderTop title="恒天在线考试系统">
      <div class="header_login" slot="right">
        <!-- tf:{{userInfo}} -->
        <span v-if="JSON.stringify(userInfo) === '{}'">
          <a class="login" @click="goToLogin">登录</a>|
          <a class="regisert" @click="goToRegister">注册</a>
        </span>
        <span v-else>用户手机号：{{userInfo.phone}}
          <a href="void(0)">登出</a>
        </span>
      </div>
    </HeaderTop>
    <router-view class="Router"></router-view>
  </div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop.vue";
import { mapState } from "vuex";

export default {
  components: {
    HeaderTop
  },
  data() {
    return {};
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
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // 从session中获取登录状态 刷新之后依然存在
    if (JSON.stringify(this.userInfo) === "{}") {
      // 提交到vuex
      // this.$store.commit("initUserInfo", this.userInfo);
      // console.log("userInfo is null");
      // console.log(this.userInfo);
    } else {
      // console.log("not null", JSON.stringify(this.userInfo));
    }
    // console.log(this.userInfo == {});
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
.login,
.register {
  cursor: pointer;
  display: inline-block;
  margin: auto 2px;
}
</style>
