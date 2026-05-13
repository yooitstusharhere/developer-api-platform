const crypto =
    require('crypto');

const ApiKey =
    require('../models/ApiKey');


// Generate API Key
const generateApiKey =
    async (req, res) => {

        try {

            const existingKey =
                await ApiKey.findOne({
                    user:
                        req.user._id
                });

            if (existingKey) {
                return res
                    .status(400)
                    .json({
                        message:
                            'API key already exists'
                    });
            }

            const apiKey =
                'sk_dev_' +
                crypto
                    .randomBytes(32)
                    .toString('hex');

            const newApiKey =
                await ApiKey.create({
                    user:
                        req.user._id,

                    apiKey
                });

            res.status(201)
                .json({
                    message:
                        'API key generated',

                    apiKey:
                        newApiKey.apiKey
                });

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };


// Revoke API Key
const revokeApiKey =
    async (req, res) => {

        try {

            const apiKey =
                await ApiKey.findOne({
                    user:
                        req.user._id
                });

            if (!apiKey) {
                return res
                    .status(404)
                    .json({
                        message:
                            'No API key found'
                    });
            }

            apiKey.isActive =
                false;

            await apiKey.save();

            res.status(200)
                .json({
                    message:
                        'API key revoked'
                });

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };


// Regenerate API Key
const regenerateApiKey =
    async (req, res) => {

        try {

            const existingKey =
                await ApiKey.findOne({
                    user:
                        req.user._id
                });

            if (!existingKey) {
                return res
                    .status(404)
                    .json({
                        message:
                            'No API key found'
                    });
            }

            const newApiKey =
                'sk_dev_' +
                crypto
                    .randomBytes(32)
                    .toString('hex');

            existingKey.apiKey =
                newApiKey;

            existingKey.isActive =
                true;

            await existingKey.save();

            res.status(200)
                .json({
                    message:
                        'API key regenerated',

                    apiKey:
                        existingKey.apiKey
                });

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };


// Get API Stats
const getApiStats =
    async (req, res) => {

        try {

            const apiKey =
                await ApiKey.findOne({
                    user:
                        req.user._id
                });

            if (!apiKey) {
                return res
                    .status(404)
                    .json({
                        message:
                            'No API key found'
                    });
            }

            res.status(200)
                .json({

                    totalRequests:
                        apiKey.totalRequests,

                    successRequests:
                        apiKey.successRequests,

                    failedRequests:
                        apiKey.failedRequests,

                    lastUsed:
                        apiKey.lastUsed
                });

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };

module.exports = {
    generateApiKey,
    revokeApiKey,
    regenerateApiKey,
    getApiStats
};