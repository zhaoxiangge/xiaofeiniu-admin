<template>
  <div class="login">
    <el-card class="xfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="100px">
          <el-form-item label="管理员名:">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:">
            <el-input v-model="formData.apwd" placeholder="请输入登录密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
  </el-card>
  {{$store.state.globalSettings}}
  </div>
</template>
<script>
export default {//普通组件的模型对象是函数
   data(){
     return {//表单中用户输入的两个数据
       formData:{
         aname:"admin",
         apwd:"123456"
       }
     }
   },
   methods: {
      doLogin(){//执行登录
        var url = this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
        //console.log(url)
        this.$axios.get(url).then((res)=>{
          if(res.data.code==200){//登录成功
          //把用户名存储到Vuex仓库
          this.$store.commit('setAdminName',this.formData.aname);
          //执行视图跳转
            this.$router.push('/main')
          }else{//登录失败
            this.$alert('用户名或密码有误！','登录失败',{type:'error'}).then(()=>{}).catch(()=>{})
          }
        }).catch((err)=>{
          console.log(err)
        })
     },
     doCancel(){
       this.formData.aname="";
       this.formData.apwd=""
     }
   }
}
</script>
<style lang="scss">
  .xfn-login-card{
    width:450px;
    margin:150px auto;
    .el-card__header{
      text-align:center;
      font-size:1.2em;
    }
  }
</style>
