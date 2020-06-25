let ipUrl = 'http://127.0.0.1:7001/admin/' 

let servicePath = {
  toLogin: ipUrl + 'toLogin', // 登录
  getArticleType: ipUrl + 'getArticleType', // 获取类别
  addArticle: ipUrl + 'addArticle',
  getArticleList:  ipUrl + 'getArticleList', // 获取文章列表
  delArticle: ipUrl + 'delArticle/', // 删除文章
  getArticleById: ipUrl + 'getArticleById/',
  updateArticle: ipUrl + 'updateArticle', // 修改文章
  getType: ipUrl + 'getType',
  addTypeName: ipUrl + 'addTypeName', 
  addAbout: ipUrl + 'addAbout' 
}

export default servicePath;