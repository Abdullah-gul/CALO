// const fetachRandomPhotos = require("../helper/fetchUnsplashApi");
// const generateRandomNumber = require("../helper/generateRandomNumbers");
const getFileData = require("../helper/getFileData");
class getAllPostController {
  static async Execute(req, res) {
    try {
      
      const myData =  await  getFileData()

      // console.log([JSON.parse(myData)])
        // console.log(myData)

        res.status(200).send(JSON.parse(myData))
    } catch (errors) {
      console.log(errors)
    }
  }
}

module.exports = getAllPostController;
