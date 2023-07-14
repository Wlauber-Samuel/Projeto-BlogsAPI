const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser({ displayName, email, password, image });
    console.log(result);
    return res.status(201).json({ token: result });
};

module.exports = {
    createUser,
};