const express = require('express');
const app = express();
const port = 8000;

//using express-ejs-layout library
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));
app.use(expressLayouts);
//extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());

//use express router
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log('error while connecting to the server:',err);
    }
    console.log('Server is running on port:',port);
})