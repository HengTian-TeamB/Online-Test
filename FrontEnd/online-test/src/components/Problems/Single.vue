<template>
  <div>
      <RadioGroup v-model="answer" v-if="disabled==true">
        <Radio label="A" :disabled="disabled">A:{{optiona}}</Radio>
        <Radio label="B" :disabled="disabled">B:{{optionb}}</Radio>
        <Radio label="C" :disabled="disabled">C:{{optionc}}</Radio>
        <Radio label="D" :disabled="disabled">D:{{optiond}}</Radio>
      </RadioGroup >
       <RadioGroup v-model="resAns" v-if="disabled==false">
        <Radio label="A" :disabled="disabled">A:{{optiona}}</Radio>
        <Radio label="B" :disabled="disabled">B:{{optionb}}</Radio>
        <Radio label="C" :disabled="disabled">C:{{optionc}}</Radio>
        <Radio label="D" :disabled="disabled">D:{{optiond}}</Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    optiona: {
      type: String,
      default: ''
    },
    optionb: {
      type: String,
      default: ''
    },
    optionc: {
      type: String,
      default: ''
    },
    optiond: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    },
    disabled:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      resAns:''
    }
  },
  watch: {
    resAns(newValue, oldValue) {
      this.$emit("setAns", newValue);
    }
  },
};
</script>

<style scoped>
</style>