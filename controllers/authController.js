const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// Register User
const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: 'User registered successfully',
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Login User
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: 'Invalid email or password'
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid email or password'
            });
        }

        res.status(200).json({
            message: 'Login successful',
            token: generateToken(user._id),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getProfile = async (req, res) => {
    res.status(200).json({
        user: req.user
    });
};
const adminDashboard = async (req, res) => {

    res.status(200).json({
        message:
            'Welcome Admin Dashboard',
        admin: req.user
    });
};const getAnalytics =
    async (req, res) => {

        try {

            const ApiKey =
                require(
                    '../models/ApiKey'
                );

            const analytics =
                await ApiKey
                    .find()
                    .populate(
                        'user',
                        'name email role'
                    );

            res.status(200)
                .json(
                    analytics
                );

        } catch (error) {

            res.status(500)
                .json({
                    message:
                        error.message
                });
        }
    };
module.exports = {
    registerUser,
    loginUser,
    getProfile,
    adminDashboard,
    getAnalytics
};