const express = require('express');
const { ExpressValidator } = require('express-validator');
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const router = express.Router();

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first letter at least 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long'),
],
userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('password must be 6 character long'),
],userController.loginUser)


module.exports = router;