const express = require("express");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

const router = express.Router();

//"/api/v1/categories"
router.route("/")
.get(getProducts)
.post(createProduct);

router.route("/:id")
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct);

module.exports = router;
