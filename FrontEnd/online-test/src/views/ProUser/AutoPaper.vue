<template>
  <div class="autoPaper">
    <div v-show="false">{{tp}}</div>
    <div>
      <span class="label">试卷名称:</span>
      <Input v-model="form.name" placeholder="请输入试卷名" style="width: 400px" />
    </div>
    <div>
      <span class="label">考试日期:</span>
      <DatePicker v-model="form.examDate" type="date" placeholder="选择日期" @on-change="formatDate" style="width: 200px"></DatePicker>
    </div>
    <div>
      <span class="label">考试时间：</span>
      <TimePicker v-model="form.examTime" type="time" placeholder="选择时间" style="width: 200px"></TimePicker>
    </div>
    <div>
      <span class="label">考试时长:</span>
      <InputNumber :max="200" :min="1" v-model="form.duration" style="width:55px"></InputNumber>
      <span class="label">分钟</span>
    </div>
    <div>
      <span class="label">卷面总分:</span>
      <InputNumber :max="200" :min="1" v-model="form.totalPoints" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <div>
      <span class="label">心灵鸡汤:</span>
      <Input v-model="form.soup" placeholder="如果没有可不写" style="width: 400px" />
    </div>
    <div>
      <span class="label">备注:</span>
      <Input v-model="form.note" placeholder="如果没有可不写" style="width: 400px" />
    </div>
    <div>
      <span class="label">单选题:</span>
      <InputNumber :max="100" :min="0" v-model="form.danxNum" style="width:55px"></InputNumber>
      <span class="label">题</span>
      <span class="label">分值:</span>
      <InputNumber :max="100" :min="1" v-model="form.danxPoint" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <div>
      <span class="label">多选题:</span>
      <InputNumber :max="100" :min="0" v-model="form.duoxNum" style="width:55px"></InputNumber>
      <span class="label">题</span>
      <span class="label">分值:</span>
      <InputNumber :max="100" :min="1" v-model="form.duoxPoint" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <div>
      <span class="label">判断题:</span>
      <InputNumber :max="100" :min="0" v-model="form.pdNum" style="width:55px"></InputNumber>
      <span class="label">题</span>
      <span class="label">分值:</span>
      <InputNumber :max="100" :min="1" v-model="form.pdPoint" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <div>
      <span class="label">填空题:</span>
      <InputNumber :max="100" :min="0" v-model="form.tkNum" style="width:55px"></InputNumber>
      <span class="label">题</span>
      <span class="label">分值:</span>
      <InputNumber :max="100" :min="1" v-model="form.tkPoint" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <div>
      <span class="label">主观题:</span>
      <InputNumber :max="100" :min="0" v-model="form.zgNum" style="width:55px"></InputNumber>
      <span class="label">题</span>
      <span class="label">分值:</span>
      <InputNumber :max="100" :min="1" v-model="form.zgPoint" style="width:55px"></InputNumber>
      <span class="label">分</span>
    </div>
    <Button @click="autoPaper" id="generation">生成试卷</Button>
  </div>

</template>

<script>
import { _autoPaper } from "@/api/problem";

export default {
  data() {
    return {
      form: {
        name: "",
        note: "",
        examDate: "",
        examTime: "",
        duration: 90,
        totalPoints: this.tp,
        soup: "",
        danxNum: 0,
        duoxNum: 0,
        pdNum: 0,
        tkNum: 0,
        zgNum: 0,
        danxPoint: 0,
        duoxPoint: 0,
        pdPoint: 0,
        tkPoint: 0,
        zgPoint: 0
      },
      msg: ""
    };
  },
  methods: {
    // 更改日期之后格式化日期符合后端标注
    formatDate(format,current) {
      this.form.examDate = format
    },
    autoPaper() {
      if (this.form.totalPoints != 100) {
        this.$Notice.warning({
          title: "总分",
          desc: "总分未达到100分"
        });
      } else {
        _autoPaper(this.form).then(res => {
          this.msg = res.msg;
          if (res.status === 0) {
            this.$Notice.success({
              title: "组卷信息",
              desc: this.msg
            });
          } else {
            this.$Notice.error({
              title: "组卷信息",
              desc: this.msg
            });
          }
        });
      }
    }
  },
  computed: {
    // 实时改变总分
    tp() {
      let _tp =
        this.form.danxNum * this.form.danxPoint +
        this.form.duoxNum * this.form.duoxPoint +
        this.form.pdNum * this.form.pdPoint +
        this.form.tkNum * this.form.tkPoint +
        this.form.zgNum * this.form.zgPoint;
      this.form.totalPoints = _tp;
      return _tp;
    }
  }
};
</script>

<style scoped>
.autoPaper {
  width: 90%;
  border: 1px solid papayawhip;
  padding: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -53%);
}
.autoPaper div {
  margin: 5px auto;
}
.label {
  font-size: 18px;
  display: inline-block;
  width: 100px;
  height: 32px;
  margin: 1px 5px;
}
.pro {
  border-top: solid 5px rgba(222, 238, 241, 0.8);
  width: 100%;
  height: 330px;
  margin-top: 3px;
  margin-bottom: 5px;
  /* background-color: #fff; */
}
#generation {
  position: absolute;
  margin-top: 10px;
  width: 10%;
  left: 50%;
  transform: translateX(-50%);
}
</style>