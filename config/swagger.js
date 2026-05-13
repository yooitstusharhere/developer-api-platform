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
    url: 'https://developer-api-platform.onrender.com',
    description: 'Live Server'
  },
  {
    url: 'http://localhost:5000',
    description: 'Local Server'
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