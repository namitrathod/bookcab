const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const driverController = require('../controllers/driver.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('first letter at least 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('password must be 6 character long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('color should be atleast 3 characher long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('plate should be atleast 3 characher long'),
    body('vehicle.type').isLength({ min: 3 }).withMessage('type should be atleast 3 characher long'),
],
    driverController.registerDriver)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('password must be 6 character long'),
], driverController.loginDriver)    

router.get('/profile', auth.authenticatedriver, driverController.getProfile)

router.get('/logout', auth.authenticatedriver, driverController.logoutDriver)

module.exports = router;