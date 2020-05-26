<template>
  <div>
    <CheckboxGroup v-model="answer" v-if="disabled==true">
      <Checkbox label="A" :disabled="disabled">A:{{optiona}}</Checkbox>
      <Checkbox label="B" :disabled="disabled">B:{{optionb}}</Checkbox>
      <Checkbox label="C" :disabled="disabled">C:{{optionc}}</Checkbox>
      <Checkbox label="D" :disabled="disabled">D:{{optiond}}</Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="resAns" v-if="disabled==false">
      <Checkbox label="A" :disabled="disabled">A:{{optiona}}</Checkbox>
      <Checkbox label="B" :disabled="disabled">B:{{optionb}}</Checkbox>
      <Checkbox label="C" :disabled="disabled">C:{{optionc}}</Checkbox>
      <Checkbox label="D" :disabled="disabled">D:{{optiond}}</Checkbox>
    </CheckboxGroup>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    optiona: {
      type: String,
      default: ""
    },
    optionb: {
      type: String,
      default: ""
    },
    optionc: {
      type: String,
      default: ""
    },
    optiond: {
      type: String,
      default: ""
    },
    answer: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      resAns: []
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