const{Sequelize} = require('sequelize');

const sequelize = new Sequelize('database1','root','root',{
    host:'localhost',
    dialect:'mysql'//connect karta hai
});
 try{
   sequelize.authenticate();
    console.log('connection has been established succcessfully.');
 }catch (error)
 {
    console.error('unable to connect to the database:',error);
 }
 module.exports=sequelize