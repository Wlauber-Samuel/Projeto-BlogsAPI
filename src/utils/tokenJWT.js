const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const tokenJWT = (user) => {
    const { password, ...payload } = user;
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };
    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
    return token;
    };

module.exports = tokenJWT;