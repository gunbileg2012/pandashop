const Categories = require("../models/Categories");
const MyError = require("../utils/myError");
// const asyncHandler = require("../middleware/asyncHandler");
const asyncHandler = require("express-async-handler");

exports.getCategoriess = asyncHandler(async (req, res, next) => {
  const categories = await Categories.find();

  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Categories.findById(req.params.id);

  if (!categories) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: categories,
  });

});

exports.createCategories = asyncHandler(async (req, res, next) => {
  const categories = await Categories.create(req.body);

  res.status(200).json({
    success: true,
    data: categories,
  });

});

exports.updateCategories = asyncHandler(async (req, res, next) => {
  const categories = await Categories.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!categories) {
    throw new MyError(req.params.id + " ID-тэй бараа байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.deleteCategories = asyncHandler(async (req, res, next) => {
  const categories = await Categories.findByIdAndDelete(req.params.id);

  if (!categories) {
    throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: categories,
  });
});
