const fs = require('fs');
const path = require('path');

//const  = '/path/to/json/files'; // Replace with the path to your JSON files directory
const BASE_PATH = __dirname
const directoryPath = `${BASE_PATH}/output/metadata/yhh/newNewDraken`
// Read the files in the directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter JSON files
    const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');

    // Sort the JSON files by their index
    jsonFiles.sort();

    // Rename the files based on their index
    jsonFiles.forEach((file, index) => {
        const oldPath = path.join(directoryPath, file);
        const newPath = path.join(directoryPath, `${index + 10000}.json`);

        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.error(`Error renaming ${file}: ${err}`);
            } else {
                console.log(`Renamed ${file} to ${index + 10000}.json`);
            }
        });
    });
});
