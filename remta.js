const fs = require('fs');
const path = require('path');

const BASE_PATH = __dirname
const folder1Path = `${BASE_PATH}/output/metadata/yhh/Draken`//`${BASE_PATH}/cache'D:\renameScript\'; // Path to the JSON folder
const folder2Path = `${BASE_PATH}/output/metadata/yhh/newNewDraken`
//const  = 'path/to/folder1'; // Update with the path to your first folder
//const  = 'path/to/folder2'; // Update with the path to your second folder

// Read the list of files in folder1
const folder1Files = fs.readdirSync(folder1Path);

// Read the list of files in folder2
const folder2Files = fs.readdirSync(folder2Path);

// Make sure both folders have the same number of files
if (folder1Files.length === folder2Files.length) {
  for (let i = 0; i < folder1Files.length; i++) {
    const oldFilePath = path.join(folder2Path, folder2Files[i]);
    const newFilePath = path.join(folder2Path, folder1Files[i]);
    
    // Rename the file in folder2 to match the filename in folder1
    fs.renameSync(oldFilePath, newFilePath);
  }
  console.log('File renaming complete.');
} else {
  console.error('The two folders do not have the same number of files.');
}