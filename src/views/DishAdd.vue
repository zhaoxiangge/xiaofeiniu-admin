<template>
  <div class="xfn-dish">
    <h1>添加菜品</h1>
    <el-form label-width="100px">
      <el-form-item label="菜品图片：">
        <el-upload class="xfn-uploader" :action="uploadAction" :on-success="doUploadSuccess" name="dishImg" :show-file-list="false":before-upload="doUploadUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="主标题:">
        <el-input v-model='formData.title' placeholder="请输入菜品主题"></el-input>
      </el-form-item>
      <el-form-item label="所属类别:">
          <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uploadAction:this.$store.state.globalSettings.apiUrl + '/admin/dish/image',//可处理文件上传的api
      imageUrl:'',//要显示的预览图
      formData:{
        title:'',
        imgUrl:'',    //菜品图片在服务器上的随机文件名
        price:'',
        detail:'',
        categoryId:''

      },
      radio7: '1'
    }
  },
  methods: {
    doUploadSuccess(res,file){
      //文件上传成功后客户端得到响应消息后的处理函数
      //res：服务器端返回的响应消息
      //file:从INPUT[type=file]中读取的第一个上传的文件对象
      console.log(res);
      this.formData.imgUrl = res.fileName;
      this.imageUrl = URL.createObjectURL(file.raw);
      //把上传的文件编码为DataURL字符串
    },
    doUploadUpload(file){
       const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }
  },
}
</script>
<style lang="scss">
  .xfn-uploader{
    .el-upload{
      border:1px dotted #aaa;
      border-radius:3px;
      cursor:pointer;
      width:250px;
      height:177px;
      overflow:hidden;
      &:hover{
        border-color:#409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 100%;
        height: 178px;
        display: block;
      }
      img{
        max-width:100%;
      }
        }
  }
</style>