const {blog} = require("../models/index")

const homePage = async (req, res) => {
    try {
        const response = await blog.findAll();
        res.render('blogs', { blogs: response });
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching the data"
        });
    }
};


const createPage = (req, res) => {
    res.render("createBlog.ejs");
}

const createBlog = async (req, res) => {
    try {
        const { title, subtitle, description } = req.body;

        // Await the promise from the blog.create method
        const response = await blog.create({
            title,
            subtitle,
            description
        });

        // Send JSON response with status 201 (Created)
        res.status(201).json({
            data: response
        });
    } catch (error) {
        // Handle any errors that occurred during the create operation
        console.error('Error creating blog:', error);
        res.status(500).json({
            error: 'An error occurred while creating the blog.'
        });
    }
};

module.exports = {
    createPage,
    createBlog,
    homePage
};
