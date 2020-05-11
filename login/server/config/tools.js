const bcrypt = require('bcryptjs')
const validator = require('validator')

const tools = {
    // 加密
    envcrypt(password){
        var salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(password, salt)
        return hash
    },
    // 
    isEmpty(value){
    return (
        value == undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
    },
    validatorReq(data) {
        const { email } = data
        let errors = {}
    
        if (!validator.isEmail(email)) {
            errors.status = 400
            errors.message = '邮箱格式错误'
        }
        return {
            errors: errors,
            isValid: tools.isEmpty(errors)
        }
    }
}

module.exports = tools