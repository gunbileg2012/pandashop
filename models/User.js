const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fistname: {
    type: String,
  },
  address: {
    type: String,
    default: null
  },
  bank_name: {
    type: String,
    default: null
  },
  bank_balance: {
    type: String,
    default: null
  },
  phone: {
    type: Number,
    required: [true, "Утас бичээгүй байна"]
  },
  password: {
    type: String,
    required: [true, "Нууц үг бичээгүй байна"]
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

module.exports = mongoose.model("User", UserSchema);
