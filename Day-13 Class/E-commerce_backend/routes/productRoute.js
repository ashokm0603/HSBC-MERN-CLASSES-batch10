const {
  addProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
} = require("../controller/productController");

const express = require("express");
const router = express.Router();

router.post("/add-product", addProduct);
router.delete("/delete-product/:id", deleteProduct);
router.get("/get-allproducts", getAllProducts);
router.get("/get-product/:id", getProduct);
router.put("/update-product/:productId", updateProduct);

module.exports = router;
