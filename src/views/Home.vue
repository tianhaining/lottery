<template lang="html">
  <div class="home">
    <div>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18"><h3 class="home-header">恭喜发财</h3></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less">
.home {
  &-header {
    background-color: black;
    color: #409EFF;
    padding: 1rem 0;
    margin: 0;
  }
}
</style>
