const jwt = require('jsonwebtoken');

const { accessTokenKey } = require('../config/envVars');

// This is middleware to check the jwt provided in the req headers is authenticate or not
// In case of token is not valid then sending error for authentication
const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, accessTokenKey);
        req.user = decode
        next();
    }
    catch(error) {
        res.status(401).json({
            error: 'User Authentication Failed!',
        });
    }
}

module.exports = authenticate;
