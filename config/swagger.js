const swaggerJsDoc =
    require(
        'swagger-jsdoc'
    );

const swaggerOptions = {

    definition: {
        openapi: '3.0.0',

        info: {
            title:
                'Developer API Platform',

            version:
                '1.0.0',

            description:
                'API documentation for Developer API Platform'
        },

        servers: [
            {
                url:
                    'http://localhost:5000'
            }
        ]
    },

    apis: [
        './routes/*.js'
    ]
};

const swaggerDocs =
    swaggerJsDoc(
        swaggerOptions
    );

module.exports =
    swaggerDocs;