const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      return res.status(401).json({ message: "You shall not pass" })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "You shall not pass" })
      }
      req.token = decoded
      next()
    })
  }
  catch (err) {
    next(err)

  }
};