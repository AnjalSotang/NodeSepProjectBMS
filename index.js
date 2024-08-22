const express = require("express")
const app = express()



app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/", (req, res) => {
    res.render("blogs");
})

app.get("/createBlog", (req, res) => {
    res.render("createBlog.ejs");
})


app.post("/addBlog", (req, res) => {
    console.log(req.body)
    res.send("Form Submitted")
})
app.listen(3000, () => {
    console.log("Server Started Running")
})