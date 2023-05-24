const router = require("express").Router();
const CartControllers = require("../controllers/Cart");
const authenticate = require("../middlewares/authenticate");

router.get("/cart", authenticate, CartControllers.getCartItems);

router.post('/cart/add', authenticate, CartControllers.addItemToCart)

router.delete('/cart/remove', authenticate, CartControllers.deleteItemCart)

module.exports = router;
