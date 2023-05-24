const router = require("express").Router();

const OrderControllers = require("../controllers/Order");
const authenticate = require("../middlewares/authenticate");

router.post("/cart/checkout", authenticate, OrderControllers.createOrder);

router.get('/user/orders', authenticate, OrderControllers.getOrders)

module.exports = router;
