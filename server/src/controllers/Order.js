const OrderModels = require("../models/Order");
const ProdutcModels = require("../models/Product");


module.exports = {
  createOrder: async (req, res) => {
    const { items } = req.body;
    let amount = 0;
    items.forEach((item) => (amount += item.price));
    const data = {
      user_id: req.user.id,
      total: amount,
      created_at: new Date(),
    };

    const order = await OrderModels.createOrder(data, items);

    res.json({ order, amount });
  },

  getOrders: async (req, res) => {
    const { id } = req.user;

    try {
      const orders = await OrderModels.getOrders(id);
      const products = await OrderModels.getProductsFormOrder()
    
      res.json({orders, products});
    } catch (err) {
      res.json({ msg: "Unable to retrieve orders" });
    }
  },
};
