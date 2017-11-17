<template lang="html">
  <div class="toList">
    <el-row type="flex" class="row-bg" justify="center" :gutter="40">
      <el-col :span="11" class="toList-left">
        <el-row :gutter="20">
          <el-col :span="20"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
          <el-col :span="4"><el-button @click="addList" type="primary">确定</el-button></el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="toList-list" @click="deleteDiv">
              <div class="" v-for="(item, index) in toList" :key="index">
                <span>*</span>
                <span>{{item}}</span>
                <span>
                  <i class="el-icon-close" :id="index"></i>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button @click="commitList" type="primary">提交</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="11" class="toList-right">
        <p class="toList-right-p">{{returnResult}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        input: '',
        toList: [],
        returnResult: '返回结果',
    }
  },
  methods: {
    addList(){
      this.toList.push(this.input);
    },
    deleteDiv(ev){
      var ev = ev || window.event;
      var target = ev.target || ev.srcElement;
      if (target.nodeName.toLocaleLowerCase() == 'i') {
        this.toList.splice(target.id, 1);
      }
    },
    commitList(){
      axios.post('/commitList', {
        listData: this.toList
      })
      .then(res=>{
        this.returnResult = res.data.message;
      })
      .catch(error=>{
        console.log('提交tolist出错', error);
      })
    }
  }
}
</script>

<style lang="less">
.to-list-common{
  border: 1px solid #e6ebf5;
  padding: .5rem;
  min-height: 10rem;
}
.toList {
  &-left {
    .to-list-common;
    margin-right: 5rem;
  }
  &-right {
    .to-list-common;
    &-p {
      font-size: .96rem;
      color: #878d99;
    }
  }
  &-list {
    font-size: 1rem;
    color: #878d99;
    text-align: left;
    padding: .5rem;
  }
}
.el-icon-close {
  cursor: pointer;
}
</style>
