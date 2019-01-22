var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
var port=process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('./public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'./public/index.html');

});

app.listen(port, () => console.log("server running"))
