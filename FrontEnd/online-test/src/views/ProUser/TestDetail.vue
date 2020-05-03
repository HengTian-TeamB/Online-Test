<template>
  <div>
    <div class="testList">
      <List header="我的试卷" footer="到底了" border>
        <ListItem class="testItem" v-for="testName in testList" :key="testName">
          <span @click="testChose" :class="{active: currentTest == testName}">{{testName}}</span>
        </ListItem>
      </List>
    </div>
    <div class="testContainer">
      <div class="testInfo">
        {{testInfo.pname}}
        <br>
        {{testInfo.examdate}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testList: ["t1", "t2", "t3"],
      currentTest: "",
      testInfo: {
        pname: "test1",
        examdate: "2020-0502"
      }
    };
  },
  methods: {
    testChose(event) {
      this.currentTest = event.target.innerText;
    }
  }
};
</script>

<style scoped>
.testList {
  width: 230px;
  height: 600px;
  position: absolute;
  float: left;
  top: 15px;
  overflow: auto;
  padding: 4px;
}
.testContainer {
  width: 740px;
  height: 610px;
  position: absolute;
  float: left;
  background-color: #fff;
  left: 250px;
  top: 10px;
  overflow: auto;
}
.testItem {
  cursor: pointer;
}
.testItem span {
  width: 100%;
  text-align: center;
  display: inline-block;
  margin: 0 auto;
}
.testItem span.active {
  color: #ff7f00;
}
</style>