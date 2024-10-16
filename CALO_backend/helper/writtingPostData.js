const fs = require("fs").promises;
const path = require("path");

async function writtingPostData(randomPhotos){

    try{

         // Path where the result will be saved
    const filePath = path.join("./", "data", "usersData.json");

  
// Save the response data to a file asynchronously
let fileExists = false;
        try {
            await fs.access(filePath);
            fileExists = true;
        } catch (err) {
            fileExists = false; // File doesn't exist
        }

        let jsonData = [];

        if (fileExists) {
            // Read and parse the existing data
            const fileContent = await fs.readFile(filePath, 'utf8');
            if (fileContent) {
                jsonData = JSON.parse(fileContent);
            }
        }

        // Append new data
        jsonData.push(randomPhotos);

        // Write the updated data back to the file
        await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8');


  console.log(`Task completed and result saved to ${filePath}`);

  return `Task completed and result saved to ${filePath}`
  

    }catch(errors){

console.log(errors)
    }

}


module.exports = writtingPostData