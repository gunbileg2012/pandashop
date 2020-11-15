const ProductOption = require("../models/Product_options");
const MyError = require("../utils/myError");
// const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler = require("express-async-handler");

exports.getproductOptions = asyncHandler(async (req, res, next) => {
  const productOption = await ProductOption.find();

  res.status(200).json({
    success: true,
    data: productOption,
  });
});

exports.getproductOption = asyncHandler(async (req, res, next) => {
  const productOption = await ProductOption.findById(req.params.id);

  if (!productOption) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: productOption,
  });

});

exports.createproductOption = asyncHandler(async (req, res, next) => {
  const productOption = await ProductOption.create(req.body);

  res.status(200).json({
    success: true,
    data: productOption,
  });

});

exports.updateproductOption = asyncHandler(async (req, res, next) => {
  const productOption = await ProductOption.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!productOption) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: productOption,
  });
});

exports.deleteproductOption = asyncHandler(async (req, res, next) => {
  const productOption = await ProductOption.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!productOption) {
    throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: productOption,
  });
});
