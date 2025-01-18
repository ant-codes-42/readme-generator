import fs from 'fs'

const formatFilename = (data) => {
    return `${data.title}.md`;
}

const formatDataAsString = (data) => {
    return JSON.stringify(data);
}

function formatReadmeData(answers) {
    let readmeData = '';

    for (const answer in answers) {

        switch (answer) {

            case 'title':
                readmeData += `# ${answers[answer]}\n\n`;
                break;

            case 'description':
                readmeData += `## Description\n\n${answers[answer]}\n\n`;
                break;

            case 'toc':
                if (answers[answer]) {
                    readmeData += `## Table of Contents\n\n`;
                    readmeData += `- [Installation](#installation)\n`;
                    readmeData += `- [Usage](#usage)\n`;
                    readmeData += `- [License](#license)\n`;
                    readmeData += `- [How to Contribute](#contribute)\n`;
                    readmeData += `- [Tests](#tests)\n`;
                    readmeData += `\n`;
                }
                break;

            case 'install':
                readmeData += `## Installation\n\n${answers[answer]}\n\n`;
                break;

            case 'usage':
                readmeData += `## Usage\n\n${answers[answer]}\n\n`;
                break;

            case 'contribution':
                readmeData += `## How to Contribute\n\n${answers[answer]}\n\n`;
                break;

            case 'test':
                readmeData += `## Tests\n\n${answers[answer]}`;
                break;

            //To-do: write the rest of cases. Also clean up the order of writing to var
            
            default:
                break;
        };   
    }
    return readmeData;
}

// Function to append README file
// Declare variables in this function (maybe as a default function) to clear the errors
// Look at the .zip of 26
function writeToReadme(data) {

    const fileName = formatFilename(data);

    const dataToWrite = formatReadmeData(data);

    fs.writeFile(fileName, dataToWrite, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Written to file.")
        }
    });
}
export default writeToReadme;