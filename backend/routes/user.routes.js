const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userContoller= require('../controllers/user.controllers');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First letter must be at least 3 characters'),
    body('password').isLength({min : 8}).withMessage('Password must be 8 characters long'),
] , userContoller.registerUser)

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 8}).withMessage("Password must be 8 characters long")
] , userContoller.loginUser)

router.get('/profile' , authMiddleware.authUser , userContoller.getUserProfile);

router.get('/logout' , authMiddleware.authUser , userContoller.logoutUser)


module.exports = router;