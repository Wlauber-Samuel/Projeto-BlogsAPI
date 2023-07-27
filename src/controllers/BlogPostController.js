const BlogPostService = require('../services/BlogPostService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization: token } = req.headers;
  const newPost = await BlogPostService.createPost({ title, content, categoryIds }, token);
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};