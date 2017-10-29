var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exam = mongoose.model('testing');

module.exports = function (app, config) {
    app.use('/api', router);

 router.post('/users', function (req, res, next) {
        console.log('Create User', 'verbose');
        var user = new Exam(req.body);
        user.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
           return next(err);
        });
      })
  
router.get('/user', function (req, res, next) {
        console.log('Get User', 'verbose');
        var query = Exam.find()
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