
var projectList = [];
var errors  = [[]];
module.exports.home = function(req,res){
    return res.render('home.ejs',{
        title:"Home Page",
        project_list: projectList
    });
}
//creating an error id
var k = 0;


module.exports.create = function(req,res){
    projectList.push({
        name:req.body.name,
        description:req.body.description,
        author:req.body.author,
        id:k++
    });
    console.log(projectList[k-1]);
    return res.redirect('/');
}


module.exports.details = function(req,res){
    console.log("here i am");
    console.log(req.query);
    console.log(req.query.idx);
    var index = req.query.idx;
    return res.render('project_details.ejs',{
        name : projectList[index].name,
        description : projectList[index].description,
        author : projectList[index].author,
        errorList : errors[index],
        index : index
    });
}

module.exports.createErr = function(req,res){
    var index = req.query.idx;
    console.log("index",index);
    console.log(errors[index]);
    if(!errors[index]){
        errors[index] = [];
    }
    
    errors[index].push({
        Title:req.body.title,
        description:req.body.description,
        author:req.body.author
    });
    return res.redirect('back');
}