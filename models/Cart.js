const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  client_id: {
    type: String,
    required: [true],
  },
  name: {
    type: String,
    required: [true],
    trim: true,
  },
  image: {
    type: String,
    required: [true],
  },
  product_id: {
    type: String,
    required: [true],
  },
  option_id: {
    type: String,
    default: null,
  },
  option_image: {
    type: String,
  },
  option_text: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    required:[true]
  },
  status: {
    type: Boolean,
    default: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
