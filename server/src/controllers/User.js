const UserModels = require("../models/User");
const hashPassword = require("../lib/hashPassword");
const JWT = require("jsonwebtoken");
const {validationResult} = require('express-validator')

module.exports = {
  Register: async (req, res) => {

    const erros = validationResult(req)
    if(!erros.isEmpty()) return res.json({error: erros.mapped()})

    try {
      const { name, email, password } = req.body;

      const isUserAlreadyExist = await UserModels.userAlreadyExists(email);
      if (isUserAlreadyExist)
        return res.json({ msg: "The user already exist." });

      const hashedPassword = await hashPassword(password, 10);

      const user = await UserModels.Register(name, email, hashedPassword);
      let token = "";

      if (user) {
        req.session.user = user;
        token = JWT.sign({ id: user.id }, process.env.SECRET_KEY);
      }

      res.json({ user, token });
    } catch (err) {
      console.log(err);
    }
  },
  Profile: async (req, res) => {
    const { id } = req.user;
    try {
      const user = await UserModels.findUserById(id);

      res.json({
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      console.log(err);
    }
  },
  UpdateUser: async (req, res) => {
    const {id} = req.user
    const {name, email} = req.body

    try {
      const user = await UserModels.findUserById(id);
      let updateUser;
      if (user) {
        updateUser = await UserModels.updateUser(id, {name, email})
      }
      res.json(updateUser)

    } catch (err) {
      console.log(err)
    }
  },
  DeleteUser: async (req, res) => {
    const {id} = req.user

    await UserModels.deleteUser(id)

    res.json({msg: 'user deleted'})

  }
};
