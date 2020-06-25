let ipUrl = 'http://106.55.40.232:7001/default/' 
// let ipUrl = 'http://106.55.40.232:7001/admin/' 

let servicePath = {
  getArticleTitle: ipUrl + 'getArticleTitle',
  getArticleById: ipUrl + 'getArticleById/',
  getArticleByTypeId: ipUrl + 'getArticleByTypeId/',
  getAbout: ipUrl + 'getAbout'
}

export default servicePath;