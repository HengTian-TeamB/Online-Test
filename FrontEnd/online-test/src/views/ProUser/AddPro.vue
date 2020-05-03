<template>
  <div>
    <add-common v-on:setComInfo="getcomInfo"></add-common>
    <Tabs value="1" @on-click="tabChange">
      <TabPane label="单选题" name="1">
        <div class="option">
          选项：
          <br>
          选项A：<Input class="input_option" v-model="optiona" placeholder="请输入A选项" />
          <br>
          选项B：<Input class="input_option" v-model="optionb" placeholder="请输入B选项" />
          <br>
          选项C：<Input class="input_option" v-model="optionc" placeholder="请输入C选项" />
          <br>
          选项D：<Input class="input_option" v-model="optiond" placeholder="请输入D选项" />
          <br>
        </div>
        <span>答案：</span>
        <RadioGroup v-model="answer">
          <Radio label="A">
            <span>A</span>
          </Radio>
          <Radio label="B">
            <span>B</span>
          </Radio>
          <Radio label="C">
            <span>C</span>
          </Radio>
          <Radio label="D">
            <span>D</span>
          </Radio>
        </RadioGroup>
      </TabPane>
      <TabPane label="多选题" name="2">
        <div class="option">
          选项：
          <br>
          选项A：<Input class="input_option" v-model="optiona" placeholder="请输入A选项" />
          <br>
          选项B：<Input class="input_option" v-model="optionb" placeholder="请输入B选项" />
          <br>
          选项C：<Input class="input_option" v-model="optionc" placeholder="请输入C选项" />
          <br>
          选项D：<Input class="input_option" v-model="optiond" placeholder="请输入D选项" />
          <br>
        </div>
        <span>答案：</span>
        <CheckboxGroup v-model="answerMul">
          <Checkbox label="A">A</Checkbox>
          <Checkbox label="B">B</Checkbox>
          <Checkbox label="C">C</Checkbox>
          <Checkbox label="D">D</Checkbox>
        </CheckboxGroup>
      </TabPane>
      <TabPane label="判断题" name="3">
        <span>答案：</span>
        <RadioGroup v-model="answer">
          <Radio label="T">
            <span>T</span>
          </Radio>
          <Radio label="F">
            <span>F</span>
          </Radio>
        </RadioGroup>
      </TabPane>
      <TabPane label="主观题" name="4">
        <Input v-model="answer" type="textarea" placeholder="请输入主观题答案" />
      </TabPane>
      <TabPane label="填空题" name="5">
        <Input v-model="answer" type="textarea" placeholder="请输入填空题答案" />
      </TabPane>
    </Tabs>
    <Button id='proSub' type="success" long @click="addPro">SUBMIT</Button>
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
import { _addPro } from "@/api/problem.js";
export default {
  data() {
    return {
      comInfo: {}, // 包括标签、难度、题干
      proType: "1", // 题目种类
      optiona: "",
      optionb: "",
      optionc: "",
      optiond: "",
      answer: "",
      answerMul: []
    };
  },
  methods: {
    getcomInfo(info) {
      this.comInfo = info;
    },
    // 清空题目数据
    clearPo() {
      this.optiona = "";
      this.optionb = "";
      this.optionc = "";
      this.optiond = "";
      this.answer = "";
      this.answerMul = [];
    },
    // 点击tab时 清空题目数据
    tabChange(name) {
      this.clearPo();
      this.proType = name;
    },
    addPro() {
      //表单校验
      //-----------
      //-----------
      // if(this.)
      // 多选、非多选答案判断
      let _answer = "";
      if (this.answerMul.length != 0) {
        _answer = this.answerMul.join(";");
      } else {
        _answer = this.answer;
      }
      const data = new FormData();
      data.append("labelname", this.comInfo.labelName);
      data.append("content", this.comInfo.content);
      data.append("difflevel", this.comInfo.difflevel);
      if (this.optiona) {
        data.append("optiona", this.optiona);
        data.append("optionb", this.optionb);
        data.append("optionc", this.optionc);
        data.append("optiond", this.optiond);
      }
      data.append("typeid", this.proType);
      data.append("answer", _answer);
      if (this.comInfo.uploadFile) {
        data.append("img", this.comInfo.uploadFile);
      }
      // for(let pair of data.entries()){
      //   console.log(pair[0]+ ', '+ pair[1]); 
      // }
      _addPro(data).then(res => {
        if(res.status === 0){
          this.$Message.success(res.msg);
        } else {
          this.$Message.error(res.msg);
        }
        console.log(res);
      });
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
.input_option {
  width: 100px;
  display: inline-block;
  margin-bottom: 2px;
}
#proSub {
  margin-top: 10px;
}
</style>