const getSinglePostRouter = require("express").Router();
const getSinglePostController = require("../controller/getSinglePostController");


getSinglePostRouter.get(
  "/getsingleposts/:id", // Define route with `id` as a URL parameter
  async (req, res) => {
    try {
      const postId = req.params.id; // Extract `id` from URL params
     
     getSinglePostController.Execute(postId, req, res);
      
    } catch (errors) {
      res.status(400).json({ error: errors.message });
    }
  })

module.exports = getSinglePostRouter;
