const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AuthRoute = require('./src/routes/auth');
const NewsRoute = require('./src/routes/news');
const authenticate = require('./src/middleware/authenticate');
const { port, databaseLink } = require('./src/config/envVars');

const app = express();

// mongoose to connect to mongodb database
mongoose.connect(databaseLink)
.then(() => {console.log('now connected to DB')})
.catch((err) => {console.log(err)});


//miidleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(cookieParser());

// using authRoute router for /api/auth/* api endpoints
app.use('/api/auth', AuthRoute);

//  using NewsRoute for /api/news/* api endpoints
app.use('/api/news', authenticate, NewsRoute);


// Example to show use of middleware for authentication purpose to access protected APIs which can only be seen by authorised users.
// not using /api/users for anything
app.get('/api/users', authenticate, (req, res, next) => {
  res.status(200).json({
    message: 'User successfully authenticated to see users page!'
  })
})

// server is listening at the port configured in .env file
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
