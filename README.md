# README Generator

## Description

This is a simple application that generates README files within the terminal. It was written in JavaScript with Nodejs and inquirer dependencies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Clone this repo utilizing the green `<> Code` button to the folder of your choice. Optionally, download the source.

2. Make sure you have Node.js installed on your workstation. For instructions on installing Node.js for your operating system, please refer to the [Node.js website](https://nodejs.org).

3. Open a terminal (Linux/MacOS) or bash (Win) window and navigate to the source folder.

4. Run 'npm i' to initialize and download dependencies.

5. Run 'node index' to run the program.

## Usage

[Video walkthrough of the application](https://youtu.be/ui0sGw7zYE4)

Type 'node index' from your terminal or bash window within the source folder to run the program.

You will be provided a series a prompts to answer that will populate the README file. Please read on for some tips to walk through this process:

- Your output file will be named <project title>.md. If you are using this tool to write a readme file for a published project you will have to manually change the filename to README.md. NOTE: There are no prevention checks for overwriting files at this time.

- Several prompts will require you to press enter to open your native editor. For linux and macOS this is likely VIM. If you are entirely unfamiliar with VIM, here is a quick [VIM primer](https://www.freecodecamp.org/news/vim-beginners-guide/). For Windows, the editor will most likely be Notepad. NOTE: This is dependent on your individual system environment variables. You must save / write-out of the editor for the section to be processed by the program!

- These editor prompts will accept markdown styling. This entire README file was, in fact, created using this very program!

- The GitHub username and contact email address you enter will be automatically inserted into a questions section near the bottom of the README file. There are currently no validation checks on these inputs if you do not want to include this information, but you will have to go into the output and remove the boiler-plate text.


## Contribute

It is not likely this project will be maintained. I am sure there are better README generators out there and this was mostly created to build foundational JavaScript and Node.js skills. If you must, navigate to the [readme-generator repo](https://github.com/ant-codes-42/readme-generator) and make a post under issues.

## Tests

There are only a few meaningful permutations to run through given the logic of this program. Again, this will likely not be maintained so I leave it to you to discover them if you wish.

## Questions

The author maintains a [GitHub account here](https://github.com/ant-codes-42).

## License

This work is licensed under the MIT License.

Copyright 2025 Anthony Schwab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

