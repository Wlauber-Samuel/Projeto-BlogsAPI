const { User } = require('../models');
const tokenJWT = require('../utils/tokenJWT');

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const validateUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const user = await User.findOne({ where: { displayName, email, password } });

    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }

    if (displayName.length < 8) {
        return res.status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (password.length < 6) {
        return res.status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    }

    next();
};

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image });
    const token = tokenJWT(user);
    return token;
};

module.exports = {
    validateUser,
    createUser,
};