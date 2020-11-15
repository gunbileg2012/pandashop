const ProductOptionData = require("../models/Product_options_data");
const MyError = require("../utils/myError");
// const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler = require("express-async-handler");

exports.getProductOptionDatas = asyncHandler(async (req, res, next) => {
  const productOptionData = await ProductOptionData.find();

  res.status(200).json({
    success: true,
    data: productOptionData,
  });
});

exports.getProductOptionData = asyncHandler(async (req, res, next) => {
  const productOptionData = await ProductOptionData.findById(req.params.id);

  if (!productOptionData) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: productOptionData,
  });

});

exports.createProductOptionData = asyncHandler(async (req, res, next) => {
  const { product_id, option_id} = req.body;
  const productOptionData = await ProductOptionData.create(req.body);

  res.status(200).json({
    success: true,
    data: productOptionData,
  });

});

exports.updateProductOptionData = asyncHandler(async (req, res, next) => {
  const productOptionData = await ProductOptionData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!productOptionData) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: productOptionData,
  });
});

exports.deleteProductOptionData = asyncHandler(async (req, res, next) => {
  const productOptionData = await ProductOptionData.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!productOptionData) {
    throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: productOptionData,
  });
});
