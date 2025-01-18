import fs from 'fs'

const formatFilename = (data) => {
    return `${data.title}.md`;
}

const formatDataAsString = (data) => {
    return JSON.stringify(data);
}

// Function to format and return string data for readme
function formatReadmeData(answers) {

    // This object literal replaces a switch statement
    const sectionGenerators = {
        // For title key, print corresponding formatted template literal
        title: (value) => `# ${value}\n\n`,
        // And so on
        description: (value) => `## Description\n\n${value}\n`,
        toc: (value) => value ? `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [How to Contribute](#contribute)\n- [Tests](#tests)\n- [Questions](#questions)\n\n` : '',
        install: (value) => `## Installation\n\n${value}\n`,
        usage: (value) => `## Usage\n\n${value}\n`,
        contribution: (value) => `## How to Contribute\n\n${value}\n`,
        test: (value) => `## Tests\n\n${value}\n`,
        githubUsername: (value) => `## Questions\n\nThe author maintains a [GitHub account here](https://github.com/${value}).\n\n`,
        emailAddress: (value) => `They can otherwise be reached at [${value}](mailto:${value}).`,
        // Cannot figure out how to dodge a switch statement here, requires logic to  choose template literal
        // based on specific value.
        license: (value) => {
            switch (value) {
                case 'mit':
                    return `## License\n\nThis project is licensed under the MIT License.\n`;
                case 'gnuGPU3':
                    return `## License\n\nThis project is licensed under the GNU General Public License v3.0.\n`;
                case 'apache':
                    return `## License\n\nThis project is licensed under the Apache License 2.0.\n`;
                case 'none':
                    return '';
                default:
                    return `## License\n\nThis project is licensed under the ${value} License.\n`;
            }
        }
    };

    // Initialize master string var
    let readmeData = '';

    // If key match is found, plug answer value into corresponding template literal
    // and append to master string var.
    for (const key in answers) {
        if (sectionGenerators[key]) {
            readmeData += sectionGenerators[key](answers[key]);
        }
    }

    return readmeData;
}

// Function to write README file
function writeToReadme(data) {
    // Declare the filename parameter based off user input title
    const fileName = formatFilename(data);
    // Declare the data to write - string, please see formatReadmeData function
    const dataToWrite = formatReadmeData(data);

    // Write readme data to file, throw error if encountered, otherwise console log success.
    fs.writeFile(fileName, dataToWrite, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Written to file.")
        }
    });
}
export default writeToReadme;