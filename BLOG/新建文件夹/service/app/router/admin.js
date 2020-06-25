module.exports = app =>{
  const {router,controller} = app
  var adminauth = app.middleware.adminauth()
  router.post('/admin/toLogin',controller.admin.main.toLogin)
  router.get('/admin/getArticleType', adminauth, controller.admin.main.getArticleType)
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle)
  router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList)
  router.delete('/admin/delArticle/:id', adminauth, controller.admin.main.delArticle)
  router.get('/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById)
  router.patch('/admin/updateArticle', adminauth, controller.admin.main.updateArticle)

  router.get('/admin/getType', adminauth, controller.admin.main.getType)
  router.post('/admin/addTypeName', adminauth, controller.admin.main.addTypeName)
  
  router.patch('/admin/addAbout', adminauth, controller.admin.main.addAbout)
}