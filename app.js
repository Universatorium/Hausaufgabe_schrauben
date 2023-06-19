const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Importiere das Schrauben Model
const schraubenModel = require('./schraubenModel');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Universator:<password>@cluster0.uxaphon.mongodb.net/schrauben24?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => console.log(err));

//Meldung beim Einloggen auf Port 3333
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
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
