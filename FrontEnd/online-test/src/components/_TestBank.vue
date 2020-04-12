<template>
  <div>
    题库管理
    <CheckboxGroup v-model="proType">
      <span class="label">题型</span>
      <Checkbox label="multiple">
        <span>多选题</span>
      </Checkbox>
      <Checkbox label="single">
        <span>单选题</span>
      </Checkbox>
      <Checkbox label="tof">
        <span>判断题</span>
      </Checkbox>
      <Checkbox label="fill">
        <span>填空题</span>
      </Checkbox>
      <Checkbox label="subjective">
        <span>主观题</span>
      </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="proDiff">
      <span class="label">难度</span>
      <Checkbox label="1">
        <span>一星</span>
      </Checkbox>
      <Checkbox label="2">
        <span>二星</span>
      </Checkbox>
      <Checkbox label="3">
        <span>三星</span>
      </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="proSub">
      <span class="label">题类</span>
      <Checkbox label="1">
        <span>计算机科学</span>
      </Checkbox>
      <Checkbox label="2">
        <span>历史学</span>
      </Checkbox>
      <Checkbox label="3">
        <span>工学</span>
      </Checkbox>
      <Checkbox label="4">
        <span>理学</span>
      </Checkbox>
    </CheckboxGroup>
    <div class="pro">
        123
    </div>
    <Page class="page" :total="100" show-elevator />
  </div>
</template>

<script>
export default {
  data() {
    return {
      proType: [],
      proSub: [],
      proDiff: []
    };
  },
  computed: {
    proQuery() {
      let query = {
        proType: this.proType,
        proSub: this.proSub,
        proDiff: this.proDiff
      };
      console.log(query);
      return query;
    }
  },
  watch: {
    proQuery(newValue, oldValue) {}
  }
};
</script>

<style scoped>
.label {
  font-size: 18px;
  display: inline-block;
  margin: 1px 5px;
}
.pro {
    width: 100%;
    height: 445px;
    margin-top: 3px;
    margin-bottom: 5px;
    background-color: #fff;
}
.page {
  display: block;
  width: 600px;
  /* height: 60px; */
  /* margin-top: 8px */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>