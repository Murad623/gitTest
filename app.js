const fs = require("fs");
// const value = fs.readFile("./data.json",'utf8', (err, data) => {
const value = fs.readFileSync("./data.json",'utf8', (err, data) => {
    if (!err) {
        return data
        
    }
    else {
        return err
    }    
});

//------------------------------------------------------------------

const express = require("express");
const app = express()
  
app.get('/', function (req, res) {
    res.send(`Name : ${JSON.parse(value)[0].name} | ID : ${JSON.parse(value)[0].id} | Age : ${JSON.parse(value)[0].age} /
    Name : ${JSON.parse(value)[1].name} | ID : ${JSON.parse(value)[1].id} | Age : ${JSON.parse(value)[1].age} /
    Name : ${JSON.parse(value)[2].name} | ID : ${JSON.parse(value)[2].id} | Age : ${JSON.parse(value)[2].age}`)
});
app.get('/:id',function(req,res){
    const id = req.params.id
    const emp = JSON.parse(value).find(emp => emp.id == id)
    res.send(`Name : ${emp.name} <br> ID : ${emp.id} <br> Age : ${emp.age}`)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});