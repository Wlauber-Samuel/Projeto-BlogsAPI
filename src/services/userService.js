const { User } = require('../models');
const { tokenJWT } = require('../utils/tokenJWT');

const createUser = async ({ displayName, email, password, image }) => {
    const user = await User.create({ displayName, email, password, image: image || '' });
    const token = tokenJWT(user);
    return token;
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) return { message: 'User does not exist' };

    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
};