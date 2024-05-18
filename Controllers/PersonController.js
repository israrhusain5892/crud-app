const Person=require('../Models/Person');

// add person api
const createPerson=async(req,res)=>{
        var data=req.body;
        const savedData=await Person.create(data);
        res.status(200).json({Person:savedData});
}


// update person api
const updatePerson=async(req,res)=>{
     var data=req.body;
     var personId=req.params.id;
     const update=await Person.update(data,{
        where:{
            id:personId
         }
     });
    res.status(200).json({update});
    
}

// delete person api

const deletePerson=async(req,res)=>{
    
    const deletedData=await Person.destroy({
         where:{
            id:req.params.id
         }
    });
    res.status(200).json({Person:deletedData});
}

// get all persons api
const getPersons=async(req,res)=>{
    // var data=req.body;
    const savedData=await Person.findAll();
    res.status(200).json(savedData);
}


// get person api by personId
const getPerson=async(req,res)=>{
     var getdata=await Person.findOne({
        where:{
            id:req.params.id,
        }
     })
     res.status(200).json({getdata});
}


module.exports={
    createPerson,
    updatePerson,
    deletePerson,
    getPersons,
    getPerson
}


