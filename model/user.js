const{DataTypes,Model} = require('sequelize');
const sequelize = require('./index')

class user extends Model{}

user.init({

    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
        

},{
   sequelize,
    ModelName:'user'

});
console.log(user === sequelize.models.user);

module.exports=user