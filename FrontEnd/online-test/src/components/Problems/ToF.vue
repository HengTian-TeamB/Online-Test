<template>
  <div>
    <RadioGroup v-model="answer">
      <Radio label="true" disabled>True</Radio>
      <Radio label="false" disabled>False</Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  props: ["answer"]
};
</script>

<style scoped>
</style>