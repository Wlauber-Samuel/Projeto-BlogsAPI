const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const result = await userService.createUser({ displayName, email, password, image });
    return res.status(201).json({ token: result });
};

const getAllUsers = async (_req, res) => {
    const result = await userService.getAllUsers();
    return res.status(200).json(result);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const result = await userService.getUserById(id);
    console.log('result', result);

    console.log(!undefined);
    if (result.message) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(result);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};