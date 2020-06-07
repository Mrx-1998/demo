'use strict'

const Contoller = require('egg').Controller

class MainController extends Contoller{

  async toLogin() {
    let username = this.ctx.request.body.username
    let password = this.ctx.request.body.password
    // const sql = " SELECT username FROM admin_user WHERE username = '"+username+
    // "' AND password = '"+password+"'"
    // const res = await this.app.mysql.query(sql)
    // await mysql('admin_user').where({
    //   username: username,
    //   password: password}
    //   ).select()
    const res = await this.app.mysql.select('admin_user', {
      where: {username, password}
    })
    console.log(res, 'res')
    if(res.length > 0){
      let openId  = new Date().getTime()
      this.ctx.session.openId = { 'openId': openId }
      this.ctx.body = { 'data': '登录成功', 'openId': openId }
    }else {
      this.ctx.body = { 'data': '登录失败' }
    }
  }
  // 获取文章type
  async getArticleType() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = { data: resType }
  }

  async addArticle() {
    console.log(this.ctx.request.body);
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article',tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId

    this.ctx.body={
        isScuccess:insertSuccess,
        insertId:insertId
    }
  }
  // 获取文章列表
  async getArticleList() {
    // const result = await this.app.mysql.select('article')
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    "FROM_UNIXTIME(article.add_time,'%Y-%m-%d' ) as addTime,"+
    'article.view_count as view_count ,' +
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'ORDER BY article.id DESC ' // 根据文章id倒叙
    const resList = await this.app.mysql.query(sql)
    this.ctx.body = { list: resList }
  }

  async delArticle() {
    let id = this.ctx.params.id
    const res = await this.app.mysql.delete('article',{'id':id})
    if(res.affectedRows === 1){
      this.ctx.body={data: res}
    }else{
      this.ctx.body={data: '删除失败'}
    }
  }

  async getArticleById() {
    let id = this.ctx.params.id
    // const result = await this.app.mysql.select('article',{'id': id})
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.content as article_content,'+
    "FROM_UNIXTIME(article.add_time,'%Y-%m-%d' ) as addTime,"+
    'article.view_count as view_count ,'+
    'type.typeName as typeName ,'+
    'type.id as typeId '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'WHERE article.id='+id
    const result = await this.app.mysql.query(sql)
    this.ctx.body={data:result}
  }

  async updateArticle(){
    let tmpArticle= this.ctx.request.body
    const result = await this.app.mysql.update('article', tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    this.ctx.body={
        isScuccess:updateSuccess
    }
  }  

  async getType() {
    const result = await this.app.mysql.select('type')
    console.log(result);
    this.ctx.body = {data: result}
  }

  async addTypeName () {
    let tmp = this.ctx.request.body
    const res = await this.app.mysql.select('type', {where: {typeName: tmp.typeName}})
    if(!res.length == 0){
      this.ctx.body = {data: '已存在该类型'}
    }else{
      const result = await this.app.mysql.insert('type',tmp)
      const insertSuccess = result.affectedRows === 1
      // const insertId = result.insertId
      if(insertSuccess){
        this.ctx.body = {data: '添加成功'}
      }else{
        this.ctx.body = {data: '添加失败'}
      }
    }  
  }
}

module.exports = MainController