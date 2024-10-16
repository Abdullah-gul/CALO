const getSingleFileData = require("../helper/getSingleFileData");
class getSinglePostController {
  static async Execute(postId, req, res) {
    try {
      console.log(postId);
      let singlePost = [];
      singlePost = await getSingleFileData(JSON.parse(postId));

      res.status(200).send(singlePost);
    } catch (errors) {
      console.log(errors);
    }
  }
}

module.exports = getSinglePostController;
