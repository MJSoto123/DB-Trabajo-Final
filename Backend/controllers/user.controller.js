const User = require("../models/user.model");
const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Formulario HTML

// exports.create = (req, res) => {
//   let form1 = new formidable.IncomingForm()
//   form1.keepExtensions = true
//   form1.parse(req, (err, fields, files) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Image could not be uploaded"
//       })
//     }
//     const user = new User(fields);
//     if (files.photo) {
//       if (files.photo.size > 1000000) {
//         return res.status(400).json({
//           error: "Image should be lass than 1MB in size"
//         })
//       }
//       const types = ["image/jpeg","image/png","image/svg+xml"]
//       if (types.indexOf(files.photo.type) == -1 ) {
//         return res.status(400).json({
//           error: files.photo.type
//         })
//       }
//       user.photo.contentType = files.photo.type
//       user.photo.data = fs.readFileSync(files.photo.path)
//     }
//     user.save((err, result) => {
//       if (err) {
//         return res.status(400).json({
//           error: err,
//         });
//       }
//       return res.json(result);
//     });
//   })
// };

// Postman

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(result);
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  User.find()
    .select("-hashed_password")
    .select("-salt")
    .sort([[sortBy, order]])
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Usuarios no encontrados",
        });
      }
      res.json(users);
    });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "Este email no está registrado",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Contraseña incorrecta",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, names, surnames, email, role } = user;
    return res.json({
      token,
      user: { _id, names, surnames, email, role },
      domain: "EPCC",
    });
  });
};

exports.UserById = (req, res, next, id) => {
  User.findById(id).exec((err, User) => {
    if (err || !User) {
      return res.status(400).json({
        error: "El usuario no fue encontrado o no existe",
      });
    }
    req.User = User;
    next();
  });
};