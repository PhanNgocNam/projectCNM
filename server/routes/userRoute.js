const { register, login, getAllUsers } = require('../controllers/userController')

const router = require('express').Router()


router.get('/users', getAllUsers)
router.post("/register", register)
router.post("/login", login)

module.exports = router