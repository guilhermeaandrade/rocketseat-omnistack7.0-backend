const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-fhz0s.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(require('./routes.js'));

app.listen(3333);