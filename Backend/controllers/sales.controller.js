const Sales = require("../models/sales.model");

exports.create = (req, res) => {
  const sales = new Sales(req.body);
  sales.save((err, result) => {
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

  Sales.find()
    .populate("user")
    .populate("product")
    .sort([[sortBy, order]])
    .exec((err, sales) => {
      if (err) {
        return res.status(400).json({
          error: "Ventas no encontradas",
        });
      }
      res.json(sales);
    });
};

exports.listByUserId = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Sales.find({ user: req.body.user})
    .populate("product")
    .sort([[sortBy, order]])
    .exec((err, sales) => {
      if (err) {
        return res.status(400).json({
          error: "No se encontró el usuario",
        });
      }
      res.json(sales);
    });
};

exports.SalesById = (req, res, next, id) => {
    Sales.findById(id).exec((err, Sales) => {
    if (err || !Sales) {
      return res.status(400).json({
        error: "La venta no fue encontrado o no existe",
      });
    }
    req.Sales = Sales;
    next();
  });
};

// exports.bestSellers = (req, res) => {

//   Sales.find()
//     .populate("product")
//     .exec((err, sales) => {
//       if (err) {
//         return res.status(400).json({
//           error: "No se encontró el usuario",
//         });
//       }
//       console.log(sales);
//       res.json(sales);
//     });
// };