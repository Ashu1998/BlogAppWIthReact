var express = require('express');

var router = express.Router();

// Require controller modules.
var to_do_controller = require('../controllers/todoController');

router.get('/todo/tasks', to_do_controller.tasks);

router.post('/todo/create', to_do_controller.create);

router.post('/todo/update', to_do_controller.update);

router.post('/todo/delete', to_do_controller.delete);

module.exports = router ;
