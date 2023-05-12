const dotenv = require('dotenv');

dotenv.config();

// This file is for accessing .env variables from .env file and to make it available in the entire project.
// Reason for creating this file is so that no need to import dotenv and config in every file which needs to use .env variables.
// This is done for better practice also for the efficiency of the server and to ignore extra imports wherever possible.

module.exports = {
    port: process.env.PORT || 3000,
    databaseLink: process.env.DATABASE_LINK,
    accessTokenKey: process.env.ACCESS_TOKEN_KEY,
    tokenExpiresTime: process.env.TOKEN_EXPIRES_IN,
    newsApiKey: process.env.NEWS_API_KEY,
};
