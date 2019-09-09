var { Router } = require('express')
var movies = require('./movies');
var actor = require('./actor');
const router = new Router();

router.use('/api/movie',movies);
router.use('/api/actor',actor);

module.exports = router;