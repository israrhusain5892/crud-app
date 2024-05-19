

const express = require('express');
var bodyParser = require('body-parser');
const Person = require('./Models/Person');
personController = require('./Controllers/PersonController');
const { createPerson } = require('./Controllers/PersonController');
const app = express();
app.use(bodyParser.json());

require('dotenv').config();

 
var cors=require('cors');
app.use(cors());


Person.sync({ force: false });

app.post('/', personController.createPerson);
app.put('/:id', personController.updatePerson);
app.delete('/:id', personController.deletePerson);
app.get('/', personController.getPersons);
app.get('/get/:id', personController.getPerson);

app.options('*',cors());

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server running on port 3001")
});
