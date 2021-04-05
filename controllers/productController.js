const Product = require("../models/Product");

// @desc    Fetch all products
// @route   GET /v1/api/products
// @access  Public
const getProducts = async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
};

// @desc    Fetch single product
// @route   GET /v1/api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

// @desc    Delete a product
// @route   DELETE /v1/api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

// @desc    Create a product
// @route   POST /v1/api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
  const product = new Product({
    name: "Sample name",
    productImages: ["/images/sample1.jpg", "/images/sample2.jpg"],
    currency: "doller",
    price: 0,
    retailPrice: 0,
    description: "lorem ipsum lorem ",
    ratingAvg: 5,
    ratingCount: 5,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
};

module.exports = {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
};
