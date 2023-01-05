const{DataTypes} = require('sequelize');
const sequelize = require('./index')

const user = sequelize.define('user',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
        

},{


    table:'user'
});
console.log(user === sequelize.models.user);

module.exports=user