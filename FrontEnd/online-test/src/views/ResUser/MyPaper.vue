<template>
  <div>
    <Table stripe border :columns="columns" :data="testList">
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="startTest(index)">开始考试</Button>
      </template>
    </Table>
  </div>
</template>

<script>
import { _getMyPap } from "@/api/respond";
export default {
  data() {
    return {
      columns: [
        {
          title: "试卷名称",
          key: "pname"
        },
        {
          title: "备注",
          key: "note"
        },
        {
          title: "总分",
          key: "totalpoints"
        },
        {
          title: "考试日期",
          key: "examdate"
        },
        {
          title: "考试时间",
          key: "examtime"
        },
        {
          title: "考试时长",
          key: "duration"
        },
        {
          title: "开始考试",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      testList: []
    };
  },
  methods: {
    startTest(index) {
      this.$Modal.info({
        title: "开始考试",
        content: `试卷名：${this.testList[index].pname}<br>`
      });
      this.$emit("setPapPid", {
        pid: this.testList[index].pid,
        title: this.testList[index].pname
      });
    },
    // 查看考生所有试卷
    getMyPap() {
      _getMyPap().then(res => {
        this.testList = res.data;
      });
    }
  },
  created() {
    this.getMyPap();
  }
};
</script>

<style scoped>
</style>