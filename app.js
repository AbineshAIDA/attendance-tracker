const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sessionRoutes = require('./routes/sessions');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/attendance-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); 

app.use('/sessions', sessionRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
