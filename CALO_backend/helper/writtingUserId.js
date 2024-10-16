const fs = require("fs").promises;
const path = require("path");

async function writingUserId(randomNumber, readyIn, status) {
 
  try {
    // Path where the result will be saved
    const filePath = path.join("./", "data", "userIdLookUp.json");
    let fileExists = false;
    try {
      await fs.access(filePath);
      fileExists = true;
    } catch (err) {
      fileExists = false; // File doesn't exist
    }

   
    let jsonData = [];
    if (fileExists) {
      const fileContent = await fs.readFile(filePath, "utf8");
      if (fileContent) {
        jsonData = JSON.parse(fileContent);
      }
    }
   
    const newPost = {
      uniqueId: randomNumber,
      status: status,
      readyIn: readyIn,
    };

    jsonData.push(newPost); // Append new post

    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8");

    return "ID saved to file, task is processing...";
  } catch (errors) {
    console.log(errors);
  }
}
module.exports = writingUserId;
