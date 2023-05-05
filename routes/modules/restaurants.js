const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post("/", (req, res) => {
  const userId = req.user._id
  return Restaurant.create({...req.body, userId}) //(參考別人的)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

//詳細頁面
router.get('/:id', (req, res) => {  
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})

//編輯頁面
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(err => console.log(err))
})
  
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const data = req.body
  return Restaurant.findOneAndUpdate({ _id, userId}, data) //(參考別人的)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

//刪除頁面
router.delete("/:id", (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOneAndDelete({ _id, userId })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err))
})

module.exports = router