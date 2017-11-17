<template lang="html">
  <div class="main">
    <el-row type="flex" class="row-bg main-upload" justify="end">
      <el-col :span="3"><Upload></Upload></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"><ElTable></ElTable></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="24"><ToList></ToList></el-col>
    </el-row>
  </div>
</template>

<script>
import ElTable from '@/components/ElTable'
import ToList from '@/components/ToList'
import Upload from '@/components/Upload'
export default {
  data(){
    return {

    }
  },
  components: {
    ElTable,
    ToList,
    Upload
  }
}
</script>

<style lang="less">
.main {
  &-upload {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
}
</style>
