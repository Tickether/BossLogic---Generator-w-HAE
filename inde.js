const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_PATH = __dirname
const jsonFolder = `${BASE_PATH}/output/metadata/yhh/Draken`//`${BASE_PATH}/cache'D:\renameScript\'; // Path to the JSON folder
const imageFolder = `${BASE_PATH}/output/images`
const destinationFolder = `${BASE_PATH}/output/images/yhh`

// Create the destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder);
}

// Function to extract the image filename from the URL
function getImageFilename(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

// Read the JSON files in the JSON folder
fs.readdirSync(jsonFolder).forEach(jsonFile => {
  if (jsonFile.endsWith('.json')) {
    const jsonFilePath = path.join(jsonFolder, jsonFile);
    const jsonData = require(jsonFilePath); // Read the JSON data

    const imageFilename = getImageFilename(jsonData.image);
    const imageFilePath = path.join(imageFolder, imageFilename);

    if (fs.existsSync(imageFilePath)) {
      // If the image file exists, move it to the destination folder
      const destinationPath = path.join(destinationFolder, imageFilename);
      fs.renameSync(imageFilePath, destinationPath);
      console.log(`Moved ${imageFilename} to the destination folder.`);
    } else {
      console.log(`${imageFilename} not found in the image folder.`);
    }
  }
});

console.log('Process completed.');