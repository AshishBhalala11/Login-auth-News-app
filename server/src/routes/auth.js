const { Router } = require('express');

const AuthController = require('../controllers/AuthController');

const router = Router();

// router for auth
// base router /auth

// in case of /register API endpoint hit, will execute register method in AuthController
router.post('/register', AuthController.register);

// in case of /login API endpoint hit, will execute login method in AuthController
router.post('/login', AuthController.login);

// in case of /logout API endpoint hit, will execute logout method in AuthController
router.post('/logout', AuthController.logout);

module.exports = router;
