function authMiddleware(req, res, next) {
  console.log(req.session.userId)

  if (req.session.userId) {
    next()
  } else {
    res.status(403).send({
      message: 'Not authenticated',
    })
  }
}

module.exports = authMiddleware
