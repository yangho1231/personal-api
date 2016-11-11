var user = require('../user.js');
var skillz = require('../skillz.js');
var secret = require('../secret.js');
module.exports = {
  getName: function(req, res, next) {
  var name = user.name;
  res.json({name: name});
  },
  getLocation: function(req, res, next) {
    res.json({location: user.location});
  },
  getOccupation: function(req, res, next) {
    var order = req.query.order;
    var occupation = user.occupations;
    if(order) {
      if(order === 'desc') {
        res.json(occupation.reverse());
      }
      else if(order === 'asc') {
        res.json(occupation.sort());
      }

    }
    else {
      res.json({occupation: occupation});
    }
  },

  getOccupationLatest: function(req, res, next) {
    var latest = user.occupations;
    res.json({occupations: latest.slice(latest.length-1)});
  },
  getHobbies: function(req, res, next) {
    res.json(user.hobbies);
  },
  getHobbiesType: function(req, res, next) {
    var filter = req.params.type;
    var hobbies = user.hobbies;
    var results = hobbies.filter(function(elem) {
      return elem.type === filter;
    });
      res.json({hobbies: results});
  },
  getFamily: function(req, res, next) {
    var relation = req.query.relation;
    var family = user.family;
    if(relation) {
      var result = family.filter(function(elem) {
        return elem.relation === relation;
      });
      res.json({family: result});
    } else {
    res.json({family: family});

    }
  },
  getFamilyGender: function(req, res, next) {
    var gender = req.params.gender;
    var family = user.family;
    var result = family.filter(function(elem) {
      return elem.gender === gender;
    });
    res.json({family: result});
  },
  getRestaurants: function(req, res, next) {
    var restaurant = user.restaurants;
    var rating = parseInt(req.query.rating);
    if(rating) {
      var result = restaurant.filter(function(elem) {
        return elem.rating === rating;
      });
      res.json({restaurant: result});
    }
    else {
      res.json({restaurant: restaurant});
    }
  },
  getRestaurantsName: function(req, res, next) {
    var restaurant = user.restaurants;
    var name = req.params.name.split(' ').join('+');
    var result = restaurant.filter(function(elem) {
      return elem.name.split(' ').join('+') === name;
    });
    res.json({restaurant: result});
  },
  updateName: function(req, res, next) {
    user.name = req.body.name;
    res.json(user.name);
  },
  updateLocation: function(req, res, next) {
    user.location = req.body.location;
    res.json(user.location);
  },
  addHobbies: function(req, res, next) {
    res.json(user.hobbies.push(req.body));
  },
  addOccupation: function(req, res, next) {
    res.json(user.occupations.push(req.body.occupation));
  },
  addFamily: function(req, res, next) {
    res.json(user.family.push(req.body));
  },
  addRestaurants: function(req, res, next) {
    res.json(user.restaurants.push(req.body));
  },
  getSkillz: function(req, res, next) {
    var experience = req.query.experience;
    if(experience) {
      var result = skillz.filter(function(elem) {
        return elem.experience === experience;
      });
      res.json(result);
    }
    else {
      res.json(skillz);
    }
  },
  postSkillz: function(req, res, next) {
    res.json(skillz.push(req.body));
  },
  getSecret: function(req, res, next) {
    res.json(secret);
  }


};
