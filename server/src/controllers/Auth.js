const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const UserModels = require("../models/User");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await UserModels.userAlreadyExists(email);
        if (!user)
          return done(null, false, { msg: "Email or password is incorrect!" });

        const match = await bcrypt.compare(password, user.password);
        if (!match)
          return done(null, false, { msg: "Email or password is incorrect!" });

        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UserModels.findUserById(id);
  done(null, user);
});
