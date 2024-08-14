const userController = require('../controller/signupController');
const router = require('express').Router();


router.post('/signup',userController.signup);

module.exports = router;