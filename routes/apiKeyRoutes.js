/**
 * @swagger
 * tags:
 *   name: API Keys
 *   description: API Key Management
 */
const express = require('express');
const router = express.Router();

const {
    protect
} = require(
    '../middleware/authMiddleware'
);

const {
    generateApiKey,
    revokeApiKey,
    regenerateApiKey,
    getApiStats
} = require(
    '../controllers/apiKeyController'
);

// Generate API Key
/**
 * @swagger
 * /api/keys/generate:
 *   post:
 *     summary: Generate API Key
 *     tags: [API Keys]
 *     responses:
 *       201:
 *         description: API key generated
 */
router.post(
    '/generate',
    protect,
    generateApiKey
);

// Revoke API Key
router.patch(
    '/revoke',
    protect,
    revokeApiKey
);

// Regenerate API Key
router.patch(
    '/regenerate',
    protect,
    regenerateApiKey
);
/**
 * @swagger
 * /api/keys/stats:
 *   get:
 *     summary: Get API Usage Statistics
 *     tags: [API Keys]
 *     responses:
 *       200:
 *         description: API statistics fetched
 */
router.get(
    '/stats',
    protect,
    getApiStats
);

module.exports = router;