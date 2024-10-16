const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");
const  writePostData = require('../helper/writtingPostData')

// finction to call unsplash api

async function fetchRandomPhotos(email,randomNumber,readyIn) {
  try {
   

    // Simulate a delay of 6 seconds before fetching the photo from api
    await new Promise((resolve) => setTimeout(resolve, readyIn ));

    // Fetch random photo from Unsplash
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: { query: "food", count: 1 }, // Query for food photos
      headers: {
        Authorization: `Client-ID ${process.env.AccessKey}`,
      },
    });
// console.log("fetching data")

let structuredData = response.data.map(item => {
    return Object.assign({}, item, {
      uniqueId: randomNumber, // Add new properties
      email: email
    });
  });

   

    writePostData(structuredData)

    return structuredData;
  } catch (error) {
    console.error("Error occurred during task:", error);
    throw error; 
  }
}

module.exports = fetchRandomPhotos;
