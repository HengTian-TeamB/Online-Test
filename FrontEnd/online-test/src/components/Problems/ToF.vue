<template>
  <div>
    <RadioGroup v-model="answer" v-if="disabled==true">
      <Radio label="true" :disabled="disabled">True</Radio>
      <Radio label="false" :disabled="disabled">False</Radio>
    </RadioGroup>
    <RadioGroup v-model="resAns" v-if="disabled==false">
      <Radio label="true" :disabled="disabled">True</Radio>
      <Radio label="false" :disabled="disabled">False</Radio>
    </RadioGroup>
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
</style>