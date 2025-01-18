// Import required packages
import writeToReadme from './write.js'
import inquirer from 'inquirer'


// Create an array of questions for user input
const questions = [
    {
        message: 'Enter the project title:',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Enter the project description:',
        type: 'editor',
        name: 'description'
    },
    {
        message: 'Include a Table of Contents?',
        type: 'confirm',
        default: 'true',
        name: 'toc'
    },
    {
        message: 'Enter the installation instructions:',
        type: 'editor',
        name: 'install'
    },
    {
        message: 'Enter the usage information:',
        type: 'editor',
        name: 'usage'
    },
    {
        message: 'Enter contribution guidelines:',
        type: 'editor',
        name: 'contribution'
    },
    {
        message: 'Enter test instructions:',
        type: 'editor',
        name: 'test'
    },
    {
        message: 'Enter the repo GitHub username:',
        type: 'input',
        name: 'githubUsername'
    },
    {
        message: 'Enter a contact email address:',
        type: 'input',
        name: 'emailAddress'
    },
    {
        message: 'Choose a license from the list:',
        type: 'list',
        choices: [
            { name: 'Apache License 2.0', value: 'apache' },
            { name: 'GNU General Public License v3.0', value: 'gnuGPU3' },
            { name: 'MIT License', value: 'mit' },
            { name: 'BSD 2-Clause "Simplified" License', value: 'BSD2' },
            { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD3' },
            { name: 'Boost Software License 1.0', value: 'boost' },
            { name: 'Creative Commons Zero v1.0 Universal', value: 'ccz' },
            { name: 'None', value: 'none' }
        ],
        name: 'license'
    },

];

// Init function kicks off inquirer and sends results to writeToReadme
// NOTE: formatReadmeData contains large amounts of logic and is in scope of writeToReadme - see write.js
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            if (answers.license !== 'none') {
                return inquirer.prompt([
                    {
                        message: 'Please enter the copyright year:',
                        type: 'input',
                        name: 'year',
                        // Validate function simulates a promise
                        validate: function (value) {
                            return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    // More checks could be implemented here, checking for 4 digits and making
                                    // sure it is a number
                                    if (value.length !== 4 || isNaN(value)) {
                                        reject('Please enter a valid year.');
                                    } else {
                                        resolve(true);
                                    }
                                }, 1000);
                            });
                        }
                    },
                    {
                        message: 'Please enter the copyright holder name:',
                        type: 'input',
                        name: 'copyName'
                    }
                ]).then((additionalAnswers) => {
                    return { ...answers, ...additionalAnswers };
                });
            } else {
                return answers;
            }
        })
        .then(answers => writeToReadme(answers));
}

// Function call to initialize app
init();
