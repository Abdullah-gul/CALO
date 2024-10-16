const getPostRouter =require("express").Router();
const getAllPostController = require('../controller/getAllPostController')

getPostRouter.get("/getposts", 
   
    (req, res) => {
      
   try{
getAllPostController.Execute(req,res)

   }catch(errors){
     res.status(400).json(errors);
   }
         
      
      
    });
    

module.exports = getPostRouter;
