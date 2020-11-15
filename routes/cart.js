
const express = require("express");

const {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
  createInvoice,
} = require("../controller/cart");

const router = express.Router();

//"/api/v1/Cart"
router.route("/")
.get(getCarts)
.post(createCart);

router.route("/:id")
.post(createInvoice)
.get(getCart)
.put(updateCart)
.delete(deleteCart);

module.exports = router;
