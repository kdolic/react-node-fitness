const { findBy } = require('../auth/auth-model')

const checkUsernameExists = async (req, res, next) => {
    const checkUser = await findBy({ username: req.body.username }).first()
    
    if(checkUser.username === req.body.username) {
        res.status(401).json({ message: "Invalid credentials" });
    } else {
      next();
    }
  };

// const checkUsernameFree = async (req, res, next) => {
//     const checkUsername = await findBy({ username: req.body.username}).first()

//     if(checkUsername.length >= 1) {
//         res.status(422).json({ message: "Username exists already" })
//     } else {
//         next()
//     }
// };

module.exports = {
    checkUsernameExists,
    // checkUsernameFree
}