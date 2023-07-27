const { Category } = require('../models');

const InputValidate = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400)
            .json({ message: 'Some required fields are missing' });
    }

    next();
};

const categoryIdsValidate = async (req, res, next) => {
    const { categoryIds } = req.body;
    const categories = await Category.findAll();
    const categoriesIds = categories.map((category) => category.id);

    categoryIds.forEach((categoryId) => {
        if (!categoriesIds.includes(categoryId)) {
            return res.status(400)
                .json({ message: 'one or more "categoryIds" not found' });
        }
    });

    next();
};

module.exports = {
    InputValidate,
    categoryIdsValidate,
};