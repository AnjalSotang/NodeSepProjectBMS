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
        
        if(!response){
            res.status(500).json({
                error: 'Please give a proper data!!'
            });
        }

        res.redirect("/api/")
    } catch (error) {
        // Handle any errors that occurred during the create operation
        console.error('Error creating blog:', error);
        res.status(500).json({
            error: 'An error occurred while creating the blog.'
        });
    }
};

const singlePage =  async(req, res) => {
    let {id} = req.params
    try{
        const response = await blog.findByPk(id)
        if(!response){
            res.status(200).json("Not Found")
        }
        res.render("single", {single: response});

    }catch(error) {
        // Handle any errors that occurred during the create operation
        console.error('Error creating blog:', error);
        res.status(500).json({
            error: 'An error occurred while getting the single page.'
        });
    }
}

const deleteBlog = async (req, res) => {
    let {id} = req.params;
    try{
    const del = await blog.destroy({ where: { id: id } });
    if(!del){
        res.status(404).json("Not Found")
    }
    res.redirect("/api/");
    }catch(error) {
        // Handle any errors that occurred during the create operation
        console.error('Error creating deleting:', error);
        res.status(500).json({
            error: 'An error occurred while deleting the single page.'
        });
    }
}

const updatePage = async (req, res) => {
    let {id}= req.params;
    const blogs = await blog.findByPk(id)
    res.render("edit", {single: blogs});
}

const updateBlog = async (req, res) => {
    let {id} = req.params;
    const { title, subtitle, description } = req.body;

    try{
        const ub = await blog.update(
            {
              title: title,
              subtitle: subtitle,
              description: description
            },
            {
              where: { id: id }
            }
          );
          
    if(!ub){
        res.status(404).json("Not Found")
    }
    res.redirect("/api/singlePage/" + id);
    }catch(error) {
        // Handle any errors that occurred during the create operation
        console.error('Error Updating:', error);
        res.status(500).json({
            error: 'An error occurred while deleting the single page.'
        });
    }
}


module.exports = {
    createPage,
    createBlog,
    homePage,
    singlePage,
    deleteBlog,
    updatePage,
    updateBlog
};
