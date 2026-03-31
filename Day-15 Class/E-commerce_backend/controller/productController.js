const Products = require("../model/ProductModel");

//add product
const addProduct = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      cost: req.body.cost,
      description: req.body.description,
      imageSrc: req.body.imageSrc,
      categories: req.body.categories,
      ratings: req.body.ratings,
    };
    await Products.create(newProduct);
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to added Product" });
  }
};

//get product based On ID
const getProduct = async (req, res) => {
  try {
    const findProduct = await Products.findById(req.params.id);
    if (!findProduct) {
      res.status(404).json({ message: "Product Not Found.." });
    }
    res.status(200).json({ findProduct, message: "Product found" });
  } catch (error) {
    res.status(500).json({ message: "server not found" });
  }
};

//delete product details
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(400).json({ message: "product not found" });
    }

    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "server not found" });
  }
};
//edit product Details

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.productId,
      {
        name: req.body.name,
        cost: req.body.cost,
        description: req.body.description,
        imageSrc: req.body.imageSrc,
        categories: req.body.categories,
        ratings: req.body.ratings,
      },
      { new: true },
    );

    if (!updatedProduct) {
      res.status(400).json({ message: "product not found" });
    }
    res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "server not found" });
  }
};

//get all products

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();

    res.status(200).json({ allProducts });
  } catch (error) {
    res.status(500).json({ message: "failed to get products" });
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
};
