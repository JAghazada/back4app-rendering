const express = require("express");
const Router = require("./routes");
const app = express();
const path = require("path")
require("dotenv").config()
const PORT = process.env.PORT || 8000
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "views/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router)

app.listen(PORT, () => {
    console.log("Server runnning on: " + PORT);
});






