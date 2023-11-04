const express = require('express');
const userCrontrolers = require('../controllers/loginControllers');
const userLoginRouter = express.Router();

userLoginRouter.post('/?', userCrontrolers.validatedUser);

module.exports = userLoginRouter