<template>
  <header class="header">
    <a class="ht_logo" href="/" title="恒天在线考试"></a>
    <div class="nav">
      <ul>
        <li @click="goToHome">
          <a>
            <Icon type="ios-home" siez="22px" color="#fff" />首页</a>
        </li>
        <li @click="goToTestBank">
          <a>
            <Icon type="ios-paper" siez="22px" color="#fff" />题库</a>
        </li>
      </ul>
    </div>
    <!-- 插槽是父组件与子组件的通讯方式，子组件中的slot可以显示父组件传递给子组件的内容 -->
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  // 外部组件传递给此组件的属性
  props: {
    title: String
  },
  methods: {
    goToHome() {
      this.$router.push("/").catch(err => {
        err;
      });
    },
    goToTestBank() {
      this.$router.push("/testbank").catch(err => {
        err;
      });
    }
  }
};
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
.header {
  background-color: rgba(113, 110, 139, 0.6);
  position: relative;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .go_back {
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .ht_logo {
    background: url('../../public/img/ht_logo.png') repeat;
    display: block;
    position: absolute;
    width: 118px;
    height: 46px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  .nav {
    // background-color: rgba(113, 110, 139, 0.6);
    height: 45px;
    position: absolute;
    top: 50%;
    left: 170px;
    transform: translateY(-50%);

    ul {
      overflow: hidden;
    }

    li {
      float: left;
      font-size: 20px;
      line-height: 45px;
      padding: 0 10px;
      margin-left: 4px;
    }
  }

  .header_message {
    img {
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
    }
  }

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconsousuo {
      font-size: 25px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    color: #fff;
    text-align: center;

    .header_title_text {
      font-size: 20px;
      color: #fff;
      display: block;
    }
  }

  .header_login {
    font-size: 14px;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);

    .header_login_text {
      color: #fff;

      .profile_img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }

  .header_message {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;

    .header_message_text {
      .iconfont {
        font-size: 24px;
      }

      .mint-badge {
        position: absolute;
        bottom: 14px;
        left: 10px;
      }
    }
  }
}
</style>
