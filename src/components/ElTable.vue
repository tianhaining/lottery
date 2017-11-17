<template lang="html">
  <div class="">
    <el-table empty-text="拼命加载中" :data="tableData" border>
      <el-table-column prop="id" label="ID" align="center"></el-table-column>
      <el-table-column prop="name" label="文件名" align="center"></el-table-column>
      <el-table-column label="操作"  align="center">
        <template slot-scope="scope">
          <el-button @click="viewResult(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="totalNum">
    </el-pagination>

    <el-dialog
      title="查看"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <div class="">
          <p>{{diaLogInfo.id}}</p>
          <p>{{diaLogInfo.name}}</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">返回</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        currentPage: 1,
        totalNum: 0,
        tableData: [],
        dialogVisible: false,
        diaLogInfo: {}
    }
  },
  methods: {
      getTabelData(){
        axios.post('/getTableData', {
          currentPage: this.currentPage
        })
        .then(response=>{
          this.tableData = response.data.tableData;
          this.totalNum = response.data.total;
        })
        .catch((errot)=>{
          console.log('获取表格数据出错', error);
        })
      },
      viewResult(row){
        this.dialogVisible = true;
        axios.post('/getTabelDataById', {
          id: row.id
        })
        .then(response=>{
          this.diaLogInfo = response.data;
        })
        .catch(error=>{
          console.log('根据ID查看出错', error);
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getTabelData();
      },
      handleClose(done){
        this.$confirm('确认关闭?')
        .then(_=>{
          done();
        })
        .catch(_=>{})
      }
  },
  created(){
    this.getTabelData();
  }
}
</script>

<style lang="less">
.el-pagination {
  float: right;
}
.el-dialog{
  &__header {
    text-align: left;
  }
  &__body {
    border-top: 1px solid #878d99;
  }
}
</style>
