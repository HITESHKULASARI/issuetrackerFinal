module.exports.details = function(req,res){
    console.log("here i am");
    console.log(req.query);
    console.log(req.query.idx);
    return res.render('project_details.ejs');
}
