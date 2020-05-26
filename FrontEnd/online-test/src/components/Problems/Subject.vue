<template>
  <div>
    <div v-if="disabled==true" class="answer">答案：{{answer}}</div>
    <Input v-if="disabled==false" v-model="resAns" placeholder="请输入答案." style="width: 300px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      resAns: ""
    };
  },
  watch: {
    resAns(newValue, oldValue) {
      this.$emit("setAns", newValue);
    }
  },
  props: {
    answer: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
.answer {
  margin-top: 10px;
  /* white-space: pre-line; */
}
</style>