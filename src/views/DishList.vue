<template>
  <div class="xfn-dish-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-tabs type="border-card">
      <el-tab-pane  v-for="(c,i) in dishList">
        <span slot="label">
          <el-badge :value="c.dishList.length">{{c.cname}}</el-badge>
        </span>
        <el-row>
          <el-col v-for="(d,j) in c.dishList" :xs="12" :md="6" :lg="4" :xl="2">
            {{d.title}}
            <img :src="require('../assets/img/dish/'+d.imgUrl)" alt="" style="max-width:100%;">
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Dish from '../components/Dish'
export default {
  data(){
      return{
        dishList:[]//{cid: 1, cname:'肉类', dishList:[{},{},...]}
      }
    },
   mounted(){
      var url=this.$store.state.globalSettings.apiUrl+"/admin/dish";
      this.$axios.get(url).then((result)=>{
        console.log(result.data);
        this.dishList=result.data;
      })
    },
    components:{
    'xfn-dish':Dish
  },
}
</script>
