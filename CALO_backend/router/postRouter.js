const postRouter =require("express").Router();
const creatPostController = require("../controller/creatPostController")
const { body, validationResult } = require("express-validator");

postRouter.post("/post", 
    body("email").isEmail(),
    (req, res) => {
      
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() });
      } else {
         
        creatPostController.Execute(req, res);
      }
    });
    

module.exports = postRouter;
