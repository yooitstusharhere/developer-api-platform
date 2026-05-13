const rateLimit =
    require(
        'express-rate-limit'
    );

const apiLimiter =
    rateLimit({

        windowMs:
            1 * 60 * 1000,

        max: 5,

        message: {
            message:
                'Too many requests, please try again later.'
        },

        standardHeaders:
            true,

        legacyHeaders:
            false
    });

module.exports =
    apiLimiter;