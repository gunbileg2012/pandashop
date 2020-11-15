
const express = require("express");

const {
  getInvoices,
  getInvoice,
  statusInvoice,
  removeLine,
} = require("../controller/invoice");

const router = express.Router();

//"/api/v1/Cart"
router.route("/")
.get(getInvoices)

router.route("/:id")
.get(getInvoice)
.put(statusInvoice)
.delete(removeLine)

module.exports = router;
