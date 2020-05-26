<template>
  <div class="home">
    <router-link to="/problem" class="problem">
      <span>我要出题</span>
    </router-link>
    <router-link to="/responder" class="respond" >
      <span>我要答题</span>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {
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
