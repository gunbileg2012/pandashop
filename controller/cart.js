const Cart = require("../models/Cart");
const Invoice = require("../models/Invoice");
const LineInvoice = require("../models/Line_invoice");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");

exports.getCarts = asyncHandler(async (req, res, next) => {
  const cart = await Cart.find().skip(0).limit(50);

  res.status(200).json({
    success: true,
    data: cart,
  });
});

exports.getCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findById(req.params.id);

  if (!cart) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: cart,
  });

});

exports.createCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.create(req.body);

  res.status(200).json({
    success: true,
    data: cart,
  });

});

exports.updateCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!cart) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: cart,
  });
});

exports.deleteCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findByIdAndUpdate(req.params.id,  {
    status: false
  }, {
    new: true,
    runValidators: true,
  });

  if (!cart) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: cart,
  });
});


exports.createInvoice =  asyncHandler(async (req, res, next) => {

  const {id} =  req.params;

  lines = await Cart.find({client_id: id}, {_id:0, created_at:0, status: 0});
  if(!Array.isArray(lines) || lines.length  === 0) throw new MyError("Not Fount lines", 400)
  
  let invoice = await Invoice.create({
    client_id:id,
    invoice_status: "UNPAID",
    total : 0
  });
  
 let LINES = lines.map(item => {
    return {
      ...item._doc,
      client_id:id,
      invoice_id: invoice._id,
      line_status: "UNPAID"
    }
  });
  console.log(LINES);

  LINES = await LineInvoice.insertMany(LINES);
  LINES = LINES.map(item => { return {
      line_id: item._id,
  }});

  invoice = await Invoice.findOneAndUpdate({_id:invoice._id},
    { $push: {"lines" : [...LINES]} },{
      new: true,
      runValidators: true,
  }); 

  if(invoice) {
    await Cart.updateMany({client_id: id}, { $set: { status: false } });
  }

  res.status(200).json({
      success: true,
      data: lines,
  });

})
