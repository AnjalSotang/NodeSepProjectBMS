const express = require("express")
require('dotenv').config();
const { sequelize } = require("./models/index");
const app = express()

sequelize.sync({ force: 0 });

app.set('view engine', 'ejs');

//nODEJS KAI CSS ALLOW GAR
// Serve static files from the 'public' directory
app.use(express.static("public"));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routerBlog = require("./routes/blog")
app.use("/api", routerBlog)

app.listen(3000, () => {
    console.log("Server Started Running")
})