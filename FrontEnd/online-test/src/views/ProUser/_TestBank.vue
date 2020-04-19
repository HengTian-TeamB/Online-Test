<template>
  <div>
    <span v-show="false">{{proQuery}}</span>
    <CheckboxGroup v-model="proType">
      <span class="label">题型</span>
      <Checkbox label="2">
        <span>多选题</span>
      </Checkbox>
      <Checkbox label="1">
        <span>单选题</span>
      </Checkbox>
      <Checkbox label="3">
        <span>判断题</span>
      </Checkbox>
      <Checkbox label="5">
        <span>填空题</span>
      </Checkbox>
      <Checkbox label="4">
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
    <div class="labelBox">
      <span class="label">标签</span>
      <!-- {{labelList}} -->
      <Tag v-for="label in labelList" :key="label.labelid" checkable color="primary" :checked="false"
        @on-change="protag" :name="label.labelid">{{label.labelname}}</Tag>
    </div>
    <div class="pro">
      <ul>
        <li class="proItem" v-for="pro in proList" :key="pro.qid">
          <span>题号：{{pro.qid}}</span>
          <pro-common :difflevel=pro.difflevel :labelname=temLabelList[pro.labelid] :content=pro.content></pro-common>
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
    </div>
    <Page class="page" :total="totalElements" :page-size="pageSize" @on-change="pageChange" show-elevator show-total />
  </div>
</template>

<script>
import { _getProblem, _getAllPro, _getLabel } from "@/api/problem";
import Common from "@/components/Problems/Common";
import Single from "@/components/Problems/Single";
import Fill from "@/components/Problems/Fill";
import Subject from "@/components/Problems/Subject.vue";
import ToF from "@/components/Problems/ToF.vue";
import Multiple from "@/components/Problems/Multiple.vue";

export default {
  data() {
    return {
      proType: [],
      proLabel: [],
      proDiff: [],
      proList: [],
      // proQuery:{},
      pageSize: 3,
      totalElements: 0,
      currentPage: 1,
      labelList: [],
      temLabelList: [],
      conQueFlag: false
    };
  },
  methods: {
    //问题数据初始化
    proInit() {
      let data = {
        pageNumber: this.currentPage,
        pageSize: this.pageSize
      };
      _getAllPro(data).then(res => {
        if (res.status === 0) {
          this.proList = res.data.content;
          this.totalElements = res.data.totalElements;
          // console.log(res.data);
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 问题按条件查找
    proConQue() {
      // 根据条件查找
      let data = {
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        typeid: this.proType,
        difflevel: this.proDiff,
        labelid: this.proLabel
      };
      // console.log("condition query req is:", data);
      _getProblem(data).then(res => {
        if (res.status === 0) {
          // console.log("condition query res is:", res);
          this.proList = res.data.content;
          this.totalElements = res.data.totalElements;
        } else {
          console.log(res.msg);
        }
      });
    },
    labelInit() {
      let param = {};
      _getLabel(param).then(res => {
        if (res.status === 0) {
          this.labelList = res.data;
          // 将对象数组转化为 _list[labelid] = labelname的数组 方便映射
          let _list = [];
          this.labelList.map((value, index) => {
            _list[value.labelid] = value.labelname;
          });
          this.temLabelList = _list;
        } else {
          this.$Message.error(res.msg);
        }
      });
    },
    // 切换标签选中状态时触发
    protag(checked, name) {
      if (checked) {
        this.proLabel.push(name);
      } else {
        let index = this.proLabel.indexOf(name);
        this.proLabel.splice(index, 1);
      }
    },
    // 页数变换
    pageChange(page) {
      this.currentPage = page;
      if (this.conQueFlag) {
        // 条件查找
        this.proConQue();
      } else {
        this.proInit();
      }
    }
  },
  computed: {
    proQuery: function() {
      let query = {
        proType: this.proType,
        proLabel: this.proLabel,
        proDiff: this.proDiff
      };
      if (
        query.proType.length === 0 &&
        query.proLabel.length === 0 &&
        query.proDiff.length === 0
      ) {
        this.conQueFlag = false;
        this.proInit();
      } else {
        this.conQueFlag = true;
        this.proConQue();
      }

      // console.log(query.proType)
      return query;
    }
  },
  created() {
    this.proInit();
    this.labelInit();
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
        let index = url.indexOf("img");
        let _url = header + url.slice(index + 4);
        return _url;
      }
    }
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
  border-top: solid 5px rgba(222, 238, 241, 0.8);
  width: 100%;
  height: 492px;
  margin-top: 3px;
  margin-bottom: 5px;
  /* background-color: #fff; */
}
.proItem {
  padding: 3px;
  border-bottom: solid 5px rgba(222, 238, 241, 0.8);
  height: 160px;
  overflow: auto;
}
.page {
  display: block;
  width: 650px;
  /* height: 60px; */
  /* margin-top: 20px; */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>