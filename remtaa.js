const fs = require('fs');
const path = require('path');

const BASE_PATH = __dirname;


const folder1 = `${BASE_PATH}/output/metadata/yhh/Draken` // Replace with the actual path to folder 1
const folder2 = `${BASE_PATH}/output/metadata/yhh/newNewDraken` // Replace with the actual path to folder 2

// Get the list of files in folder 1 and folder 2
const files1 = fs.readdirSync(folder1);
const files2 = fs.readdirSync(folder2);

// Sort the file lists to ensure they are in the same order
files1.sort();
files2.sort();

// Rename files in folder 2 to match folder 1
for (let i = 0; i < files1.length; i++) {
  const oldFilePath = path.join(folder2, files2[i]);
  const newFilePath = path.join(folder2, files1[i]);
  
  // Rename the file
  fs.renameSync(oldFilePath, newFilePath);
}

console.log('Files in folder 2 have been renamed to match the filenames in folder 1.');