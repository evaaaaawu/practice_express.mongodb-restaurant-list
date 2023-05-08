// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Restaurant model
const Restaurant = require('../../models/restaurant')

// 定義首頁路由
router.get('/', (req, res) => {
  const keyword = (req.query.keyword) ? req.query.keyword.trim() : ''
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => {
      const searchResult = restaurants.filter(restaurant => 
        // restaurant.name.includes(keyword)
        restaurant.name.toLowerCase().includes(keyword.toLowerCase())
      )

      if (!keyword) {
        res.render('index', {restaurants})
      } else {
        res.render('index', {restaurants: searchResult, keyword: keyword})
      }
    })
    .catch(err => console.log(err))
})

// 匯出路由模組
module.exports = router