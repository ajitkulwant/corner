var express = require("express")
var tempoRoute = require("./tempo")

var app=express();
app.use(express.json());
app.use("/tempo",tempoRoute)

app.listen(5000,function(){
        console.log("server is runnig...")
        
})