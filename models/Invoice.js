const mongoose = require("mongoose");
const InvoiceSchema = new mongoose.Schema({
  client_id: {
    type: String,
    required: [true],
  },
  invoice_status: {
    type: String,
    required: [true],
  },
  lines: [
    {
        line_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'lineInvoice'
        }
    }
  ],
  total: {
    type: Number,
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

module.exports = mongoose.model("Invoice", InvoiceSchema);
