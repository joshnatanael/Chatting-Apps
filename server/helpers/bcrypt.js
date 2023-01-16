const bcrypt = require('bcryptjs');

function hashPassword(password){
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hashedPassword){
  bcrypt.compareSync(password, hashedPassword);
}

module.exports = {hashPassword, comparePassword}