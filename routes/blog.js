const express = require("express")
const {createBlog, homePage, createPage, singlePage, deleteBlog, updatePage,updateBlog} = require("../controllers/blog")

const router = express.Router()

router.get("/", homePage)
router.get("/createPage", createPage)
router.get("/singlePage/:id", singlePage)
router.post("/createBlog", createBlog)
router.get("/delete/:id", deleteBlog)
router.get('/editPage/:id', updatePage)
router.post("/update/:id", updateBlog)

module.exports = router;
