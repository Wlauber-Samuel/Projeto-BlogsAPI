const { BlogPost, Category } = require('../models');
const { decoded } = require('../utils/tokenJWT');

const createPost = async ({ title, content, categoryIds }, token) => {
    const { id } = decoded(token);
    const categories = await Category.findAll({ where: { id: categoryIds } });

    const post = await BlogPost.create({
        title,
        content,
        categoryIds,
        userId: id,
        published: new Date(),
        updated: new Date(),
    });

    return { ...post.dataValues, categories };
};

module.exports = {
    createPost,
};