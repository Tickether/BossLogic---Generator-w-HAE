const fs = require('fs');
const path = require('path');

const BASE_PATH = __dirname;
const folderPath = `${BASE_PATH}/output/metadata/yhh/newNewDraken` // Update with the path to your folder

// Read the list of files in the folder
const files = fs.readdirSync(folderPath);

// Loop through the files and rename them
for (const oldFileName of files) {
  const oldFilePath = path.join(folderPath, oldFileName);

  // Parse the existing file name to get the number
  const parsed = path.parse(oldFileName);
  const existingNumber = parseInt(parsed.name);

  // Add 10000 to the existing number
  const newNumber = existingNumber - 20000;

  // Create the new file name
  const newFileName = `${newNumber}${parsed.ext}`;
  const newFilePath = path.join(folderPath, newFileName);

  // Rename the file
  fs.renameSync(oldFilePath, newFilePath);
}

console.log('File renaming complete.');
