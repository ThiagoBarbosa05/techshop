const router = require("express").Router();
const authenticate = require("../middlewares/authenticate");
const UserControlles = require("../controllers/User");

const RegisterValidator = require("../validators/authValidators");

router.post("/signup", RegisterValidator.signup, UserControlles.Register);

router.get("/profile", authenticate, UserControlles.Profile);

router.put("/update/user", authenticate, UserControlles.UpdateUser);

router.delete("/delete/user", authenticate, UserControlles.DeleteUser);

module.exports = router;
