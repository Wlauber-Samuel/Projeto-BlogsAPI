const { decoded } = require('../utils/tokenJWT');

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
        const decodedToken = decoded(token);
        if (!decodedToken) return res.status(401).json({ message: 'Expired or invalid token' });
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = tokenValidation;