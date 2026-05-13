const ApiKey =
    require('../models/ApiKey');

const verifyApiKey =
    async (
        req,
        res,
        next
    ) => {

        try {

            const apiKey =
                req.header(
                    'x-api-key'
                );

            if (!apiKey) {
                return res
                    .status(401)
                    .json({
                        message:
                            'API key missing'
                    });
            }

            const validKey =
                await ApiKey
                    .findOne({
                        apiKey
                    })
                    .populate(
                        'user'
                    );

            // Invalid Key
            if (
                !validKey ||
                !validKey.isActive
            ) {

                if (validKey) {

                    validKey
                        .failedRequests++;

                    await validKey
                        .save();
                }

                return res
                    .status(401)
                    .json({
                        message:
                            'Invalid API key'
                    });
            }

            // Success Tracking
            validKey
                .totalRequests++;

            validKey
                .successRequests++;

            validKey.lastUsed =
                new Date();

            await validKey.save();

            req.user =
                validKey.user;

            next();

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };

module.exports =
    verifyApiKey;