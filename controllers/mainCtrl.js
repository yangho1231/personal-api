var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secret.js');
module.exports ={
  name: function(req, res, next) {
    var name = user.name;
    console.log(name);
    res.status(200).json({name: name});

  },

  location: function(req, res, next) {
    var location = user.location;
    res.status(200).json({location: location});
  },
  occupation: function(req, res, next) {
    var occupation = user.occupations;
    var query = req.query.order;
      if(query === 'asc') {
        res.json({occupation: occupation.sort()});
      }
      else if(query === 'desc') {
        res.json({occupation: occupation.reverse()});
      }
      else {
        res.status(200).json({occupations: occupation});
      }
  },
  occupationLatest: function(req, res, next) {
    var occupation = user.occupations;
    var latest = occupation.slice(1);
    res.status(200).json({occupations: latest});
  },
  hobbies: function(req, res, next) {
    var hobby = user.hobbies;
    res.status(200).json({hobbies: hobby});
  },
  hobbyFilter: function(req, res, next) {

    var hobbyType = req.params.type;
    var returnArr = user.hobbies.filter(function(item) {
      return item.type === hobbyType;
    });
    res.status(200).json({hobby_type: returnArr});

  },
  getFamily: function(req, res, next) {
    var family = user.family;
    var relation = req.query.relation;
    if(relation) {
    var result = family.filter(function(elem) {
      return elem.relation === relation;
    });
    res.json({families: result});
    }
    else {
      res.json({families: family});
    }
  },
  getRestaurantRating: function(req, res, next) {
    var restaurant = user.restaurants;
    var query = parseInt(req.query.rating);
    if(query) {
        var result = restaurant.filter(function(elem)  {
            return elem.rating === query;
        });
        res.json({restaurant: result});
    }

    else {
        res.json({restaurant: restaurant});
    }
  },
  getRestaurants: function(req, res, next) {
    var restaurant = user.restaurants;
    var name = req.params.name.split(' ').join('+');
    var results = restaurant.filter(function(elem) {
      return elem.name.split(' ').join('+') === name;
    });
    res.json({restaurant: results});
    console.log(results);
  },
  updateName: function(req, res, next) {
    user.name = req.body.name;
    res.json(user.names);
  },
  updateLocation: function(req, res, next) {
    user.location = req.body.location;
    res.send();
  },
  addHobbies: function(req, res, next) {

    user.hobbies.push(req.body);
    res.json(user.hobbies);
  },
  addOccupation: function(req, res, next) {
    user.occupations.push(req.body.occupation);
    res.json(user.occupations);
  },
  addFamily: function(req, res, next) {
    user.family.push(req.body);
    res.json(user.family);
  },
  addRestaurant: function(req, res, next) {
    user.restaurants.push(req.body);
    res.json(user.restaurants);
  },
  getSkillz: function(req, res, next) {
    var query = req.query.experience;
    // var arr = [];
    // for(var i = 0; i < skillz.length; i++) {
    //   if(skillz[i].experience === query) {
    //     arr.push(skillz[i]);
    //   }
    //
    // }
    if(query) {
      var result = skillz.filter(function(elem) {
        return elem.experience === query;

      });
      res.json(result);
    }
    else {
      res.json(skillz);
    }

  },
  postSkillz: function(req, res, next) {
    skillz.push(req.body);
    res.json(skillz);
  },
  getSecrets: function(req, res, next) {
    res.json(secrets);
  }




};
