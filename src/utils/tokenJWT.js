const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const tokenJWT = (user) => {
    const { password, ...payload } = user;
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };

    const encoded = jwt.sign(payload, JWT_SECRET, jwtConfig);

    return encoded;
};

const decoded = (token) => {
    const spliter = token.split(' ')[1] || token;
    const decodedToken = jwt.verify(spliter, JWT_SECRET);
    return decodedToken;
};

module.exports = {
    tokenJWT,
    decoded,
};
