
const express = require("express");

const {
  getCarts,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createInvoice,
} = require("../controller/user");

const router = express.Router();

//"/api/v1/User"
router.route("/")
.get(getUsers)
.post(createUser);

router.route("/:id")
.post(createInvoice)
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
