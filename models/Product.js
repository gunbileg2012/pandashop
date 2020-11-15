const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Барааны нэрийг оруулна уу"],
    trim: true,
  },
  taobao: {
    type: String,
    required: [true, "Барааны холбоос оруулаагүй байна"],
    trim: true,
  },
  product_price: {
    type: Number,
    required: [true, "Барааны үнэ бичээгүй байна"],
  },
  product_image: {
    type: String,
    required: [true, "Зургын холбоос оруулаагүй байна"],
  },
  product_active: {
    type: Boolean,
    default: true
  },
  product_status: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
