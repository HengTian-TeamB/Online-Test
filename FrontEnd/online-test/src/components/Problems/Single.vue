<template>
  <div>
      <RadioGroup v-model="answer">
        <Radio label="A" disabled>A:{{optiona}}</Radio>
        <Radio label="B" disabled>B:{{optionb}}</Radio>
        <Radio label="C" disabled>C:{{optionc}}</Radio>
        <Radio label="D" disabled>D:{{optiond}}</Radio>
      </RadioGroup>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "optiona",
    "optionb",
    "optionc",
    "optiond",
    "answer",
  ]
};
</script>

<style scoped>
</style>