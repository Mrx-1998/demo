const router = require('koa-router')({prefix: '/api'})
const { create, login } = require('../controllers/user')

router.post('/create', create)
router.post('/login', login)

module.exports = router.routes()