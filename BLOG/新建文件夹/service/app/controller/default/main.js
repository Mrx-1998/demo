'use strict'

const Contoller = require('egg').Controller

class MainController extends Contoller{

  async getArticleTitle() {
    let sql = 'SELECT article.id as id ,'+
    'article.title as title ,'+
    'article.introduce as introduce,'+
    "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    'article.view_count as view_count ,'+
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id'
  
    let sql2 = 'SELECT id, typeName, ord_id FROM type'

    const result = await this.app.mysql.query(sql)
    const type = await this.app.mysql.query(sql2)
    this.ctx.body = {result, type}
    this.ctx.body={
      data:result,
      type
    }
  }

  async getArticleById() {
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        'article.content as content,'+
        "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
        'article.view_count as view_count ,'+
        'type.typeName as typeName ,'+
        'type.id as typeId '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id '+
        'WHERE article.id='+id

        const result = await this.app.mysql.query(sql)

        this.ctx.body = {result}
  }
 
  async getArticleByTypeId() {
    let id = this.ctx.params.id
    console.log(id);
    
    let sql = 'SELECT title,' 
    +"FROM_UNIXTIME(article.add_time,'%Y-%m-%d' ) as addTime,"
    + 'id FROM article WHERE type_id = ' + id

    const result = await this.app.mysql.query(sql)

    this.ctx.body = {result}
  }

  async getAbout() {
    const result = await this.app.mysql.select('about')
    console.log(result);
    this.ctx.body = { result }
  }
}

module.exports = MainController