const CartModels = require("../models/Cart");
const ProdutcModels = require("../models/Product");

module.exports = {
  getCartItems: async (req, res) => {
    const cart = await CartModels.getCartItems(req.user.id);

    if (!cart) return res.json({ msg: "no items in cart" });
    res.json(cart);
  },
  addItemToCart: async (req, res) => {
    const { product_id, quantity } = req.body;

    const product = await ProdutcModels.getProductById(product_id);
    const user_id = req.user.id;
    const data = {
      user_id,
      product_id,
      quantity,
      subtotal: product.price * quantity,
    };

    const items = await CartModels.addItemToCart(data);

    if (!items) return res.json({ msg: "no items added to cart" });

    res.json(items);
  },
  deleteItemCart: async (req, res) => {
    const {id} = req.body
    try {
      const item = await CartModels.deleteItemCart(id);
      res.json(item)
    } catch (err) {
      res.status(500).json({ msg: "Unable to remove item from cart" });
    }
  },
};
