const schemaCategory = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
        underscored: true,
    });

    return Category;
};

module.exports = schemaCategory;