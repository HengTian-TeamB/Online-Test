<template>
  <div>
    <Tabs value="1">
      <TabPane label="单选题" name="1">
        <add-common v-on:setComInfo="getcomInfo"></add-common>
        <!-- <pro-common :difflevel=pro.difflevel :labelid=pro.labelid :content=pro.content :disabled="false"></pro-common>
        <pro-single></pro-single> -->
      </TabPane>
      <TabPane label="多选题" name="2">标签二的内容</TabPane>
      <TabPane label="判断题" name="3">标签三的内容</TabPane>
      <TabPane label="主观题" name="4">标签三的内容</TabPane>
      <TabPane label="填空题" name="5">标签三的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
import Common from "@/components/Problems/Common";
import Single from "@/components/Problems/Single";
import Fill from "@/components/Problems/Fill";
import Subject from "@/components/Problems/Subject.vue";
import ToF from "@/components/Problems/ToF.vue";
import Multiple from "@/components/Problems/Multiple.vue";
import AddCom from "@/components/Problems/AddCom.vue";
export default {
  data() {
    return {
      comInfo: []
    };
  },
  methods: {
    getcomInfo(info) {
      console.log(info);
    }
  },
  components: {
    "pro-common": Common,
    "pro-single": Single,
    "pro-fill": Fill,
    "pro-sub": Subject,
    "pro-tof": ToF,
    "pro-mul": Multiple,
    "add-common": AddCom
  }
};
</script>

<style scoped>
</style>