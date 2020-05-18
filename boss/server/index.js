const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes')
const { port, dbUrl } = require('./config/keys')

mongoose.connect(dbUrl,{ useUnifiedTopology: true, useNewUrlParser: true }, ()=>console.log('数据库连接成功'))
mongoose.connection.on('error', console.error) // .on('connected', function () { console.log('数据库连接成功') })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))