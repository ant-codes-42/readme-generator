import fs from 'fs'

const formatFilename = (data) => {
    return `${data.title}.md`;
}

const formatDataAsString = (data) => {
    return JSON.stringify(data);
}

// Function to append README file
// Declare variables in this function (maybe as a default function) to clear the errors
// Look at the .zip of 26
function writeToReadme(data) {

    const fileName = formatFilename(data);

    const dataToWrite = formatDataAsString(data);

    fs.writeFile(fileName, dataToWrite, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Written to file.")
        }
    });
}
export default writeToReadme;