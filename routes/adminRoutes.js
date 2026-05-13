/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin APIs
 */
const express =
    require('express');

const router =
    express.Router();

const {
    adminDashboard,
    getAnalytics
} = require(
    '../controllers/authController'
);

const {
    protect,
    admin
} = require(
    '../middleware/authMiddleware'
);

// Dashboard
router.get(
    '/dashboard',
    protect,
    admin,
    adminDashboard
);

// Analytics
/**
 * @swagger
 * /api/admin/analytics:
 *   get:
 *     summary: Get Platform Analytics
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Analytics fetched successfully
 */
router.get(
    '/analytics',
    protect,
    admin,
    getAnalytics
);

module.exports =
    router;