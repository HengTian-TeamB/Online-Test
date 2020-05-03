<template>
  <div class="common">
    难度：
    <Rate v-model="difflevel" disabled :count="3" />
    <span class="labelname">标签：{{labelname}}</span>
    <div class="title">{{content}}</div>
  </div>
</template>

<script>
export default {
    props:["difflevel","labelname","content"]
};
</script>

<style scoped>
.common {
    height: 55px;
    white-space: pre-line;
}
</style>