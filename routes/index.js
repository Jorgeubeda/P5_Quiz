var express = require('express');
var router = express.Router();
const {models} = require("../models");
const Sequelize = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Belen&Jorge' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll()
    .then(quizzes => {
      res.render("quizzes", { quizzes });
    })
.catch(error => next(error))
});

module.exports = router;
