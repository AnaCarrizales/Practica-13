var express = require('express'); //importamos dependencia express
var app = express(); //declaramos una App de express

var port = process.env.PORT || 3000 //setteamos el puerto para que el servidor quede en escucha
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public')); //específica la aplicación de express

app.use('/', function (req, res, next){
    console.log('Request Url: ' + req.url);
    next();
});
//primera ruta (la cual está al nivel de la raíz /), Hello World!
app.get('/', function (req, res){
    res.render('index');//Msj que se mostrará
});

//Se establece la ruta number junto con un id
app.get('/number/:id', function (req, res) { 
    res.render('number', { ID: req.params.id}) //En las llaves se define la variable que recibirá el parámetro
})

//tercera ruta, recibe un parámetro
app.get('/person/:id', function (req, res){
    res.render('person',{ ID: req.params.id });
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', function (req,res) {
    res.json({firstname: 'John', lastname: 'Doe'});
});
app.listen(port); //levantar el servidor y ponerlo a la escucha