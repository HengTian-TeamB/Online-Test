<template>
  <div>
    <Col class="menu" span="8">
    <Menu theme="dark" :open-names="['1']" accordion @on-select="select">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-paper" />
          题库管理
        </template>
        <MenuItem name="1-1">查看题目</MenuItem>
        <MenuItem name="1-2">添加题目</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="md-paper" />
          试卷管理
        </template>
        <MenuItem name="2-1">自动组卷</MenuItem>
        <MenuItem name="2-2">手动组卷</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="md-person" />
          考生管理
        </template>
        <MenuItem name="3-1">考生信息查看</MenuItem>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-stats" />
          考试统计
        </template>
        <MenuItem name="4-1">试卷完成情况</MenuItem>
      </Submenu>
      <Submenu name="5">
        <template slot="title">
          <Icon type="ios-pricetag" />
          标签管理
        </template>
        <MenuItem name="5-1">标签修改</MenuItem>
      </Submenu>
      <Submenu name="6">
        <template slot="title">
          <Icon type="ios-happy" />
          心灵鸡汤管理
        </template>
        <MenuItem name="3-1">心灵鸡汤管理</MenuItem>
      </Submenu>
    </Menu>
    </Col>
    <div class="container">
      <TestBank v-if="currentCho === '1-1'"></TestBank>
      <AddPro v-if="currentCho === '1-2'"></AddPro>
    </div>
  </div>
</template>

<script>
import TestBank from "@/views/ProUser/_TestBank";
import AddPro from "@/views/ProUser/AddPro"
export default {
  data() {
    return {
      currentCho: ""
    };
  },
  methods: {
    select(event) {
      this.currentCho = event;
    }
  },
  components: {
    TestBank,
    AddPro
  }
};
</script>


<style scoped>
.menu {
  float: left;
  position: absolute;
  top: 90px;
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
