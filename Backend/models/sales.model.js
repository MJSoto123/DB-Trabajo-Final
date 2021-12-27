const mongoose = require("mongoose");
const salesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref:'User',
    required: 'Hubo un error autentificando el usuario.',
  },
  product: {
    type: mongoose.Schema.Types.ObjectID,
    ref:'Product',
    required: 'Hubo un errror encontrando el producto.',
  },
  amount: {
    type: Number,
    default: 1,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model("Sales", salesSchema);
