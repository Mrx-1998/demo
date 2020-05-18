const express = require('express')
const router = express.Router()
// 引入 md5 加密函数库 
const md5 = require('blueimp-md5')
const UserModel = require('../model/user').UserModel
const { register } = require('../constrollers/user')

/*
 *注册
 *POST
*/ 
router.post('/register',  register)

module.exports = router