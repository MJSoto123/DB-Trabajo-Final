const mongoose = require("mongoose");
const categoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  }
});
//const Categories = ["cañas", "carretes", "sedales", "señuelos", "accesorios","equipamento"];

module.exports = mongoose.model("Categories", categoriesSchema);
