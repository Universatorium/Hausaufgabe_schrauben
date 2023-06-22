const express = require('express');
const mongoose = require('mongoose');
const app = express();
const chalk = require('chalk');

//Importiere das Schrauben Model
const schraubenModel = require('./schraubenModel');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Universator:FAzG3CxIVhPFl1hS@cluster0.uxaphon.mongodb.net/schrauben24?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Schraub Deine Erwartungen nicht zu hoch!');
});

// GET-Route für den Verkauf einer bestimmten Schraube
app.get('/sales/:id', (req, res) => {
    const productId = req.params.id;
    schraubenModel.find({'produkt_id': productId}).exec().then((schrauben)=>{
    console.log(schrauben);
    res.send(schrauben);
    
    });
});

// Route alle Schrauben
app.get('/sales', (req, res) => {
  schraubenModel.find({}).exec().then((schrauben)=>{
    console.log(schrauben);
    res.send(schrauben);

  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(chalk.blue.bgRed.bold(`Server is running on port ${PORT}`)));