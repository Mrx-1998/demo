class UserCtl {
    async register(req, res, next) {
        const { username, password } = req.body
        console.log(username)
        if (username === 'admin') { 
            res.send({code: 1, msg: '此用户已存在'}) 
        } else { 
            res.send({code: 0, data: {_id: 'abc', username, password}}) 
        }
    }
}

module.exports = new UserCtl()