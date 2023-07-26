const BlogPostValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400)
            .json({ message: 'Some required fields are missing' });
    }

    next();
};

const categoryIdsValidate = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds) {
        return res.status(400)
            .json({ message: 'one or more "categoryIds" not found' });
    }

    next();
};

module.exports = {
    BlogPostValidate,
    categoryIdsValidate,
};