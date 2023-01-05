const express = require('express');
const user = require('./model/user');

const app = express();

app.get('/',function(req,resp){
    res.send('hello')
});
user.sync({force:true});

app.listen(3000,() => {
    console.log('app will be run on :http//localhost:30000')
});