var mysql = require("mysql")
var express = require("express")

var appRoute=express();

var connection = mysql.createConnection(
    {
    host : '200.0.1.115',
   // host : 'localhost',
    user:'root',
    password:'root',
    database:'aheremi',
    port:   8451
    }
)

connection.connect();

appRoute.get("/",function(req,res){
    var query=`select * from mytest`
        connection.query(query,function(err,result){
res.send(result)      });
});

module.exports = appRoute;
