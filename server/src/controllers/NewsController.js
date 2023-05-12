const { newsApiKey } = require('../config/envVars');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(newsApiKey);

// newsFeed function to get news data from newsapi library and send to client
const newsFeed = (req, res, next) => {
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'in'
      })
      .then(response => {
        res.status(200).json({
            articles: response.articles
        });
      })
      .catch(error => {
        res.status(500).json({
            error
        })
      })

}

module.exports = {
    newsFeed
}
