var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/name', mainCtrl.name);

app.get('/location', mainCtrl.location);

app.get('/occupation', mainCtrl.occupation);
app.get('/lastoccupation', mainCtrl.occupationLatest);
app.get('/hobbies', mainCtrl.hobbies);
app.get('/hobbies/:type', mainCtrl.hobbyFilter);
app.get('/family', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurantRating);
app.get('/restaurants/:name', mainCtrl.getRestaurants);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);



app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.addHobbies);
app.post('/occupation', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);




app.listen(3000, function() {
  console.log("Listening!");
});
