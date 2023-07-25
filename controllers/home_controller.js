
var projectList = [];

module.exports.home = function(req,res){
    return res.render('home.ejs',{
        title:"Home Page",
        project_list: projectList
    });
}

module.exports.create = function(req,res){
    projectList.push({
        name:req.body.name,
        description:req.body.description,
        author:req.body.author

    });
    return res.redirect('/');
}
