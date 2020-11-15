
const express = require("express");

const {
  getCategoriess,
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} = require("../controller/categories");

const router = express.Router();

//"/api/v1/categories"
router.route("/")
.get(getCategoriess)
.post(createCategories);

router.route("/:id")
.get(getCategories)
.put(updateCategories)
.delete(deleteCategories);

module.exports = router;
