/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User Authentication APIs
 */
const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile
} = require('../controllers/authController');

const {
    protect
} = require('../middleware/authMiddleware');

// Auth Routes
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post('/register', registerUser);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post('/login', loginUser);

// Protected Route
router.get('/profile', protect, getProfile);

module.exports = router;