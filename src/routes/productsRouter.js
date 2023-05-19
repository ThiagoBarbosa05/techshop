const router = require("express").Router();
const ProductControllers = require("../controllers/Product");

router.get("/", ProductControllers.getProducts);

router.get('/product/:id', ProductControllers.getProductById)

module.exports = router;
