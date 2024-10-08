const {Sequelize} =require('sequelize');
const Person=require('./Models/Person')
  require('dotenv').config()
  
  const sequelize=new Sequelize(process.env.DATABASENAME, process.env.USER_NAME, process.env.PASSWORD,{

        host:process.env.HOST,
       'dialect':'mysql',
        port:'28300',

       "dialectOptions": {
        "requestTimeout": 300000
      },
      
  });

  try{
    sequelize.authenticate();
    console.log("database connected successfully")
}
catch(error){
    console.log("some thing went wrong connection error"+error);
}




module.exports=sequelize;
