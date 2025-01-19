import fs from 'fs'

const formatFilename = (data) => {
    return `${data.title}.md`;
}

// Function to format and return string data for readme
function formatReadmeData(answers) {

    // This object literal replaces a switch statement
    const sectionGenerators = {
        // For title key, print corresponding formatted template literal
        title: (value) => `# ${value}\n\n`,
        // And so on
        description: (value) => `## Description\n\n${value}\n`,
        toc: (value) => {
            if (value && answers['license'] !== 'none') {
                return `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribute](#contribute)\n- [Tests](#tests)\n- [Questions](#questions)\n- [License](#license)\n\n`;
            } else if (value && answers['license'] === 'none') {
                return `## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contribute](#contribute)\n- [Tests](#tests)\n- [Questions](#questions)\n\n`;
            } else {
                return ``;
            }
        },
        install: (value) => `## Installation\n\n${value}\n`,
        usage: (value) => `## Usage\n\n${value}\n`,
        contribution: (value) => `## Contribute\n\n${value}\n`,
        test: (value) => `## Tests\n\n${value}\n`,
        githubUsername: (value) => `## Questions\n\nThe author maintains a [GitHub account here](https://github.com/${value}).\n\n`,
        emailAddress: (value) => `They can otherwise be reached at [${value}](mailto:${value}).\n\n`,
        // Cannot figure out how to dodge a switch statement here, requires logic to  choose template literal
        // based on specific value.
        license: (value) => {
            switch (value) {
                case 'mit':
                    return `## License\n\nThis work is licensed under the MIT License.\n\nCopyright ${answers['year']} ${answers['copyName']}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\nDAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\nOTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE\nOR OTHER DEALINGS IN THE SOFTWARE.\n\n`;
                case 'gnuGPU3':
                    return `## License\n\nThis work is licensed under the GNU General Public License v3.0.\n\nCopyright (C) ${answers['year']}  ${answers['copyName']}\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n`;
                case 'apache':
                    return `## License\n\nThis work is licensed under the Apache License 2.0.\n\nCopyright ${answers['year']} ${answers['copyName']}\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express\nor implied. See the License for the specific language governing\npermissions and limitations under the License.\n\n`;
                case 'BSD2':
                    return `## License\n\nThis work is licensed under the BSD2-Clause "Simplified" License.\n\nCopyright (c) ${answers['year']}, ${answers['copyName']}\n\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification,\nare permitted provided that the following conditions are met:\n\n  * Redistributions of source code must retain the above copyright notice,\n    this list of conditions and the following disclaimer.\n  * Redistributions in binary form must reproduce the above copyright notice,\n    this list of conditions and the following disclaimer in the documentation\n    and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER\nOR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\nEXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\nPROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\nPROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF\nLIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING\nNEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\nSOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n`;
                case 'BSD3':
                    return `## License\n\nThis work is licensed under the BSD2-Clause "Simplified" License.\n\nCopyright (c) ${answers['year']}, ${answers['copyName']}\n\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification,\nare permitted provided that the following conditions are met:\n\n  * Redistributions of source code must retain the above copyright notice,\n    this list of conditions and the following disclaimer.\n  * Redistributions in binary form must reproduce the above copyright notice,\n    this list of conditions and the following disclaimer in the documentation\n    and/or other materials provided with the distribution.\n  * Neither the name of ${answers["title"]} nor the names of its contributors\n    may be used to endorse or promote products derived from this software\n    without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER\nOR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,\nEXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,\nPROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR\nPROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF\nLIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING\nNEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\nSOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\n`;
                case 'boost':
                    return `## License\n\nThis work is licensed under the Boost Software License 1.0.\n\nPermission is hereby granted, free of charge, to any person or organization\nobtaining a copy of the software and accompanying documentation covered by\nthis license (the "Software") to use, reproduce, display, distribute,\nexecute, and transmit the Software, and to prepare derivative works of the\nSoftware, and to permit third-parties to whom the Software is furnished to\ndo so, all subject to the following:\n\nThe copyright notices in the Software and this entire statement, including\nthe above license grant, this restriction and the following disclaimer,\nmust be included in all copies of the Software, in whole or in part, and\nall derivative works of the Software, unless such copies or derivative\nworks are solely in the form of machine-executable object code generated by\na source language processor.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT\nSHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE\nFOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,\nARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\nDEALINGS IN THE SOFTWARE.\n\n`;
                case 'ccz':
                    return `## License\n\nThis work has been dedicated to the public domain under the Creative Commons Zero v1.0 Universal license.\n\nMore information (including the full legal text of the license) can be found here:\n\nhttps://creativecommons.org/publicdomain/zero/1.0/legalcode.en\n\n`;
                case 'none':
                    return '';
                default:
                    return ``;
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