import fs from 'fs'
import inquirer from 'inquirer';

// Function to answer any given prompt
export function inquirerPrompt(prompt) {
    inquirer.prompt(prompt)
        .then((response) => appendToReadme('README.md', response));
}


// Function to append README file
function appendToReadme(fileName, data) {
    fs.appendFile(fileName, JSON.stringify(data), err => {
        if (err) {
            console.error(err);
        } else {
            // done!
        }
    });
}
export default appendToReadme;