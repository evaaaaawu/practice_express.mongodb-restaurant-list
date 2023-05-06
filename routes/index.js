// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants) // 加入驗證程序
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home) // 加入驗證程序，並注意router.use('/') 這種定義寬鬆的路由引到清單最下方，避免攔截到其他的路由。

// 匯出路由器
module.exports = router