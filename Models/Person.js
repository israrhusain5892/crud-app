
const { DataTypes }= require('sequelize');
const sequelize = require('../db');
const moment=require('moment');

const Person = sequelize.define('Person',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: moment.utc().format('YYYY-MM-DD'),
  },
  
},
{
    tableName:'Person',
    timestamps:false,
},

);


module.exports = Person;
