
const express = require("express");

const {
  getProductOptionDatas,
  getProductOptionData,
  createProductOptionData,
  updateProductOptionData,
  deleteProductOptionData,
} = require("../controller/productOptionData");

const router = express.Router();

//"/api/v1/productOption"
router.route("/")
.get(getProductOptionDatas)
.post(createProductOptionData);

router.route("/:id")
.get(getProductOptionData)
.put(updateProductOptionData)
.delete(deleteProductOptionData);

module.exports = router;
