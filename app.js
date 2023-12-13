const fs = require("fs");
// const value = fs.readFile("./data.json",'utf8', (err, data) => {
const value = fs.readFileSync("./data.json",'utf8', (err, data) => {
    if (!err) {
        return JSON.parse(data)
        
    }
    else {
        return err
    }    
});

//------------------------------------------------------------------

const express = require("express");
const app = express()
  
app.get('/', function (req, res) {
    res.send(`Name : ${value[0].name} | ID : ${value[0].id} | Age : ${value[0].age} /
    Name : ${value[1].name} | ID : ${value[1].id} | Age : ${value[1].age} /
    Name : ${value[2].name} | ID : ${value[2].id} | Age : ${value[2].age}`)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});