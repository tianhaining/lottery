//1，获取表格数据:post请求，接口名:/getTableData，发送参数：{currentPage: 1}
export const tableData = {
  total: 100,
  tableData: [{
        id: 10,
        name: 'abc.text'
      }, {
        id: 9,
        name: 'abc.text',
      }, {
        id: 8,
        name: 'abc.text'
      }, {
        id: 7,
        name: 'abc.text'
      },{
        id: 6,
        name: 'abc.text'
      }, {
        id: 5,
        name: 'abc.text',
      }, {
        id: 4,
        name: 'abc.text'
      }, {
        id: 3,
        name: 'abc.text'
      },{
        id: 2,
        name: 'abc.text'
      }, {
        id: 1,
        name: 'abc.text',
      }]
}
//2，根据id查看数据:post请求，接口名:/getTabelDataById，发送参数：{id: 4}
export const data = {
    id: 1,
    name: 'abc.text',
}

//3，提交list:post请求，接口名:/commitList，发送参数：{listData: ['aaa', 'bbb', 'ccc']}
export const data = {
  message: 'aaaa'
}


//4，上传文件:post请求，接口名:/uploadFile，发送参数：{file}
