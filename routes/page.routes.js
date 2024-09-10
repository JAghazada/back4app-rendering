const { indexPageController, adminPageController, aboutPageController } = require("../controllers/pageControllers");

const pageRoutes = require("express").Router();


pageRoutes.get("/",indexPageController);
pageRoutes.get("/admin",adminPageController);
pageRoutes.get("/about",aboutPageController);
module.exports = pageRoutes