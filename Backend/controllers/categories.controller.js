const Categories = require("../models/categories.model");
const formidable = require("formidable");

exports.create = (req, res) => {
  const categories = new Categories(req.body);
  categories.save((err, result) => {
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

  Categories.find()
    .sort([[sortBy, order]])
    .exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categorias no encontrados."
        });
      }
      res.json(categories);
    });
};