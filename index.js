const express = require('express');

const user = require('./model/user');
const contact = require('./model/contact');
const app = express();

app.get('/',function(req,resp){
    res.send('hello')
});
user.sync({force:true});
contact.sync({force:true});

app.listen(3000,() => {
    console.log('app will be run on :http//localhost:30000')
});