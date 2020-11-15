
const express = require("express");

const {
  getproductOptions,
  getproductOption,
  createproductOption,
  updateproductOption,
  deleteproductOption,
} = require("../controller/productOption");

const router = express.Router();

//"/api/v1/productOption"
router.route("/")
.get(getproductOptions)
.post(createproductOption);

router.route("/:id")
.get(getproductOption)
.put(updateproductOption)
.delete(deleteproductOption);

module.exports = router;
