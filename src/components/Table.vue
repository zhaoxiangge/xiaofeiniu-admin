<template>
  <div class="xfn-table-info">
    <el-card shadow='hover'>
        <div class='xfn-table'>
            <el-button type='success' plainplain size="mini">详情</el-button>
            <el-button type='danger' plain size="mini">修改</el-button>
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
    props:['data']
}
</script>
