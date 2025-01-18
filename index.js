// TODO: Include packages needed for this application
import writeToReadme from './write.js'
import inquirer from 'inquirer'


// TODO: Create an array of questions for user input
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
        message: 'Choose a license from the list:',
        type: 'list',
        choices: [
            { name: 'Apache License 2.0', value: 'apache' },
            { name: 'GNU General Public License v3.0', value: 'gnuGPU3' },
            { name: 'MIT License', value: 'mit' },
            { name: 'BSD 2-Clause "Simplified" License', value: 'BSD2' },
            { name: 'BSD 3-Clause "New" or "Revised" License', value: 'BSD3' },
            { name: 'Boost Software License 1.0', value: 'boost' },
            { name: 'Creative Commons Zero v1.0 Universal', value: 'ccz' }
        ],
        name: 'license'
    },
    {
        message: 'Enter your GitHub username:',
        type: 'input',
        name: 'githubUsername'
    },
    {
        message: 'Enter your email address:',
        type: 'input',
        name: 'emailAdress'
    }
];

// TODO: Create a function to initialize app
// Pass the questions array into the inquirer, send the result into the pre-formatted 'string' template
// for the README. Write all of this to to the file in one go. Do not need the destructuring.
function init() {
    const [title, description, install, usage, contribution, test, license, githubUsername, emailAddress] = questions;
    inquirer.prompt(questions)
    .then((response) => writeToReadme(response))
}

// Function call to initialize app
init();
