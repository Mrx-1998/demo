let ipUrl = 'http://127.0.0.1:7001/default/' 

let servicePath = {
  getArticleTitle: ipUrl + 'getArticleTitle',
  getArticleById: ipUrl + 'getArticleById/',
  getArticleByTypeId: ipUrl + 'getArticleByTypeId/',
  getAbout: ipUrl + 'getAbout'
}

export default servicePath;