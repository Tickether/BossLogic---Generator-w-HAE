const fs = require('fs');
const path = require('path');
//console.log('asdasd')
const BASE_PATH = __dirname
// Define the directory where your JSON files are located
const directory = `${BASE_PATH}/output/metadata/yhh/Draken` // Replace with your actual directory path

// Define the values to search for
const characterToMatch = 'Draken';
const skinValuesToMatch = ['Tonal', 'Sense', 'Origin Skin'];
const detailsToMatch = 'Bones';

// Initialize a counter for matching files
let matchingFileCount = 0;

// Function to check if the conditions are met for a single JSON file
function checkConditionsForFile(filename) {
  const filePath = path.join(directory, filename);

  // Read the JSON file
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);

  // Check if the "Character" attribute is "Draken"
  const characterAttribute = data.attributes.find(attribute => attribute.trait_type === 'Character' && attribute.value === characterToMatch);

  if (characterAttribute) {
    // The "Character" attribute is "Draken," now check if the "Skin" attribute matches the specified values
    const skinAttribute = data.attributes.find(attribute => attribute.trait_type === 'Skin' && skinValuesToMatch.includes(attribute.value));

    if (skinAttribute) {
      // The "Skin" attribute matches, now check the "Details" attribute
      const detailsAttribute = data.attributes.find(attribute => attribute.trait_type === 'Details' && attribute.value === detailsToMatch);

      if (detailsAttribute) {
        // The conditions are met
        detailsAttribute.value = 'Origin Details Foo';
        matchingFileCount++;
      }
    }
  }
  // Save the modified data back to the file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log(`Processed: ${filename}`);
}

// Read and check conditions for all JSON files in the directory
const files = fs.readdirSync(directory);
for (const filename of files) {
  if (filename.endsWith('.json')) {
    checkConditionsForFile(filename);
  }
}

console.log(`Total files that meet the conditions: ${matchingFileCount}`);