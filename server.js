var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
console.log('');
console.log('--Сервер запущен--');
app.use(express.static(__dirname + '/public'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req,res){
  res.render('index', {elementID: ''});
  console.log('');
  console.log('--Страница загружена пользователем--');
});

app.post('/', urlencodedParser, function(req,res){
  res.render('index', {elementID: ' Спасибо! Данные получены!'});
  console.log('');
  console.log('Получены элементы формы:');
  console.log(req.body);
  //console.log('');
  //console.log(req);
});

var server = app.listen(8000);