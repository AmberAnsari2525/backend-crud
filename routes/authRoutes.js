const express = require('express');
const { register , login} = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleweare');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Protected data', user: req.user });
});

module.exports = router;

