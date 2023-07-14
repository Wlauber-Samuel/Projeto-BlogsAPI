const { User } = require('../models');
const tokenJWT = require('../utils/tokenJWT');

const createUser = async ({ email, password }) => {
    if (!email || !password) return { status: 400, message: 'Some required fields are missing' };

    const user = await User.findOne({ where: { email, password } });

    if (!user) return { status: 400, message: 'Invalid fields' };

    const token = tokenJWT({ id: user.id });
    console.log(token);

    return { status: 200, message: token };
};

module.exports = {
    createUser,
};