const User = require("../models/User");
const Invoice = require("../models/Invoice");
const LineInvoice = require("../models/Line_invoice");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find().skip(0).limit(50);

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: user,
  });

});

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
  });

});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!User) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id,  {
    status: false
  }, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй ээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: user,
  });
  
});
