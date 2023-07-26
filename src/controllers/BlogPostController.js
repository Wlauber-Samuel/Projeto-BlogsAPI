const BlogPostService = require('../services/BlogPostService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const post = await BlogPostService.createPost({ title, content, categoryIds }, authorization);
  res.status(201).json(post);
};

module.exports = {
    createPost,
};