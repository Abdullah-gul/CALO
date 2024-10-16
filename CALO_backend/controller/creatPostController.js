const fetachRandomPhotos = require("../helper/fetchUnsplashApi");
const  generateRandomNumber = require('../helper/generateRandomNumbers')
const writtingUserId = require('../helper/writtingUserId') 
class creatPostController {
  static async Execute(req, res) {
    try {
      const{email,readyIn,status} = req.body
      
      const randomNumber = await generateRandomNumber()
      writtingUserId(randomNumber,readyIn,status)
       fetachRandomPhotos(email , randomNumber,readyIn);

     
      res.json({readyIn,email,randomNumber})
      
    } catch (errors) {
      res.status(500).send("Error fetching data");
    }
  }
}

module.exports = creatPostController;
