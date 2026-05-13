const apiLimiter = require('../middleware/rateLimitMiddleware');
const express = require('express');
const router = express.Router();

const verifyApiKey =
    require(
        '../middleware/apiKeyMiddleware'
    );

// Protected Developer API
router.get(
    '/data',
    apiLimiter,
    verifyApiKey,
    (req, res) => {
        res.status(200).json({
            message:
                'Developer API Access Granted',

            user: req.user
        });
    }
);

module.exports = router;