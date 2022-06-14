const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { secret } = require('../middleware/jwt.config');

module.exports.test = (req,res) => {
  res.json({ msg: 'usaio autorizado'})
}

module.exports.registerNewUser = (req, res) => {
  console.log('trying to create')
  const user = new User(req.body);
  user.save()
    .then(() => {
        res.status(201).json({ msg: "Usario Registrado", user: user });
    })
    .catch(err => res.status(400).json(err));
};

module.exports.loginUser = (req, res) => {
  console.log(req.body.email );
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user === null) {
        res.status(400).json({ msg: "Email or Password incorrect" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(passwordIsValid => {
            if (passwordIsValid) {
                const payload = {
                    _id: user._id,
                };
                const myJWT = jwt.sign(payload, secret);
              res
              .cookie("usertoken", myJWT, secret, {
                  httpOnly: true
                })
                res.status(200).json({ msg: "okay" });
            } else {
              res.status(400).json({ msg: "Email or Password incorrect" });
            }
          })
          .catch(err => res.status(400).json({ msg: "Email or Password incorrect" }));
      }
    })
    .catch(err => res.status(400).json(err));
};