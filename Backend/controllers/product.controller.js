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
  Categories.find({ category: auxCat[0], subcategory: auxCat[1] }).exec(
    (err, result) => {
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
    .populate("category")
    .sort({ model: "asc" })
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
    .populate("category")
    .sort({ stock: "desc" })
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

exports.ProductById = (req, res) => {
  const { id } = req.body;
  Product.findOne({ _id: id })
    .populate("category")
    .exec((err, product) => {
      if (err || !product) {
        return res.status(400).json({
          error: "El producto no fue encontrado o no existe.",
        });
      }
      return res.status(200).json(product);
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
      if (products[i].discount > 0) {
        ans.push(products[i]);
      }
    }

    // console.log(ans);
    res.json(ans);
  });
};

exports.modify = (req, res) => {
  const { _id, model, discount, brand, category, price, stock } = req.body;
  Product.findOne({ _id }, (error, product) => {
    if (error || !product) {
      return res.status(400).json({
        error: "Este producto no existe",
      });
    }
    var auxCat = category.split("-");
    Categories.find({ category: auxCat[0], subcategory: auxCat[1] }).exec(
      (err, cat) => {
        if (err) {
          return res.status(400).json({
            error: "Categoria Invalida",
          });
        }
        let id = cat[0]._id.toString();
        product.model = model;
        product.discount = discount;
        product.brand = brand;
        product.category = id;
        product.price = price;
        product.stock = stock;
        product.save();

        return res.status(200).json({
          message: "Ok",
          product,
        });
      }
    );
  });
};

exports.byCategoryName = (req, res) => {
  const {category} = req.body;
  var auxCat = category.split("-");
  Categories.find({ category: auxCat[0], subcategory: auxCat[1] }).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Categoria Invalida",
      });
    }
    // asdasdasdasd
    // asdasdasdasd
    // asdasdasdasddasdasd
    // asdasdasdasd

    const id_category = result[0]._id.toString();
    Product.find({ category: id_category })
      .populate("category")
      .exec((err, products) => {
        if (err) {
          return res.status(400).json({
            error: "Productos no encontrados.",
          });
        }
        console.log(products);
        products.sort(function (a, b) {
          return a.discount > b.discount ? -1 : a.discount < b.discount ? 1 : 0;
        });
        res.json(products);
      });
  })
    
    
  };

// exports.byCategoryID = (req, res) => {
//   const { id_category } = req.body;
//   Product.find({ category: id_category })
//     .populate("category")
//     .exec((err, products) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Productos no encontrados.",
//         });
//       }
//       console.log(products);
//       products.sort(function (a, b) {
//         return a.discount > b.discount ? -1 : a.discount < b.discount ? 1 : 0;
//       });
//       res.json(products);
//     });
// };

// const byCategoryIDE = async (id) => {
//   const id_category = id;
//   await Product.find({ category: id_category })
//     .populate("category")
//     .exec((err, products) => {
//       if (err) {
//         return ({
//           error: "Productos no encontrados.",
//         });
//       }
//       // console.log(products);
//       products.sort(function (a, b) {
//         return a.discount > b.discount ? -1 : a.discount < b.discount ? 1 : 0;
//       });
//       return products;
//     });
// };

// exports.allProductsbyCategoryID = (req, res) => {
//   Categories.find()
//     .sort([["category", "asc"]])
//     .exec((err, categories) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Categorias no encontrados.",
//         });
//       }
//       var aux = [];
//       var temp = { namecategory: "", products: [] };
//       var ide = "";
//       var namecat = "";
//       for (var i = 0; i < 1; i++) {
//         namecat = categories[i].category + "-" + categories[i].subcategory;
//         console.log(namecat);
//         temp.namecategory = namecat;
//         ide = categories[i]._id.toString();
//         // var prod = []
//         // byCategoryIDE(ide).then( (err,result)=>{
//         //   temp.product = result;
//         //   aux.push(temp);
//         // })        
//         // Product.find({ category: id }).populate("category").exec().then((err,result) => {
//         //   prod  = result;
//         // }
//         // );
//         // temp.products = prod;
//         Product.find({category: id}).populate("category").exec((err, products) => {
//           if (err) {
//             return res.status(400).json({
//               error: "Productos no encontrados.",
//             });
//           }
//           temp.products =  products;
//           aux.push(temp)
//           console.log(aux)
//         })
//       }
//       console.log(aux);
//       res.json(aux);
//     });
// };

exports.delete = (req, res) => {
  const { model } = req.body;
  Product.deleteOne({ model: model }).then((result, err) => {
    if (err) {
      return res.status(400).json({
        error: "El product no fue encontrado o no existe",
      });
    }
    return res.status(200).json({
      message: "Succes Delete",
      result,
    });
  });
};
