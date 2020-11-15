
const express = require("express");

const {
  getUsers,
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
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = router;
