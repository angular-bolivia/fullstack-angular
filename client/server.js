var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Api Rest');
})

app.listen(3000);
console.log('Api is running on port 3000');