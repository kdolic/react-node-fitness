const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

const restricted = (req, res, next) => {
    const token = req.headers.authorization
  
    if(!token){
      res.status(401).json("Token Required")
    } else {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err){
          res.status(401).json("Token Invalid")
        }else{
          req.decodedToken = decoded
          next()
        }
      })
    }
  };

module.exports= { restricted }