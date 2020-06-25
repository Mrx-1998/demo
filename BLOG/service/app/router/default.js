module.exports = app =>{
  const {router,controller} = app
  router.get('/default/getArticleTitle', controller.default.main.getArticleTitle)
  router.get('/default/getArticleById/:id', controller.default.main.getArticleById)
  router.get('/default/getArticleByTypeId/:id', controller.default.main.getArticleByTypeId)
  router.get('/default/getAbout', controller.default.main.getAbout)
}