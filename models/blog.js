module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define('Blog', {
        title: {
            type: Sequelize.STRING
        },
        subtitle: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Blog;
};
