const express = require('express');
const { getAllUser, registerController, loginController } = require('../controllers/userController');

// router object

const router = express.Router();

// get all users || GET
router.get('/all-users', getAllUser);

// CREATE USER || POST
router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

module.exports = router