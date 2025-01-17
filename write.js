import fs from 'fs'
import inquirer from 'inquirer';

// Function to answer any given prompt
export function inquirerPrompt(prompt) {
    inquirer.prompt(prompt)
        .then((response) => writeToReadme('README.md', response));
}

const formatFilename = (data) => {
    return `${data.name}.md`;
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