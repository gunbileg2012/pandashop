const Invoice = require("../models/Invoice");
const LineInvoice = require("../models/Line_invoice");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");

const unselect = {created_at: 0, invoice_id:0, client_id:0, status:0};

// INVOICE ЛИСТ БАЙДЛААР ХАРАХ
exports.getInvoices = asyncHandler(async (req, res, next) => {
  const { offset, limit, client_id } = req.body;
  invoice =  await Invoice.find().populate("lines.line_id", unselect);

  res.status(200).json({
    success: true,
    data: invoice,
  });

});

// INVOICE НЭГ НЭХЭМЖЛЭЛ ХАРАХ
exports.getInvoice = asyncHandler(async (req, res, next) => {
  const invoice = await Invoice.findById(req.params.id).populate("lines.line_id", unselect);

  if (!invoice) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: invoice,
  });

});

// INVOICE  НЭХЭМЖЛЭЛИЙН ТӨЛӨВ СОЛИХ
exports.statusInvoice = asyncHandler(async (req, res, next) => {
  const {id} =  req.params.id;
  const {invoice_status} =  req.body;

  const invoice = await Invoice.findByIdAndUpdate(id, {invoice_status}, {
    new: true,
    runValidators: true,
  });

  if (!invoice) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: invoice,
  });

});

// НЭХЭМЖЛЭЛЭЭС БҮТЭЭГДЭХҮҮН УСТГАХ
exports.removeLine = asyncHandler(async (req, res, next) => {
  const { id } = req.params.id;
  const invoiceLine = await LineInvoice.findByIdAndUpdate(id, {line_status: "CANCELL"}, {
    new: true,
    runValidators: true,
  });
})

