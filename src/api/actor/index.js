var { Router } = require('express');
const router = new Router();
const controller = require('./actors.controller');

router.post('/addActor',controller.addActor);
router.get('/findActorList',controller.findActorList);

module.exports = router;