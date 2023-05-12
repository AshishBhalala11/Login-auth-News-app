const { Router } = require('express');

const NewsController = require('../controllers/NewsController');

const router = Router();

// router for news feed
// base router /news

// in case of /feed API endpoint hit, will execute newsFeed method in NewsController 
router.get('/feed', NewsController.newsFeed);

module.exports = router;
