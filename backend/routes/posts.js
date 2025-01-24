const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  // Creates a new instance of the Post model with the request body data.
  const newPost = new Post(req.body);
  try {
    // Attempts to save the newPost object to the database.
    const savedPost = await newPost.save();
    // If the post is successfully saved, sends a JSON response with the saved post data and a 200 status code.
    res.status(200).json(savedPost);
  } catch (error) {
    // If an error occurs during the saving process, sends a JSON response with the error object and a 500 status code.
    res.status(500).json(error);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    // Retrieve the post with the specified ID from the database
    const post = await Post.findById(req.params.id);
    // Check if the username of the post matches the username provided in the request body
    if (post.username === req.body.username) {
      try {
        // Update the post with the specified ID
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            // Set the fields of the post to the values provided in the request body
            $set: req.body,
          },
          // Return the updated post instead of the old one
          { new: true }
        );
        // Respond with the updated post as JSON
        res.status(200).json(updatedPost);
      } catch (error) {
        // Respond with an error if there was a problem updating the post
        res.status(500).json(error);
      }
    } else {
      // Respond with an unauthorized status and error message if the post doesn't belong to the user

      res.status(401).json("You can update only your post!");
    }
  } catch (error) {
    // Respond with an error if there was a problem retrieving the post from the database

    res.status(500).json(error);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    // Retrieve the post with the specified ID from the database
    const post = await Post.findById(req.params.id);
    // Check if the username of the post matches the username provided in the request body
    if (post.username === req.body.username) {
      try {
        // delete the post with the specified ID
        await post.delete();
        // If the post is successfully deleted, send a JSON response  and a 200 status code.
        res.status(200).json("Post has been deleted...");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    // Retrieving a post by its ID using the 'findById' method of the 'Post' model.
    const post = await Post.findById(req.params.id);
    // Sending a successful response with status code 200 and the retrieved post as JSON.
    res.status(200).json(post);
  } catch (error) {
    // Handling any errors that occur during the process and sending an error response with status code 500 and the error message as JSON.
    res.status(500).json(error);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  // Extract the "user" query parameter from the request.
  const username = req.query.user;
  // Extract the "cat" query parameter from the request.
  const catName = req.query.cat;
  try {
    let posts;
    // If the "username" query parameter is provided, find posts by that user.
    if (username) {
      posts = await Post.find({ username });
      // If the "catName" query parameter is provided, find posts in that category.
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      // If neither "username" nor "catName" are provided, find all posts.
      posts = await Post.find();
    }
    // Respond with the retrieved posts in JSON format.
    res.status(200).json(posts);
  } catch (error) {
    // If an error occurs during the process, respond with a 500 status code and the error message.
    res.status(500).json(error);
  }
});

module.exports = router;
