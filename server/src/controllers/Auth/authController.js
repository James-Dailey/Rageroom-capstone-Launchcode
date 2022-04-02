const User = require("../../model/user");
const {
  compareString,
  generateAccessToken,
  hashString,
  randomToken,
} = require("../../utils/helper");

class Auth {
  signup = async (req, res) => {
    try {
      let { name, email, phone, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          status: "error",
          message: "email already exist!",
        });
      }
      const passwordHash = await hashString(password);
      const data = await User.create({
        name,
        email,
        phone,
        password: passwordHash,
      });
      console.log(data, "dddddaaata");
      res.status(201).json({
        status: "success",
        message: "signup successfully!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };

  login = async (req, res) => {
    try {
      let { email, password } = req.body;
      let user = await User.findOne({ email });
      if (user && compareString(password, user.password)) {
        let accessToken = generateAccessToken(user);
        console.log(accessToken, "......");
        res.status(200).json({
          status: "success",
          data: { accessToken, user },
          message: "login Successfully!",
        });
      } else {
        return res.status(403).json({
          status: "error",
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "server error",
      });
    }
  };
}

module.exports = new Auth();
