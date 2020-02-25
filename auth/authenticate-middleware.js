/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const Users = require('../users/users-model');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
  
  console.log('Inside authenticate-middleware.js');
  const {username, password } = req.headers;

    if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ you: 'shall not pass'});
        }
      })
      .catch(error => {
        res.status(500).json({ message: 'Ran into an unexpected error' });
      });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
