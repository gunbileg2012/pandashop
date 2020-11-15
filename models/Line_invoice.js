const mongoose = require("mongoose");

const LineInvoiceSchema = new mongoose.Schema({
  invoice_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Invoice'
  },
  client_id: {
    type: String,
    required: [true],
  },
  line_status: {
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
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("lineInvoice", LineInvoiceSchema);
