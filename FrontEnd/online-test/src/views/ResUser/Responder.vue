<template>
  <div>
    <Col class="menu" span="8">
    <Menu theme="dark" accordion :open-names="['1']" @on-select="select" :active-name="1-1">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          考试管理
        </template>
        <MenuItem name="1-1">查看试卷</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="md-paper" />
          考试报告
        </template>
        <MenuItem name="2-1">查看报告</MenuItem>
      </Submenu>
    </Menu>
    </Col>
    <div class="container">
      <MyPaper v-if="currentCho === '1-1'" v-on:setPapPid="getPapPid"></MyPaper>
    </div>
  </div>
</template>

<script>
import MyPaper from "@/views/ResUser/MyPaper";
export default {
  data() {
    return {
      currentCho: ""
    };
  },
  methods: {
    select(event) {
      this.currentCho = event;
    },
    // 打开新页面进行考试
    startEaxm(info) {
      const routeUrl = this.$router.resolve({
        path: "/exam",
        query: {
          pid:info.pid,
          title:info.title
        }
      });
      window.open(routeUrl.href, "_blank");
    },
    // 接受字组建传递来的试卷信息
    getPapPid(info) {
      console.log(info);
      this.startEaxm(info);
    }
  },
  components: {
    MyPaper
  }
};
</script>


<style scoped>
.menu {
  float: left;
  position: absolute;
  top: 190px;
  left: 10px;
  width: 250px;
}
.container {
  float: left;
  background: rgba(239, 238, 241, 0.8);
  position: absolute;
  top: 60px;
  left: 270px;
  width: 1000px;
  height: 630px;
  padding: 5px;
}
</style>
