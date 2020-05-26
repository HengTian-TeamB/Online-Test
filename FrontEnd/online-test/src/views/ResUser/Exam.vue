<template>
  <div class="paper">
    <Paper :paperTitle="title" :proList="proList" :isRes=1 ></Paper>
  </div>
</template>

<script>
import Paper from "@/components/Problems/Paper";
import { _getAllPap, _getPap } from "@/api/problem";
export default {
  data() {
    return {
      proList: {},
      title: ""
    };
  },
  methods: {
    getPap() {
      let param = {
        id: this.$route.query.pid
      };
      _getPap(param).then(res => {
        if (res.status === 0) {
          this.proList = res.data;
          console.log(this.proList);
        }
      });
    }
  },
  created() {
    this.getPap();
    this.title = this.$route.query.title;
  },
  components: {
    Paper
  }
};
</script>

<style scoped>
.paper {
  width: 80%;
  height: 85%;
  position: absolute;
  float: left;
  background: rgba(239, 238, 241, 0.8);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  overflow: auto;
}
</style>