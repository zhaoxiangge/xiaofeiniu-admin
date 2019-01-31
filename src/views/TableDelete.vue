<template>
  <div class="TableDelete">
    <el-breadcrumb>
      <el-breadcrumb-item to='/main'>首页</el-breadcrumb-item>
      <el-breadcrumb-item>桌台管理</el-breadcrumb-item>
      <el-breadcrumb-item>删除桌台</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <br>
    <br>
    <el-form label-width="100px">
      <el-form-item label="ICP备案号:">
          <el-input placeholder="请输入要删除的桌号"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="open2">提交</el-button>
      </el-form-item>
    </el-form>
  </div>  
</template>
<script>
export default {
   methods: {
      open2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
}
</script>
<style lang="scss">
  .TableDelete{
    width:400px;
  }
</style>
