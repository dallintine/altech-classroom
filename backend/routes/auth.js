const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    // Hash the password provided in the request body using the generated salt.
    const hashedPasswd = await bcrypt.hash(req.body.password, salt);

    // Create a new User object with the provided username, email, and hashed password.
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPasswd,
    });

    // Save the new user to the database.
    const user = await newUser.save();
    // send a success response with the saved user object
    res.status(200).json(user);
  } catch (error) {
    // If an error occurs during the registration process, send a 500 status code and the error information as a JSON response.
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    // Find the user in the database based on the provided username.
    const user = await User.findOne({ username: req.body.username });
    // If the user is not found, return an error response with status code 400.
    !user && res.status(400).json("Wrong username and or password");
    // Compare the provided password with the stored password using bcrypt.
    const validated = await bcrypt.compare(req.body.password, user.password);
    // If the password is not valid, return an error response with status code 400.
    !validated && res.status(400).json("Wrong username and or password");
    // If the login is successful, remove the password field from the user object and return the remaining data.
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
