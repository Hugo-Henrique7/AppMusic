const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './.env' });

/* function verify(userId, userName) {
  const token = jwt.sign({ id: userId, username: userName }, env.SECRET);
  return token;
} */

console.log(process.env.SECRET);
