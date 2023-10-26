const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/zuri-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

// Configuraciones express
app.set('port', process.env.PORT  || 4001);


//Funciones Middlewares

app.use(morgan('dev'));
app.use(express.json());

//Rutas url
app.use('/tasks', require('./routes/tasks'));


//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port 4001', app.get('port'));
});