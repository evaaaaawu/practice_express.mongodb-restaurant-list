module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {  //passport.js 提供的函式
      return next()
    }
      req.flash('warning_msg', '請先登入才能使用！')  // 加入這行
      res.redirect('/users/login')
    }
}