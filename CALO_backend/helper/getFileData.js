const fs = require('fs');
const path = require('path');



async function getFileData() {
    
   
    const filePath = path.join("./", "data", "usersData.json");
    // Create a read stream

    return new Promise((resolve, reject) => {
        let fileData = ''; // Variable to accumulate chunks
    
        // Create a read stream
        const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    
        // Event when data is available in chunks
        readStream.on('data', (chunk) => {
          fileData += chunk; // Accumulate chunks
        });
    
      
        readStream.on('end', () => {
          resolve(fileData); // Resolve the Promise with the accumulated data
        });
    
        
        readStream.on('error', (err) => {
          reject(`Error reading file: ${err}`);
        });
      });
    



}


module.exports = getFileData 