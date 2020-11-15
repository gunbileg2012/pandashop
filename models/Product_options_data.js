const mongoose = require("mongoose");
const ProductOptionsDataSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: [false],
    trim: true,
  },
  option_id: {
    type: String,
    required: [false],
  },
  is_active: {
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

module.exports = mongoose.model("ProductOptionsData", ProductOptionsDataSchema);
