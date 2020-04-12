<template>
  <div class="home">
    <div class="problem" @click="goToProblem">
      我要出题
    </div>
    <div class="respond" @click="goToResponder">
      我要答题
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {
    goToProblem() {
      this.$router.push("/problem").catch(err => {
        err;
      });
    },
    goToResponder() {
      this.$router.push("/responder").catch(err => {
        err;
      });
    }
  }
};
</script>
<style scoped>
.problem,
.respond {
  background-color: rgba(239, 238, 241, 0.8);
  float: left;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 60px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  font-size: 40px;
  color: #000;
}
.problem {
  left: 30%;
}
.respond {
  left: 70%;
}
</style>
