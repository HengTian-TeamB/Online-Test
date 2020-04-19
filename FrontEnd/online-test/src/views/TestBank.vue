<template>
  <div id="testBank">
    <TestBank></TestBank>
  </div>
</template>

<script>
import TestBank from "@/views/ProUser/_TestBank";
export default {
  components: {
    TestBank
  }
};
</script>

<style scoped>
#testBank {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  width: 1080px;
  height: 630px;
  background: rgba(239, 238, 241, 0.8);
}
</style>