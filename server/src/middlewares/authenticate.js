const JWT = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "not authorized" });

  try {
    const access_token = token.split(" ")[1];
    const decoded = JWT.verify(access_token, process.env.SECRET_KEY);

    req.user = decoded;
    next();
  } catch (err) {
   res.status(401).json({ msg: "the token provided is invalid" });
  }
};

module.exports = authenticate;
