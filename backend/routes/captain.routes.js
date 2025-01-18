const express = require('express');
const router = express.Router(); 
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller')
const authMiddleWare = require('../middlewares/auth.middleware')

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be 3 character long'),
    body('password').isLength({min : 8}).withMessage('Password must be 8 character long'),
    body('vehicle.color').isLength({min : 3}).withMessage('Please enter valid color'),
    body('vehicle.plate').isLength({min : 3}).withMessage('Plate must be valid'),
    body('vehicle.capacity').isLength({min : 1}).withMessage('Capacity should be minimum 1'),
    body('vehicle.vehicleType').isIn(['motorcycle' , 'auto' , 'car']).withMessage('Invalid vehicle'),

] , captainController.registerCaptain)

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 8}).withMessage('Password must be 8 character long')
] , captainController.loginCaptain)

router.get('/profile' ,authMiddleWare.authCaptain, captainController.getCaptainProfile)

router.get('/logout' , authMiddleWare.authCaptain , captainController.logoutCaptain)


module.exports = router;
