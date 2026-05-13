const express =
    require('express');

const dotenv =
    require('dotenv');

const cors =
    require('cors');

const connectDB =
    require('./config/db');

const authRoutes =
    require('./routes/authRoutes');

const adminRoutes =
    require('./routes/adminRoutes');

const apiKeyRoutes =
    require('./routes/apiKeyRoutes');

const developerRoutes =
    require('./routes/developerRoutes');

const swaggerUi =
    require(
        'swagger-ui-express'
    );

const swaggerDocs =
    require(
        './config/swagger'
    );

dotenv.config();

// Connect Database
connectDB();

const app =
    express();


// Middleware
app.use(
    express.json()
);

app.use(
    cors()
);


// Swagger Docs
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(
        swaggerDocs
    )
);


// Routes
app.use(
    '/api/auth',
    authRoutes
);

app.use(
    '/api/admin',
    adminRoutes
);

app.use(
    '/api/keys',
    apiKeyRoutes
);

app.use(
    '/api/dev',
    developerRoutes
);


// Test Route
app.get(
    '/',
    (req, res) => {
        res.send(
            'API is running...'
        );
    }
);


// Port
const PORT =
    process.env.PORT
    || 5000;


// Start Server
app.listen(
    PORT,
    () => {
        console.log(
            `Server running on port ${PORT}`
        );
    }
);