const express = require("express")
const {createBlog, homePage, createPage} = require("../controllers/blog")

const router = express.Router()

router.get("/", homePage)
router.get("/createPage", createPage)
router.post("/createBlog", createBlog)

module.exports = router;
