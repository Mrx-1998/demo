const Koa = require('koa')
const routes = require('./routes/user')
const mongoose = require('mongoose')
const { dbUrl } = require('./config/keys')
const koaBody = require('koa-body')
const cors = require('koa-cors')

const app = new Koa()

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => { console.log('数据库连接成功') })
.catch((err) => { console.log('数据库连接失败', err) })

app.use(cors())
app.use(koaBody())
app.use(routes)

app.listen(8000, () => {
    console.log('8000 port is running');
})