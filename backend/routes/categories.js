const router = require("express").Router();
const Category = require("../models/Category");

//Save Category
router.post("/", async (req, res) => {
  // Create a new instance of the Category model with the request body data
  const newCat = new Category(req.body);
  try {
    // Save the newly created category to the database
    const savedCat = await newCat.save();
    // Respond with a status of 200 and the saved category as JSON
    res.status(200).json(savedCat);
  } catch (error) {
    // If an error occurs during the saving process, respond with a status of 500 and the error as JSON
    res.status(500).json(error);
  }
});

//Get Category
router.get("/", async (req, res) => {
  try {
    // This line uses the Category.find() method to retrieve all categories asynchronously.
    const cats = await Category.find();
    // If the categories are successfully retrieved, the server responds with a 200 status code and sends the categories as a JSON response.
    res.status(200).json(cats);
  } catch (error) {
    // If an error occurs during the retrieval process, the server responds with a 500 status code and sends the error as a JSON response.
    res.status(500).json(error);
  }
});

module.exports = router;
