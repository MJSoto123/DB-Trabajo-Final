const Product = require("../models/product.model");
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
  const product = new Product(req.body);
  product.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json(result);
  });
};

//BORRAR !!!!
// exports.createPack = (req, res) => {
//   for (var i = 0; i < req.body.length ; i++) {
//     let product = new Product(req.body[i]);
//     product.save();
//   }
//   return res.json({message: "Create successfully"});
// };

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  Product.find()
    .sort([[sortBy, order]])
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Productos no encontrados."
        });
      }
      res.json(products);
    });
};

exports.checkStock = (req,res) => {
  const {id, cant} = req.body;
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe."
      });
    }
    if( Product.stock < cant){
      return res.status(400).json({
        status: false
      });
    }
    return res.json({
      status: true
    });
  });
}

exports.modifyStock = (req,res) => {
  const {id, cant, operation} = req.body;
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe."
      });
    }
    if(operation == "+"){
      Product.stock = Product.stock + cant;
    }
    else{
      Product.stock = Product.stock - cant;
    }
    Product.save();
    return( res.json({
      message: "Operación realizada con éxito.",
      Product
    }))
  });
}

exports.ProductById = (req, res, next, id) => {
  Product.findById(id).exec((err, Product) => {
    if (err || !Product) {
      return res.status(400).json({
        error: "El producto no fue encontrado o no existe."
      });
    }
    req.Product = Product;
    next();
  });
};