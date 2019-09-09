var { Router } = require('express');
const router = new Router();
const controller = require('./movies.controller');

router.post('/addMovie',controller.addMovie);
router.put('/addMovie',controller.editMovie);
router.get('/findAllMovies',controller.findAllMovies);
router.get('/poster/:filename',controller.getFile);

module.exports = router;