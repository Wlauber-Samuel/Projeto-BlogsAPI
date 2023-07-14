const loginService = require('../services/loginService');

const loginUser = async (req, res) => {
    const { status, message } = await loginService.loginUser(req.body);
    if (status === 400) return res.status(status).json({ message });
    res.status(200).json({ token: message });
};

module.exports = {
    loginUser,
};