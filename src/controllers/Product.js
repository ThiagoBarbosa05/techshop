const ProdutcModels = require("../models/Product");

module.exports = {
  getProducts: async (req, res) => {
    const products = await ProdutcModels.getProducts();

    if (!products) return res.json({ msg: "Something went wrong" });

    res.json(products);
  },
  getProductById: async (req, res) => {
    const {id} = req.params

    try {
      const productId = parseInt(id)
      const product = await ProdutcModels.getProductById(productId)

      res.json(product)
    } catch (err) {
      console.log(err)
    }
    
  }
};
