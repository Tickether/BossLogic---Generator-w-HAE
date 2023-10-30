const fs = require('fs');
const path = require('path');

// Directory containing your JSON files
//const jsonFolder = '/path/to/your/json/folder';
const BASE_PATH = __dirname
const jsonFolder = `${BASE_PATH}/output/metadata/yhh/Draken`

// Read the directory and process each JSON file
fs.readdirSync(jsonFolder).forEach((filename) => {
    if (filename.endsWith('.json')) {
        const filePath = path.join(jsonFolder, filename);
        const nameWithoutExtension = path.basename(filename, '.json'); // Remove .json extension

        // Read the JSON file
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        // Update the "name" field
        jsonData.name = `FREQS #${nameWithoutExtension}`;

        // Write the updated JSON back to the file
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        console.log(`Updated name field in ${filename}`);
    }
});

console.log('Names updated successfully.');


