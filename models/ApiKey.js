const mongoose =
    require('mongoose');

const apiKeySchema =
    new mongoose.Schema(
        {
            user: {
                type:
                    mongoose.Schema
                        .Types
                        .ObjectId,

                ref: 'User',

                required: true
            },

            apiKey: {
                type: String,
                required: true,
                unique: true
            },

            isActive: {
                type: Boolean,
                default: true
            },

            totalRequests: {
                type: Number,
                default: 0
            },

            successRequests: {
                type: Number,
                default: 0
            },

            failedRequests: {
                type: Number,
                default: 0
            },

            lastUsed: {
                type: Date
            }
        },
        {
            timestamps: true
        }
    );

module.exports =
    mongoose.model(
        'ApiKey',
        apiKeySchema
    );