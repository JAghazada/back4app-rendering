const indexPageController = (req,res) =>{
    res.render("index")
}

const adminPageController = (req,res) =>{
    res.render("admin")
}
const aboutPageController = (req,res) =>{
    res.render("about")
}


module.exports = {indexPageController,adminPageController,aboutPageController}