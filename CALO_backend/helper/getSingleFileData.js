const fs = require("fs").promises;
const path = require("path");

async function getUserById(filePath, postId) {
  // Check if the file exists
  await fs.access(filePath);
  let jsonData = [];

  // Read and parse the existing data if the file exists
  const fileContent = await fs.readFile(filePath, "utf8");
  if (fileContent) {
    jsonData = await JSON.parse(fileContent);
  }
let singlePost = ""
  // Find the post by ID
      
  if (filePath === "data\\usersData.json") {
   
     singlePost =  jsonData.flat().find((post) => post.uniqueId === postId.randomNumber);
    return singlePost;
  } else {
   
     singlePost =  jsonData.find((post) => post.uniqueId === postId.randomNumber);
    return singlePost;
  }

  
}

async function getSingleFileData(postId) {
  

  try {
    const filePath = path.join("./", "data", "usersData.json");
    const userPostSuccessfull = await getUserById(filePath, postId);

    if (userPostSuccessfull) {
      // If post is found, return it
      
      return userPostSuccessfull;
    } else {
      const filePath = path.join("./", "data", "userIdLookUp.json");
      const userPostPending = await getUserById(filePath, postId);
      if (userPostPending) {
        return userPostPending;
      } else {

        return "user do not exist";
      }
    }
  } catch (err) {
    // Handle file not found or other errors
    console.error("Error accessing or reading the file:", err);
  }
}

module.exports = getSingleFileData;
