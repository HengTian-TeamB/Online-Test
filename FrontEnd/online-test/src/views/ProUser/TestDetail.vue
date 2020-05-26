<template>
  <div>
    <!-- 所有试卷列表 -->
    <div class="paperList">
      <List header="我的试卷" footer="到底了" border>
        <ListItem class="paperItem" v-for="paper in paperList">
          <span @click="paperChose" :class="{active: currentPaper == paper.pid}">编号:{{paper.pid}}
            <br>试卷名:{{paper.pname}}</span>
        </ListItem>
      </List>
    </div>
    <!-- 试卷内容 -->
    <div class="paper">
      <Paper :paperTitle="currentTitle" :proList="proList"></Paper>
    </div>
  </div>
</template>

<script>
import { _getAllPap, _getPap } from "@/api/problem";
import Paper from "@/components/Problems/Paper";
export default {
  data() {
    return {
      paperList: [], //试卷列表
      paperId: [11, 18, 20, 21, 22, 24, 25, 26],
      currentPaper: "", //当前选中的试卷pid
      currentTitle: "", //当前选中的试卷名字
      proList: {}
    };
  },
  methods: {
    paperChose(event) {
      this.currentPaper = event.target.innerText.split(":")[1].substring(0, 2);
      this.currentTitle = event.target.innerText.split(":")[2];
      let param = {
        id: this.currentPaper
      };
      _getPap(param).then(res => {
        if (res.status === 0) {
          this.proList = res.data;
        }
      });
    },
    // 显示所有试卷名字
    getAllPap() {
      _getAllPap().then(res => {
        if (res.status === 0) {
          this.paperList = res.data;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
  },
  created() {
    this.getAllPap();
  },
  components: {
    Paper
  }
};
</script>

<style scoped>
.paperList {
  width: 230px;
  height: 600px;
  position: absolute;
  float: left;
  top: 15px;
  overflow: auto;
  padding: 4px;
}
.paperContainer {
  width: 740px;
  height: 610px;
  position: absolute;
  float: left;
  background-color: #fff;
  left: 250px;
  top: 10px;
  overflow: auto;
}
.paperItem {
  cursor: pointer;
}
.paperItem span {
  width: 100%;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
}
.paperItem span.active {
  color: #ff7f00;
}
.paper {
  /* width: 80%; */
}
</style>