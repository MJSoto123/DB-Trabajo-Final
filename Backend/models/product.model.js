const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    unique: [true, "Este producto ya se registró previamente."],
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectID,
    ref:'Categories',
    required: 'Hubo un error autentificando la categoria.',
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});
//const Categories = ["cañas", "carretes", "sedales", "señuelos", "accesorios","equipamento"];

module.exports = mongoose.model("Product", productSchema);
