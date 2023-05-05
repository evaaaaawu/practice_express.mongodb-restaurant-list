// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const bodyParser = require('body-parser') // 引用 body-parser
const methodOverride = require('method-override')

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const restaurantList = require('./restaurant.json')
const routes = require('./routes') // 引用路由器
const usePassport = require('./config/passport') // 載入設定檔，要寫在 express-session 以後
require('./config/mongoose')

const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(session({
  secret: 'ThisIsMySecret', //session 用來驗證 session id 的字串
  resave: false, //當設定為 true 時，會在每一次與使用者互動後，強制把 session 更新到 session store 裡。
  saveUninitialized: true //強制將未初始化的 session 存回 session store。未初始化表示這個 session 是新的而且沒有被修改過，例如未登入的使用者的 session。
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
usePassport(app) // 呼叫 Passport 函式並傳入 app，這條要寫在路由之前
app.use(routes) // 將 request 導入路由器

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})