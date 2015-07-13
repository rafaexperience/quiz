var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var infoController = require('../controllers/info_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',   quizController.answer);
router.get('/author',   infoController.author);

module.exports = router;
