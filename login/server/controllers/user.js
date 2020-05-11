const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/users')
const { envcrypt, validatorReq } = require('../config/tools')
const { secret } = require('../config/keys')


class UserCtl  {
    async create(ctx) {
        const { errors, isValid } = validatorReq(ctx.request.body)
        if(!isValid){
           return ctx.body = errors
        }
        // 查询数据库是否存在该邮箱
        const { name, password, email } = ctx.request.body
        const findResult = await User.findOne({email})          
        if(findResult){
            return ctx.body = {status: 409, message: '该邮箱已经被注册'}
        }
        await new User({
            name,
            password: envcrypt(password),
            email
        }).save()
        ctx.body = {status: 201, message: '注册成功'}
    }
    async login(ctx) {
        const { errors, isValid } = validatorReq(ctx.request.body)
        if(!isValid){
            return ctx.body = errors
         }
        const { password, email } = ctx.request.body
        // 查询用户
        const findResult = await User.find({email})
        console.log(findResult.length);

        // 判断
        if(findResult.length <= 0){
            return ctx.body = {status: 400, message: '用户不存在'}
        }
        // 用户存在
        console.log(findResult[0].password);
        
        var result = await bcrypt.compareSync(password, findResult[0].password)
        if(result){
            const { _id, name, email } = findResult[0]
            // 返回token
            const playload = { 
                _id,
                email,
                name
            }
            const token = jwt.sign(playload, secret, { expiresIn: '1d' })
            return ctx.body = {status: 200, message: '登录成功',data:{token, name, email}}
        }
        ctx.body = {status: 400, message: '密码错误'}
    }
}

module.exports = new UserCtl()