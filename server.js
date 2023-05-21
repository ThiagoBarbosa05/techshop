require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
const morgan = require("morgan");
const JWT = require("jsonwebtoken");

const userRouter = require("./src/routes/userRouter");
const productRouter = require("./src/routes/productsRouter");
const cartRouter = require('./src/routes/cartRouter')
const orderRouter = require('./src/routes/checkoutRouter')

require("./src/controllers/Auth");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "testapiecommerce",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, (err) => {
      if (err) {
        res.send(err);
      }
      const token = JWT.sign({ id: user.id }, process.env.SECRET_KEY);
      return res.json(token);
    });
  })(req, res);
});

app.use(userRouter);
app.use(productRouter);
app.use(cartRouter)
app.use(orderRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("The server is listening 🚀.");
});
