var express = require('express'),
router = express.Router(),
logger = require('../../config/logger');
var mongoose = require('mongoose'),
Todo = mongoose.model('Todo');

module.exports = function (app, config) {
  app.use('/api', router);

  router.post('/todos', function (req, res, next) {
     logger.log('Create Todo', 'verbose');
    var todo = new Todo(req.body);
     todo.save()
     .then(result => {
    res.status(201).json(result);
     })
    .catch(err => {
     return next(err);
     })
   });
      
  router.get('/todo', function(req, res, next){
     logger.log('Get all todo', 'verbose');

      var query = Todo.find()
      .sort(req.query.order)
      .exec()
      .then(result => {
           if(result && result.length) {
          res.status(200).json(result);
      } else {
          res.status(404).json({message: "No Todos"});
      }
      })
      .catch(err => {
        return next(err);
      });
  })

router.get('/todos/:userId', function(req, res, next){
      logger.log('Get todo ' + req.params.userId, 'verbose');
              Todo.find({userId: req.params.userId})
                  .then(todo => {
                      if(todo){
                          res.status(200).json(todo);
                      } else {
                          res.status(404).json({message: "No todo found"});
                      }
                  })
                  .catch(error => {
                      return next(error);
                  });
          });   
             

router.put('/todos/:userId', function(req, res, next){
      logger.log('Update Todos', + req.params.userId,  'verbose');
 
          Todo.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true, multi:false})
              .then(todo => {
                  res.status(200).json(todo);
              })
              .catch(error => {
                  return next(error);
              });
      }); 
     

router.delete('/todos/:userId', function(req, res, next){
      logger.log('Delete User ', + req.params.userId,  'verbose');
 
          Todo.remove({ _id: req.params.userId })
              .then(user => {
                  res.status(200).json({msg: "Todo Deleted"});
              })
              .catch(error => {
                  return next(error);
              });
            }); 
}