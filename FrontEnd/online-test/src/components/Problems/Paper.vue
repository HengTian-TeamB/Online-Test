<template>
  <div class="paperContainer">
    <div class="title">
      <h2>{{paperTitle}}</h2>
      <div class="examInfo">
        <span>考试日期：{{proList.examdate}}</span>
        <span>考试时间：{{proList.examtime}}</span>
        <span>考试时长：{{proList.duration}}</span>
      </div>
    </div>
    <div class="tip">
      <ul v-if="isRes==0">
        <li class="proItem" v-for="(pro,index) in proList.paperquestion" :key="index">
          <!-- {{pro}} -->
          <span>第{{index+1}}题</span><br>
          {{pro.content}}
          <pro-single v-if="pro.typeid==1" :optiona=pro.optiona :optionb=pro.optionb :optionc=pro.optionc
            :optiond=pro.optiond :answer=pro.answer>
          </pro-single>
          <pro-mul v-else-if="pro.typeid==2" :optiona=pro.optiona :optionb=pro.optionb :optionc=pro.optionc
            :optiond=pro.optiond :answer=pro.answer|mulAnswer>
          </pro-mul>
          <pro-tof v-else-if="pro.typeid==3" :answer=pro.answer></pro-tof>
          <pro-sub v-else-if="pro.typeid==4" :answer=pro.answer></pro-sub>
          <pro-fill v-else-if="pro.typeid==5" :answer=pro.answer></pro-fill>
          <img :src=pro.img|imgUrl alt="">
        </li>
      </ul>
      <ul v-if="isRes==1">
        <li class="proItem" v-for="(pro,index) in proList.paperquestion" :key="index">
          <!-- {{pro}} -->
          <span>第{{index+1}}题 {{proType[pro.typeid-1]}}</span><br>
          {{pro.content}}
          <pro-single v-if="pro.typeid==1" :optiona=pro.optiona :optionb=pro.optionb :optionc=pro.optionc
            :optiond=pro.optiond :disabled="false" @setAns="getResAns($event,index)">
          </pro-single>
          <pro-mul v-else-if="pro.typeid==2" :optiona=pro.optiona :optionb=pro.optionb :optionc=pro.optionc
            :optiond=pro.optiond :disabled="false" @setAns="getResAns($event,index)">
          </pro-mul>
          <pro-tof v-else-if="pro.typeid==3" :disabled="false" @setAns="getResAns($event,index)"></pro-tof>
          <pro-sub v-else-if="pro.typeid==4" :disabled="false" @setAns="getResAns($event,index)"></pro-sub>
          <pro-fill v-else-if="pro.typeid==5" :disabled="false" @setAns="getResAns($event,index)"></pro-fill>
          <img :src=pro.img|imgUrl alt="">
        </li>
      </ul>
    </div>
    <Button v-if="isRes==1" type="success" long @click="testDone">试卷提交</Button>
    <Modal v-model="isDone" title="是否提交考卷" @on-ok="ok" @on-cancel="cancel">
      <p v-for="item in result">{{item.tipNum}} {{item.ans}}</p>
    </Modal>
    <!-- {{paperInfo}} -->
  </div>
</template>

<script>
import Common from "@/components/Problems/Common";
import Single from "@/components/Problems/Single";
import Fill from "@/components/Problems/Fill";
import Subject from "@/components/Problems/Subject.vue";
import ToF from "@/components/Problems/ToF.vue";
import Multiple from "@/components/Problems/Multiple.vue";
export default {
  props: {
    paperTitle: {
      type: String,
      default: ""
    },
    proList: {
      type: Object,
      default: () => {}
    },
    //是否是考生，考生无答案
    isRes: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      paperInfo: {},
      proType: ["单选题", "多选题", "判断题", "主观题", "填空题"],
      resAns: [],
      isDone: false,
      result: []
      //   pro: {
      //     optiona: "a",
      //     optionb: "b",
      //     optionc: "c",
      //     optiond: "d",
      //     answer: "D"
      //   }
    };
  },
  methods: {
    // 创建考生答案
    getResAns(ans, index) {
      this.resAns[index] = ans;
      console.log(this.resAns);
    },
    // 显示考生答案
    showResAns() {
      let proNum = this.proList.paperquestion.length;
      for(let i=0;i<proNum;i++){
        this.result.push({
          tipNum:'第'+(i+1)+'题',
          ans:'答案：'+this.resAns[i]
        })
      }
      console.log(this.result);
    },
    testDone() {
      this.showResAns();
      this.isDone = true
    },
    ok() {
      this.$Message.info("试卷已提交");
    },
    cancel() {
      this.$Message.info("继续考试");
      this.isDone = false
    }
  },
  created() {
    if (this.isRes == 1) {
      // this.craeteResAns();
    }
  },
  components: {
    "pro-common": Common,
    "pro-single": Single,
    "pro-fill": Fill,
    "pro-sub": Subject,
    "pro-tof": ToF,
    "pro-mul": Multiple
  },
  filters: {
    mulAnswer: function(answer) {
      answer = answer.replace(/\s+|;/g, "");
      return [...answer];
    },
    imgUrl: function(url) {
      if (url) {
        let header = "http://139.224.61.12:8083/images/";
        // let index = url.indexOf("img");
        // let _url = header + url.slice(index);
        let _url = header + url;
        return _url;
      }
    }
  }
};
</script>

<style scoped>
.paperContainer {
  overflow: auto !important;
}
.title {
  /* background-color: blue; */
  height: 8%;
}
h2 {
  width: 200px;
  margin-left: 40%;
}
.examInfo {
  width: 500px;
  height: 20px;
  position: absolute;
  /* margin-left: 170px;
  margin-top: 5px; */
  left: 50%;
  top: 8%;
  transform: translateX(-50%);
}
.examInfo span {
  display: inline-block;
  margin-right: 30px;
}
.tip {
  margin: 2px 6px;
  margin-top: 28px;
  padding: 6px;
  border: 1px dashed gray;
}
.proItem {
  padding: 3px;
  border-bottom: solid 5px rgba(222, 238, 241, 0.8);
  overflow: auto;
  white-space: pre-line;
}
</style>