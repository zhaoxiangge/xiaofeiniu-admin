<template>
  <div class="xfz-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item to="/category/list">菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type="primary" @click="addCategory">添加新的菜品类别</el-button>
      <!--
    <el-table :data="myData" stripe border>
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150px">
      <template slot-scope="{row,$index}">
        <el-button type="success" size="small" plain @click="doUpdate(row.cid,$index)">修改</el-button>
        <el-button type="danger" size="small" plain @click="doDelete(row.cid,$index)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    -->
    <el-table :data="myData">
      <el-table-column label="编号" prop="cid"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        myData:[{cid:1},{cid:2}],
        categoryList:[]
      }
    },
    methods:{
      doDelete(cid,index){

           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.categoryList.splice(index,1);
          var url=this.$store.state.globalSettings.apiUrl+`/admin/category/${cid}`
          this.$axios.delete(url).then((result)=>{
            if(result.data.code==200){//数据库已删除成功
              this.categoryList.splice(i,1);//模型数据中删除
              this.$message.success('菜品类别删除成功！')
            }else{
              this.$message.error('类别删除成功！')
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

        
      },
      doUpdate(cid,index){
        console.log(cid);
      },
      addCategory(){
        this.$prompt('请输入新的菜品类别名：','提示',{type:'info'}).then(({value})=>{
          //获得用户的输入，调用数据api添加到数据库
          var url = this.$store.state.globalSettings.apiUrl+'/admin/category';
          this.$axios.post(url,{cname:value}).then((res)=>{
            if(res.data.code==200){
              this.$message.success('新数据添加成功！');
              this.categoryList.push({cid:res.data.cid,cname:value})
            }else{
              this.$message.error('新的类别添加出错：'+res.data.msg)
            }
            
          }).catch((err)=>{
            console.log(err)
          })
        }).catch((err)=>{
          console.log(err)
        })
      }
    },
    mounted(){
      var url=this.$store.state.globalSettings.apiUrl+"/admin/category";
      this.$axios.get(url).then((result)=>{
        console.log(result.data);
        this.categoryList=result.data;
      })
    }
  }
</script>
<style lang="scss">
  
</style>