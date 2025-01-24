const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can only update your account!");
  }
});

// This code represents a route handler for deleting a user's account based on their ID.
router.delete("/:id", async (req, res) => {
  // Check if the user making the request matches the user ID specified in the request parameters
  if (req.body.userId === req.params.id) {
    try {
      // Find the user with the specified ID
      const user = await User.findById(req.params.id);
      try {
        // Delete all posts associated with the user
        await Post.deleteMany({ username: user.username });
        // Delete the user's account
        await User.findByIdAndDelete(req.params.id);
        // Return a success message indicating that the user has been deleted
        res.status(200).json("User has been deleted...");
      } catch (error) {
        // Return an error response if there was an issue deleting the posts or user account
        res.status(500).json(error);
      }
    } catch (error) {
      // Return a not found response if the user with the specified ID was not found
      res.status(404).json("User not found!");
    }
  } else {
    // Return an unauthorized response if the user making the request does not match the user ID
    res.status(401).json("You can only delete  your account!");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    // Find the user with the provided ID in the database
    const user = await User.findById(req.params.id);
    // Destructure the user object to extract the password field and store the rest of the fields in the 'others' variable
    const { password, ...others } = user._doc;

    // Send a JSON response with the 'others' object, excluding the password field
    res.status(200).json(others);

    res.status(200).json(others);
  } catch (error) {
    // If an error occurs during the process, send a 500 status code and the error message as a JSON response
    res.status(500).json(error);
  }
});

module.exports = router;
