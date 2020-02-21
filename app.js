const express = require('express');
const bodyParser = require('body-parser')
const app  = express().use(bodyParser.json())
const http = require("http").Server(app);

enableCors = (req,res,next) =>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(enableCors)
PORT = 3000
HOST = '0.0.0.0'


//Rotas
app.use('/', require('./src/routes/title.router'))
app.use('/api', require('./src/routes/transform.router'))

//Server externo
http.listen(PORT, function () {
    console.log('API rodando na porta',PORT+'!');
});

module.exports = app