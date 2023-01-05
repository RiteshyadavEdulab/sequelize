const{DataTypes} = require('sequelize');
const sequelize = require('./index')

const contact = sequelize.define('contacts',{


    permanent_address:{
        type:DataTypes.STRING,
        allowNull:false
    },
   current_address:{
        type:DataTypes.STRING
    }
        

},{

    tableName:'contacts'
});

module.exports=contact;