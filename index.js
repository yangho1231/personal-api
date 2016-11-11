var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controller/middleware.js');
var mainCtrl = require('./controller/mainCtrl.js');

var app = express();
app.use(middleware.addHeaders);
app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupation', mainCtrl.getOccupation);
app.get('/occupationLatest', mainCtrl.getOccupationLatest);
app.get('/hobbies/', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family/', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants/', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name/', mainCtrl.updateName);
app.put('/location/', mainCtrl.updateLocation);
app.post('/hobbies/', mainCtrl.addHobbies);
app.post('/occupation', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);

app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecret);
app.listen(3000, function() {
  console.log('I am listening');
});
