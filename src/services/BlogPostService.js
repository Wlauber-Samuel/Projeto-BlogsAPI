const { BlogPost, PostCategory } = require('../models');
const { decoded } = require('../utils/tokenJWT');

const createPost = async (post, token) => {
    const { title, content, categoryIds } = post;
    const { id } = decoded(token);
    const newPost = await BlogPost.create({
        title,
        content,
        categoryIds,
        userId: id,
        updated: new Date(),
        published: new Date(),
    });

    const postCategories = categoryIds.map((categoryId) => ({
        postId: newPost.id,
        categoryId,
    }));

    await PostCategory.bulkCreate(postCategories);

    return newPost;
};

module.exports = {
    createPost,
};