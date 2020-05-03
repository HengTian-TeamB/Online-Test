<template>
  <div class="common">
    <span v-show="false">{{comInfo}}</span>
    难度：
    <Rate v-model="difflevel" :count="3" />
    <div class="labelid">
      标签：
      <RadioGroup v-model="tagCho">
        <Radio v-for="tag in tagList" :label=tag.labelname>
          <span>{{tag.labelname}}</span>
        </Radio>
      </RadioGroup>
    </div>
    <Input v-model="content" type="textarea" placeholder="请输入题干" />
    上传图像：
    <div class="demo-upload-list">
      <template v-if="uploadFileUrl">
        <img :src="uploadFileUrl">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(uploadFile.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="uploadFile.showProgress" :percent="uploadFile.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload ref="upload" :format="['jpg','jpeg','png']" :on-format-error="handleFormatError"
      :before-upload="handleBeforeUpload" type="drag" action="void(0)" style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="md-images" size="20" />
      </div>
    </Upload>
    <Modal :title=imgName v-model="visible">
      <img :src="uploadFileUrl" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagCho: "",
      difflevel: 0,
      content: "",
      tagList: [
        {
          labelid: 1,
          labelname: "数学"
        },
        {
          labelid: 2,
          labelname: "公务员考试"
        },
        {
          labelid: 4,
          labelname: "科学"
        }
      ],
      imgName: "",
      visible: false,
      uploadFile: "",
      uploadFileUrl: ""
    };
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      this.uploadFileUrl = "";
      this.uploadFile = "";
    },
    handleFormatError(file) {
      this.uploadFileUrl = "";
      this.uploadFile = "";
      this.$Notice.warning({
        title: "文件格式不正确",
        desc: file.name + "的文件格式" + "错误，请上传png、jpg格式文件."
      });
    },
    handleBeforeUpload(file) {
      this.uploadFile = file;
      // 本地显示 获取url
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadFileUrl = reader.result;
      };
      // 返回false 不在这里上传
      return true;
    }
  },
  computed: {
    comInfo() {
      let comInfo = {
        labelName: this.tagCho,
        difflevel: this.difflevel,
        content: this.content,
        uploadFile: this.uploadFile
      };
      this.$emit("setComInfo", comInfo);
      return comInfo;
    }
  },
  mounted() {
    this.uploadFile = "";
  }
};
</script>

<style scoped>
.common {
  /* height: 52px; */
}
.selector {
  width: 120px;
  /* position: absolute;
  float: left;
  left: 40px; */
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>