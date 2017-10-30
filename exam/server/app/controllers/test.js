//These are the variables needed for the routes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = mongoose.model('test');

//This is the function that declares the app and the config 
module.exports = function (app, config) {
    app.use('/api', router);

//This is the route for posting a document
 router.post('/users', function (req, res, next) {
        console.log('Create User', 'verbose');
        var user = new Test(req.body);
        user.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
           return next(err);
        });
      })

//This is the route for getting all the documents posted by the post route
router.get('/users', function (req, res, next) {
        console.log('Get User', 'verbose');
        var query = Test.find()
          .sort(req.query.order)
          .exec()
          .then(result => {
               if(result && result.length) {
              res.status(200).json(result);
          } else {
              res.status(404).json({message: "No users"});
          }
          })
          .catch(err => {
            return next(err);
          });
      })
	}