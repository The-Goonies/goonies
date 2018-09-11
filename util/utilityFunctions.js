var bcrypt = require('bcrypt');

exports.hashPass = function(pass) {
  bcrypt.hash(pass, saltRounds, function(err, hash) {
    if (err) {
      console.error(err);
    } else {
      return hash;
    }
  });
};
