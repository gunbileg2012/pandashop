const mongoose = require("mongoose");
const ProductOptionsSchema = new mongoose.Schema({
  option_name: {
    type: String,
    required: [false],
    trim: true,
  },
  option_image: {
    type: String,
    required: [false],
  },
  option_price: {
    type: Number,
    required: [true, "Захиалах сонголтын мөнгөн дүнг оруулаагүй байна"],
  },
  option_product_id: {
    type: String,
    required: [true, "Холбогдох барааны ID дугаар оруулаагүй байна"],
  },
  option_active: {
    type: Boolean,
    default: true
  },
  status: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ProductOptions", ProductOptionsSchema);
