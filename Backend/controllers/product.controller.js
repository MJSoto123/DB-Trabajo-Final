const Product = require("../models/product.model");
const Categories = require("../models/categories.model");

const formidable = require("formidable");

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

exports.create = (req, res) => {
  const data = req.body;
  var auxCat = data.category.split("-");
  // console.log(auxCat[0]);
  Categories.find({ category: auxCat[0], subcategory: auxCat[1] })
  .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "Categoria Invalida",
        });
      }
      let id = result[0]._id.toString();
      // console.log(id);
      data.category = id;
      // console.log(data);
      const product = new Product(req.body);
      product.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.json(result);
      });
    }
  );
};

// exports.create = (req, res) => {
//   const product = new Product(req.body);
//   product.save((err, result) => {
//     if (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//     return res.json(result);
//   });
// };

//BORRAR !!!!
// exports.createPack = (req, res) => {
//   for (var i = 0; i < req.body.length ; i++) {
//     let product = new Product(req.body[i]);
//     product.save();
//   }
//   return res.json({message: "Create successfully"});
// };

exports.list = (req, res) => {
  Product.find()
    .sort({ model : "asc"})
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Productos no encontrados.",
        });
      }
      res.json(products);
    });
};

exports.listStock = (req, res) => {
  Product.find()
    .sort({ stock : "desc"})
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Productos no encontrados.",
        });
      }
      res.json(products);
    });
};


exports.checkStock = (req, res) => {
  const { id, cant } = req.body;
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe.",
      });
    }
    if (Product.stock < cant) {
      return res.status(400).json({
        status: false,
      });
    }
    return res.json({
      status: true,
    });
  });
};

exports.modifyStock = (req, res) => {
  const { id, cant, operation } = req.body;
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe.",
      });
    }
    if (operation == "+") {
      Product.stock = Product.stock + cant;
    } else {
      Product.stock = Product.stock - cant;
    }
    Product.save();
    return res.json({
      message: "Operación realizada con éxito.",
      Product,
    });
  });
};

exports.ProductById = (req, res, next, id) => {
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe.",
      });
    }
    req.Product = Product;
    next();
  });
};

exports.getOffers = (req, res) => {
  Product.find().exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: "Productos no encontrados.",
      });
    }
    products.sort(function (a, b) {
      return a.discount > b.discount ? -1 : a.discount < b.discount ? 1 : 0;
    });

    const ans = [];
    for (var i = 0; i < 5; i++) {
      ans.push(products[i]);
    }

    // console.log(ans);
    res.json(ans);
  });
};

exports.modify = (req, res) => {
  const { id, model, discount, brand, description, category, price, stock } =
    req.body;
  Product.findOne({ id }, (error, product) => {
    if (error || !product) {
      return res.status(400).json({
        error: "Este producto no existe",
      });
    }

    product.model = model;
    product.discount = discount;
    product.brand = brand;
    product.description = description;
    product.category = category;
    product.price = price;
    product.stock = stock;
    product.save();

    return res.status(200).json({
      message: "Ok",
    });
  });
};