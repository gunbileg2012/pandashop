const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: [true, "Ангилалын нэрийг оруулна уу"],
    trim: true,
  },
  category_icon: {
    type: String,
    required: [true, "Ангилалын icon оруулаагүй байна"],
  },
  category_active: {
    type: Boolean,
    default: true
  },
  items:[{
      id: {
        type: String,
        required: [true, "Барааны дугаар бичээгүй байна"],
        trim: true,
      },
      product_name: { 
        type: String, 
        required: [true, "Барааны нэрийг оруулна уу"],
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
  }],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Categories", CategorySchema);
