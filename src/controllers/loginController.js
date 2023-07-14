const loginService = require('../services/loginService');

const createUser = async (req, res) => {
    const { status, message } = await loginService.createUser(req.body);
    console.log(status, message);
    if (status === 400) return res.status(status).json({ message });
    res.status(200).json({ token: message });
};

module.exports = {
    createUser,
};