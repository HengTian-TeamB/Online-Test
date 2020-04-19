<template>
  <div>
      <CheckboxGroup v-model="answer">
        <Checkbox label="A" disabled>A:{{optiona}}</Checkbox>
        <Checkbox label="B" disabled>B:{{optionb}}</Checkbox>
        <Checkbox label="C" disabled>C:{{optionc}}</Checkbox>
        <Checkbox label="D" disabled>D:{{optiond}}</Checkbox>
      </CheckboxGroup>
      
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