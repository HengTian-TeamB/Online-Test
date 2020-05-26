<template>
  <div>
    <div v-if="disabled==true" class="answer" :disabled="disabled">答案：{{answer}}</div>
    <Input v-if="disabled==false" v-model="resAns" placeholder="请输入答案." style="width: 300px" />
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      resAns: ""
    };
  },
  watch: {
    resAns(newValue, oldValue) {
      this.$emit("setAns", newValue);
    }
  }
};
</script>

<style scoped>
.answer {
  margin-top: 50px;
}
</style>