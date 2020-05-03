<template>
  <div>
    <div class="answer">答案：{{answer}}</div>
  </div>
</template>

<script>
export default {
  props: ["answer"]
};
</script>
<style scoped>
.answer {
    margin-top: 10px;
    /* white-space: pre-line; */
}
</style>